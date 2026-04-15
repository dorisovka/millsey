"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Link from "./_Builtin/Link";
import List from "./_Builtin/List";
import ListItem from "./_Builtin/ListItem";
import { Css } from "./Css";

export function UnknownComponent5({
  as: _Component = Block,

  level1Link = {
    href: "#",
  },

  level1Text = "Level 1",
  level1Visibility = true,

  level2Link = {
    href: "#",
  },

  level2Text = "Level 2",
  level2Visibility = true,

  level3Link = {
    href: "#",
  },

  level3Text = "Level 3",
  level3Visibility = true,

  level4Link = {
    href: "#",
  },

  level4Text = "Level 4",
  text = "Главная",
}) {
  return (
    <_Component
      aria-label="Breadcrumb"
      className={_utils.cx(_styles, "breadcrumb")}
      tag="nav"
    >
      <Css />
      <List
        className={_utils.cx(_styles, "breadcrumb_list")}
        tag="ol"
        unstyled={false}
      >
        <ListItem className={_utils.cx(_styles, "breadcrumb_list_item")}>
          <Link
            block=""
            button={false}
            className={_utils.cx(_styles, "breadcrumb_link", "link-underline")}
            options={{
              href: "#",
            }}
          >
            {text}
          </Link>
        </ListItem>
        {level1Visibility ? (
          <ListItem className={_utils.cx(_styles, "breadcrumb_list_item")}>
            <Link
              block=""
              button={false}
              className={_utils.cx(
                _styles,
                "breadcrumb_link",
                "link-underline"
              )}
              options={level1Link}
            >
              {level1Text}
            </Link>
          </ListItem>
        ) : null}
        {level2Visibility ? (
          <ListItem className={_utils.cx(_styles, "breadcrumb_list_item")}>
            <Link
              block=""
              button={false}
              className={_utils.cx(
                _styles,
                "breadcrumb_link",
                "link-underline"
              )}
              options={level2Link}
            >
              {level2Text}
            </Link>
          </ListItem>
        ) : null}
        {level3Visibility ? (
          <ListItem className={_utils.cx(_styles, "breadcrumb_list_item")}>
            <Link
              block=""
              button={false}
              className={_utils.cx(
                _styles,
                "breadcrumb_link",
                "link-underline"
              )}
              options={level3Link}
            >
              {level3Text}
            </Link>
          </ListItem>
        ) : null}
        <ListItem className={_utils.cx(_styles, "breadcrumb_list_item")}>
          <Link
            aria-current="page"
            block=""
            button={false}
            className={_utils.cx(_styles, "breadcrumb_link", "link-underline")}
            options={level4Link}
          >
            {level4Text}
          </Link>
        </ListItem>
      </List>
    </_Component>
  );
}
