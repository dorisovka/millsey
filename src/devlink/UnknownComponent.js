"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import BlockContainer from "./_Builtin/BlockContainer";
import Heading from "./_Builtin/Heading";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import NotSupported from "./_Builtin/NotSupported";
import Paragraph from "./_Builtin/Paragraph";
import Section from "./_Builtin/Section";
import * as _interactions from "./interactions";
import { WishlistMini } from "./WishlistMini";

const _interactionsData = JSON.parse(
  '{"events":{"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main"],"target":{"selector":".swiper-slide.home-slider_slide","originalId":"6893878d254e1daa66e3f93a|70cf2aff-3c83-7207-5a75-d17988fda905","appliesTo":"CLASS"},"targets":[{"selector":".swiper-slide.home-slider_slide","originalId":"6893878d254e1daa66e3f93a|70cf2aff-3c83-7207-5a75-d17988fda905","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758197158602},"e-32":{"id":"e-32","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main"],"target":{"selector":".swiper-slide.home-slider_slide","originalId":"6893878d254e1daa66e3f93a|70cf2aff-3c83-7207-5a75-d17988fda905","appliesTo":"CLASS"},"targets":[{"selector":".swiper-slide.home-slider_slide","originalId":"6893878d254e1daa66e3f93a|70cf2aff-3c83-7207-5a75-d17988fda905","appliesTo":"CLASS"}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758197158602}},"actionLists":{"a-12":{"id":"a-12","title":"Hover On Home Slider","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":1,"yValue":1,"locked":true}},{"id":"a-12-n-3","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{},"filters":[{"type":"brightness","filterId":"102f","value":80,"unit":"%"}]}}]},{"actionItems":[{"id":"a-12-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":1.05,"yValue":1.05,"locked":true}},{"id":"a-12-n-4","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":500,"target":{},"filters":[{"type":"brightness","filterId":"102f","value":70,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":true,"createdOn":1758197185483},"a-13":{"id":"a-13","title":"Hover Out Home Slider","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{},"xValue":1,"yValue":1,"locked":true}},{"id":"a-13-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":500,"target":{},"filters":[{"type":"brightness","filterId":"102f","value":100,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758197185483}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UnknownComponent({ as: _Component = Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_slider", "padding-section-medium")}
      data-rv-section=""
      grid={{
        type: "section",
      }}
      id={_utils.cx(_styles, "recently-viewed")}
      tag="section"
    >
      <BlockContainer
        className={_utils.cx(_styles, "container-medium")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
          tag="div"
        >
          <Heading tag="h2">{"Вы недавно смотрели"}</Heading>
        </Block>
        <Block className={_utils.cx(_styles, "home-slider_wrapper")} tag="div">
          <NotSupported _atom="Collection List" />
          <Block
            className={_utils.cx(_styles, "home-slider_controls")}
            tag="div"
          >
            <Block
              className={_utils.cx(
                _styles,
                "slider_arrow",
                "slider_arrow-left"
              )}
              data-swiper-for="rv"
              tag="div"
            >
              <HtmlEmbed
                className={_utils.cx(_styles, "icon-1x1-medium")}
                content=""
                value="%3Csvg%20aria-hidden%3D%22true%22%20role%3D%22img%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221%22%20vector-effect%3D%22non-scaling-stroke%22%3E%3Cg%3E%3Cpath%20d%3D%22M14%206.5L8.5%2012L14%2017.5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
            </Block>
            <Block
              className={_utils.cx(
                _styles,
                "slider_arrow",
                "slider_arrow-right"
              )}
              data-swiper-for="rv"
              tag="div"
            >
              <HtmlEmbed
                className={_utils.cx(_styles, "icon-1x1-medium")}
                content=""
                value="%3Csvg%20aria-hidden%3D%22true%22%20role%3D%22img%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221%22%20vector-effect%3D%22non-scaling-stroke%22%3E%3Cg%3E%3Cpath%20d%3D%22M10%2017.5L15.5%2012L10%206.5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
            </Block>
          </Block>
        </Block>
      </BlockContainer>
      <HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css")}
        content=""
        value="%3Cstyle%3E%0A.slider_arrow.slider_arrow-visible%20%7B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20visibility%3A%20visible%3B%0A%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%7D%0A%20%20%0A%20%20.slider_arrow%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transition%3A%20opacity%20.3s%20ease%2C%20visibility%20.3s%20ease%3B%0A%20%20%20%20visibility%3A%20hidden%3B%0A%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
      <HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js")}
        content=""
        value="%3Cscript%3E%0Adocument.addEventListener('DOMContentLoaded'%2C%20function%20()%20%7B%0A%0A%20%20const%20section%20%3D%20document.querySelector('%23recently-viewed')%3B%0A%20%20if%20(!section)%20return%3B%0A%0A%20%20section.querySelectorAll('.swiper.slider').forEach(root%20%3D%3E%20%7B%0A%0A%20%20%20%20if%20(root._recentlySwiper)%20return%3B%0A%0A%20%20%20%20const%20prev%20%3D%20root.querySelector('.slider_arrow-left')%3B%0A%20%20%20%20const%20next%20%3D%20root.querySelector('.slider_arrow-right')%3B%0A%0A%20%20%20%20const%20swiper%20%3D%20new%20Swiper(root%2C%20%7B%0A%20%20%20%20%20%20slidesPerView%3A%201.2%2C%0A%20%20%20%20%20%20spaceBetween%3A%208%2C%0A%20%20%20%20%20%20watchOverflow%3A%20true%2C%0A%20%20%20%20%20%20grabCursor%3A%20true%2C%0A%20%20%20%20%20%20keyboard%3A%20%7B%20enabled%3A%20true%20%7D%2C%0A%0A%20%20%20%20%20%20observer%3A%20true%2C%0A%20%20%20%20%20%20observeParents%3A%20true%2C%0A%20%20%20%20%20%20observeSlideChildren%3A%20true%2C%0A%0A%20%20%20%20%20%20breakpoints%3A%20%7B%0A%20%20%20%20%20%20%20%20478%3A%20%7B%20slidesPerView%3A%203.2%2C%20spaceBetween%3A%208%20%7D%2C%0A%20%20%20%20%20%20%20%20768%3A%20%7B%20slidesPerView%3A%204%2C%20spaceBetween%3A%208%20%7D%2C%0A%20%20%20%20%20%20%20%20992%3A%20%7B%20slidesPerView%3A%206%2C%20spaceBetween%3A%208%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20navigation%3A%20%7B%20%0A%20%20%20%20%20%20%20%20prevEl%3A%20prev%2C%20%0A%20%20%20%20%20%20%20%20nextEl%3A%20next%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20function%20updateArrows()%7B%0A%20%20%20%20%20%20if%20(!prev%20%7C%7C%20!next)%20return%3B%0A%20%20%20%20%20%20const%20locked%20%3D%20!!swiper.isLocked%3B%0A%20%20%20%20%20%20prev.classList.toggle('slider_arrow-visible'%2C%20!swiper.isBeginning%20%26%26%20!locked)%3B%0A%20%20%20%20%20%20next.classList.toggle('slider_arrow-visible'%2C%20!swiper.isEnd%20%26%26%20!locked)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20debounce%20%3D%20(fn%2C%20t%3D50)%20%3D%3E%20%7B%0A%20%20%20%20%20%20let%20id%3B%20return%20(...a)%20%3D%3E%20%7B%20clearTimeout(id)%3B%20id%20%3D%20setTimeout(()%3D%3Efn(...a)%2C%20t)%3B%20%7D%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20const%20hardUpdate%20%3D%20debounce(()%20%3D%3E%20%7B%20swiper.update()%3B%20updateArrows()%3B%20%7D%2C%2050)%3B%0A%0A%20%20%20%20swiper.on('afterInit%20slideChange%20update%20resize%20breakpoint%20imagesReady'%2C%20updateArrows)%3B%0A%20%20%20%20updateArrows()%3B%0A%0A%20%20%20%20function%20hookImgs(scope)%7B%0A%20%20%20%20%20%20scope.querySelectorAll('img').forEach(img%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(!img._swiperHooked)%20%7B%0A%20%20%20%20%20%20%20%20%20%20img._swiperHooked%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20if%20(!img.complete)%20img.addEventListener('load'%2C%20hardUpdate%2C%20%7B%20once%3A%20true%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%20%20hookImgs(root)%3B%0A%0A%20%20%20%20const%20wrapper%20%3D%20root.querySelector('.swiper-wrapper')%3B%0A%20%20%20%20if%20(wrapper)%20%7B%0A%20%20%20%20%20%20const%20mo%20%3D%20new%20MutationObserver(muts%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20let%20need%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20muts.forEach(m%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(m.addedNodes%20%26%26%20m.addedNodes.length)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20need%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20m.addedNodes.forEach(n%20%3D%3E%20n.nodeType%20%3D%3D%3D%201%20%26%26%20hookImgs(n))%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20if%20(need)%20hardUpdate()%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20mo.observe(wrapper%2C%20%7B%20childList%3A%20true%2C%20subtree%3A%20true%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20root._recentlySwiper%20%3D%20swiper%3B%0A%20%20%7D)%3B%0A%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%0A%3Cscript%3E%0Adocument.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%20%20const%20ROOT%20%3D%20document.querySelector('.section_slider%23recently-viewed')%3B%0A%20%20if%20(!ROOT)%20return%3B%0A%0A%20%20function%20rvGetSlug(input)%20%7B%0A%20%20%20%20let%20href%20%3D%20String(input%20%7C%7C%20'')%3B%0A%20%20%20%20href%20%3D%20href.split('%23')%5B0%5D.split('%3F')%5B0%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.replace(%2F%5C%2F%2B%24%2F%2C'')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.replace(%2F%5Ehttps%3F%3A%5C%2F%5C%2F%5B%5E%2F%5D%2B%2F%2C'')%3B%0A%20%20%20%20try%20%7B%20href%20%3D%20decodeURIComponent(href)%3B%20%7D%20catch%20%7B%7D%0A%20%20%20%20const%20last%20%3D%20href.split('%2F').filter(Boolean).pop()%20%7C%7C%20''%3B%0A%20%20%20%20return%20last.toLowerCase().replace(%2F%5C.html%3F%24%2F%2C'')%3B%0A%20%20%7D%0A%0A%20%20let%20viewed%20%3D%20%5B%5D%3B%0A%20%20try%20%7B%20viewed%20%3D%20JSON.parse(localStorage.getItem('rv_slugs_v2'))%20%7C%7C%20%5B%5D%3B%20%7D%20catch%20%7B%7D%0A%20%20if%20(!viewed.length)%20%7B%20ROOT.style.display%20%3D%20'none'%3B%20return%3B%20%7D%0A%0A%20%20const%20current%20%3D%20rvGetSlug(location.pathname)%3B%0A%20%20if%20(current)%20viewed%20%3D%20viewed.filter(x%20%3D%3E%20x.slug%20!%3D%3D%20current)%3B%0A%20%20if%20(!viewed.length)%20%7B%20ROOT.style.display%20%3D%20'none'%3B%20return%3B%20%7D%0A%0A%20%20const%20LIMIT%20%3D%2010%3B%0A%20%20const%20order%20%3D%20viewed.map(x%20%3D%3E%20x.slug).slice(-LIMIT)%3B%0A%20%20const%20indexBySlug%20%3D%20new%20Map(order.map((s%2Ci)%3D%3E%5Bs%2Ci%5D))%3B%0A%0A%20%20const%20list%20%20%3D%20ROOT.querySelector('%5Bdata-rv-list%5D%20.w-dyn-items')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%7C%7C%20ROOT.querySelector('.w-dyn-items')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%7C%7C%20ROOT%3B%0A%20%20const%20items%20%3D%20Array.from(list.querySelectorAll('.w-dyn-item'))%3B%0A%0A%20%20const%20linkSel%20%3D%20'.catalog-card_link%5Bhref%5D%2C%20.product-card_link%5Bhref%5D%2C%20a%5Bhref%5D'%3B%0A%0A%20%20const%20kept%20%3D%20%5B%5D%3B%0A%20%20for%20(const%20it%20of%20items)%20%7B%0A%20%20%20%20const%20ds%20%20%20%3D%20it.querySelector('%5Bdata-slug%5D')%3F.getAttribute('data-slug')%3B%0A%20%20%20%20const%20href%20%3D%20it.querySelector(linkSel)%3F.getAttribute('href')%20%7C%7C%20''%3B%0A%20%20%20%20const%20slug%20%3D%20ds%20%7C%7C%20rvGetSlug(href)%3B%0A%20%20%20%20const%20idx%20%20%3D%20indexBySlug.get(slug)%3B%0A%20%20%20%20if%20(idx%20!%3D%3D%20undefined)%20kept.push(%7B%20node%3A%20it%2C%20idx%20%7D)%3B%0A%20%20%20%20else%20it.remove()%3B%0A%20%20%7D%0A%0A%20%20if%20(!kept.length)%20%7B%20ROOT.style.display%20%3D%20'none'%3B%20return%3B%20%7D%0A%0A%20%20kept.sort((a%2Cb)%3D%3Ea.idx%20-%20b.idx).forEach(x%20%3D%3E%20list.appendChild(x.node))%3B%0A%0A%20%20window.mySwiper%3F.update%3F.()%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
