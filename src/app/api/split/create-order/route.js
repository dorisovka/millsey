export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    console.log('SPLIT PAYLOAD:', JSON.stringify(body, null, 2));

    const item = body?.items?.[0];

    if (!item) {
      return new Response(JSON.stringify({ error: 'No item' }), {
        status: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
      });
    }

    const merchantId = process.env.YANDEX_MERCHANT_ID;
    const apiKey = process.env.YANDEX_API_KEY;

    if (!merchantId || !apiKey) {
      console.error('Missing env vars', { merchantId, apiKey });
      return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
        status: 500,
        headers: { 'Access-Control-Allow-Origin': '*' },
      });
    }

    const quantity = item.quantity || 1;
    const total = String(Math.round(item.price * quantity));

    const payload = {
      orderId: `order-${Date.now()}`,
      currencyCode: 'RUB',
      cart: {
        items: [
          {
            productId: item.sku || item.title,
            title: item.title,
            quantity: {
              count: quantity,
              label: 'шт',
            },
            unitPrice: String(item.price),
            total: total,
          },
        ],
        total: total,
      },
      redirectUrls: {
        onSuccess: item.url,
        onError: item.url,
      },
    };

    console.log('YANDEX REQUEST PAYLOAD:', JSON.stringify(payload, null, 2));

    const res = await fetch('https://sandbox.pay.yandex.ru/api/merchant/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Api-Key ${apiKey}`,
        'X-Merchant-Id': merchantId,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log('YANDEX RESPONSE:', JSON.stringify(data, null, 2));

    if (!res.ok) {
      console.error('Yandex API Error:', data);
      return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { 'Access-Control-Allow-Origin': '*' },
      });
    }

    return new Response(
      JSON.stringify({
        payment_url: data?.data?.paymentUrl,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('ERROR:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
}