"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import Section from "./_Builtin/Section";

export function UnknownComponent3({
  as: _Component = Section,
  unknownProp = "Подбор и поставка офисной мебели длякорпоративных клиентов",
  unknownProp2 = "Подробнее",
  unknownProp3 = "https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/693d870628b81437d76b253c_corporate_millsey.avif",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_corporate")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block className={_utils.cx(_styles, "container-medium")} tag="div">
        <Block className={_utils.cx(_styles, "corporate_component")} tag="div">
          <Block className={_utils.cx(_styles, "corporate_content")} tag="div">
            <Block className={_utils.cx(_styles, "corporate_text")} tag="div">
              <Heading
                className={_utils.cx(_styles, "text-color-tertiary")}
                tag="h2"
              >
                {unknownProp}
              </Heading>
            </Block>
            <Block
              className={_utils.cx(_styles, "corporate_actions")}
              tag="div"
            >
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "home-hero_button")}
                options={{
                  href: "#",
                }}
              >
                <Block tag="div">{"Перейти"}</Block>
              </Link>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "corporate_overlay")}
            tag="div"
          />
          <Block className={_utils.cx(_styles, "corporate_media")} tag="div">
            <Image
              alt=""
              className={_utils.cx(_styles, "corporate_media-image")}
              height="auto"
              loading="lazy"
              src={unknownProp3}
              width="auto"
            />
          </Block>
        </Block>
      </Block>
    </_Component>
  );
}
