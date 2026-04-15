"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import HtmlEmbed from "./_Builtin/HtmlEmbed";

export function Css({ as: _Component = HtmlEmbed }) {
  return (
    <_Component
      className={_utils.cx(_styles, "breadcrumb_style")}
      content=""
      value="%3Cstyle%3E%0Anav%5Baria-label%3D%22Breadcrumb%22%5D%20ol%20li%3Anot(%3Alast-child)%3A%3Aafter%20%7B%0A%20%20content%3A%20%22%2F%22%3B%0A%20%20color%3A%20var(--_theme---text--secondary)%0A%7D%0A%0A.breadcrumb_link.w--current%20%7B%0A%09color%3A%20var(--_theme---text--primary)%3B%0A%7D%0A%3C%2Fstyle%3E"
    />
  );
}
