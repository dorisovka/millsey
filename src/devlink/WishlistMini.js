"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import DOM from "./_Builtin/DOM";
import Link from "./_Builtin/Link";

export function WishlistMini({ as: _Component = Link }) {
  return (
    <_Component
      block="inline"
      button={false}
      className={_utils.cx(_styles, "catalog-card_wishlist-button")}
      options={{
        href: "#",
      }}
    >
      <DOM
        className={_utils.cx(
          _styles,
          "cart_popup-close-icon",
          "catalog-card_wishlist-icon"
        )}
        fill="currentColor"
        slot=""
        stroke="inherit"
        tag="svg"
        viewBox="0 0 32 32"
      >
        <DOM
          className={_utils.cx(_styles)}
          d="M20.5833 8.08333H11.4167V23.9167C13.1602 19.7322 18.8398 19.7322 20.5833 23.9167V8.08333Z"
          slot=""
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          tag="path"
          vector-effect="non-scaling-stroke"
        />
      </DOM>
    </_Component>
  );
}
