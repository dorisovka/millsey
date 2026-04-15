"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import HtmlEmbed from "./_Builtin/HtmlEmbed";

export function RichTextCss({ as: _Component = HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "u-embed-css")}
      content=""
      value="%3Cstyle%3E%0A.w-richtext%20h1%20%7B%0A%20%20margin-bottom%3A%201.5rem%3B%0A%7D%0A.w-richtext%20h2%20%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A.w-richtext%20h3%2C%0A.w-richtext%20h4%2C%0A.w-richtext%20h5%20%7B%0A%20%20margin-top%3A%202rem%3B%0A%20%20margin-bottom%3A%200.5rem%3B%0A%7D%0A.w-richtext%20p%20%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A.w-richtext%20ul%20%7B%0A%09%09margin-bottom%3A%201rem%3B%0A%09%7D%0A.w-richtext%20a%20%7B%0A%09color%3A%20color-mix(in%20srgb%2C%20currentColor%2050%25%2C%20transparent)%3B%0A%20%20text-decoration-color%3A%20color-mix(in%20srgb%2C%20currentColor%2050%25%2C%20transparent)%3B%0A%20%20text-underline-offset%3A%2015%25%3B%0A%20%20transition%3A%20color%200.2s%20ease%2C%20text-decoration-color%200.2s%20ease%3B%0A%7D%0A.w-richtext%20a%3Ahover%20%7B%0A%20%20color%3A%20var(--theme-text)%3B%0A%20%20text-decoration-color%3A%20var(--theme-text)%3B%0A%7D%0A.w-richtext%20img%20%7B%0A%20%20margin%3A%200.5rem%200%3B%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20.w-richtext%20h2%20%7B%0A%20%20%20%20margin-bottom%3A%200.75rem%3B%0A%20%20%7D%0A%20%20.w-richtext%20h3%2C%0A%20%20.w-richtext%20h4%2C%0A%20%20.w-richtext%20h5%20%7B%0A%20%20%20%20margin-top%3A%201.5rem%3B%0A%20%20%20%20margin-bottom%3A%200.5rem%3B%0A%20%20%7D%0A%20%20.w-richtext%20p%20%7B%0A%20%20%20%20margin-bottom%3A%200.5rem%3B%0A%20%20%7D%0A%20%20.w-richtext%20ul%20%7B%0A%09%09margin-bottom%3A%200.5rem%3B%0A%09%7D%0A%20%20.w-richtext%20img%20%7B%0A%20%20width%3A%20100%25%0A%20%20%20%20margin%3A%200.5rem%200%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"
    />
  );
}
