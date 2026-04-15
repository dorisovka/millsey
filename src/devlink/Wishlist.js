"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import DOM from "./_Builtin/DOM";
import HtmlEmbed from "./_Builtin/HtmlEmbed";

export function Wishlist({ as: _Component = DOM }) {
  return (
    <_Component
      aria-label="Добавить в избранное"
      className={_utils.cx(_styles, "product-bar_button-wishlist")}
      slot=""
      tag="button"
      type="button"
    >
      <HtmlEmbed
        className={_utils.cx(_styles, "icon-1x1-medium")}
        content=""
        value="%3Csvg%20aria-hidden%3D%22true%22%20role%3D%22img%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20vector-effect%3D%22non-scaling-stroke%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M17.5%202.5H6.49997V21.5C8.59221%2016.4786%2015.4077%2016.4786%2017.5%2021.5V2.5Z%22%2F%3E%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
