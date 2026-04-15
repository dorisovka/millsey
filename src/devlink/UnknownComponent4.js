"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Link from "./_Builtin/Link";
import Paragraph from "./_Builtin/Paragraph";

export function UnknownComponent4({
  as: _Component = Block,
  emptyDescription = "Попробуйте удалить какой-нибудь фильтр",
  emptyHeading = "Ничего не нашлось",
}) {
  return (
    <_Component className={_utils.cx(_styles, "catalog_no-result")} tag="div">
      <Block className={_utils.cx(_styles, "empty-state")} tag="div">
        <Block className={_utils.cx(_styles, "empty-state_content")} tag="div">
          <HtmlEmbed
            className={_utils.cx(_styles, "empty-state_icon")}
            content=""
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M20.2257%2027.3726C19.7514%2027.9043%2019.1704%2028.33%2018.5205%2028.6219C17.8706%2028.9139%2017.1664%2029.0655%2016.4539%2029.0668C15.7414%2029.0681%2015.0367%2028.9192%2014.3857%2028.6297C13.7347%2028.3402%2013.152%2027.9166%2012.6758%2027.3867%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22square%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M35.3369%2027.3726C34.8627%2027.9043%2034.2816%2028.33%2033.6317%2028.6219C32.9818%2028.9139%2032.2776%2029.0655%2031.5651%2029.0668C30.8527%2029.0681%2030.1479%2028.9192%2029.4969%2028.6297C28.8459%2028.3402%2028.2633%2027.9166%2027.7871%2027.3867%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22square%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M36.3874%2020.8493C34.056%2020.166%2031.9055%2018.9732%2030.0913%2017.3572%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22square%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M11.6125%2020.8493C13.9453%2020.1656%2016.0969%2018.9719%2017.9116%2017.3545%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22square%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M20.2222%2037.2224H27.7778M42.8889%2024.0001C42.8889%2034.4322%2034.432%2042.889%2024%2042.889C13.5679%2042.889%205.11108%2034.4322%205.11108%2024.0001C5.11108%2013.568%2013.5679%205.11108%2024%205.11108C34.432%205.11108%2042.8889%2013.568%2042.8889%2024.0001Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <Paragraph className={_utils.cx(_styles, "empty-state_title")}>
            {"Ничего не нашлось"}
          </Paragraph>
          <Paragraph className={_utils.cx(_styles, "empty-state_description")}>
            {"Попробуйте удалить какой-нибудь фильтр"}
          </Paragraph>
          <Link
            block=""
            button={true}
            className={_utils.cx(_styles, "button", "is-secondary")}
            fs-list-element="clear"
            options={{
              href: "#",
            }}
          >
            {"Сбросить все фильтры"}
          </Link>
        </Block>
      </Block>
      <HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js")}
        content=""
        value="%3C!--%20%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82%20Empty%20State%20%D0%BF%D1%80%D0%B8%20%D0%BD%D0%B5%D1%81%D0%BE%D0%B2%D0%BF%D0%B0%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8%20%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%BE%D0%B2%20--%3E%0A%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20const%20list%20%3D%20document.querySelector(%22.catalog_list%22)%3B%0A%20%20const%20noResult%20%3D%20document.querySelector(%22.catalog_no-result%22)%3B%0A%0A%20%20if%20(!list%20%7C%7C%20!noResult)%20return%3B%0A%0A%20%20const%20toggle%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(getComputedStyle(list).display%20%3D%3D%3D%20%22none%22)%20%7B%0A%20%20%20%20%20%20noResult.style.display%20%3D%20%22block%22%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20noResult.style.display%20%3D%20%22none%22%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20toggle()%3B%0A%0A%20%20const%20observer%20%3D%20new%20MutationObserver(toggle)%3B%0A%20%20observer.observe(list%2C%20%7B%20attributes%3A%20true%2C%20attributeFilter%3A%20%5B%22style%22%5D%20%7D)%3B%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
