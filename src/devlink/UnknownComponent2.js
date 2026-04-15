"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import Grid from "./_Builtin/Grid";
import Heading from "./_Builtin/Heading";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Link from "./_Builtin/Link";
import Paragraph from "./_Builtin/Paragraph";
import Section from "./_Builtin/Section";

export function UnknownComponent2({
  as: _Component = Section,
  visibilityMap = true,
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section_contacts",
        "padding-section-large"
      )}
      grid={{
        type: "section",
      }}
      id={_utils.cx(_styles, "contacts")}
      tag="section"
    >
      <Block className={_utils.cx(_styles, "container-medium")} tag="div">
        <Block
          className={_utils.cx(_styles, "margin-bottom", "margin-medium")}
          tag="div"
        >
          <Heading tag="h2">{"Адреса шоурумов"}</Heading>
        </Block>
        <Grid className={_utils.cx(_styles, "contacts_grid")} tag="div">
          <Block
            className={_utils.cx(_styles, "contacts_item")}
            id={_utils.cx(
              _styles,
              "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a74e-2ed3a748"
            )}
            tag="div"
          >
            <Paragraph className={_utils.cx(_styles, "text-size-large")}>
              {"Москва"}
            </Paragraph>
            <Block className={_utils.cx(_styles, "divider")} tag="div" />
            <Block className={_utils.cx(_styles, "contacts_info")} tag="div">
              <Block className={_utils.cx(_styles, "contacts_row")} tag="div">
                <Block
                  className={_utils.cx(_styles, "contacts_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a754-2ed3a748"
                  )}
                  tag="div"
                >
                  <Paragraph
                    className={_utils.cx(_styles, "text-color-secondary")}
                    id={_utils.cx(
                      _styles,
                      "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a755-2ed3a748"
                    )}
                  >
                    {"Адрес"}
                  </Paragraph>
                </Block>
                <Paragraph
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a757-2ed3a748"
                  )}
                >
                  {"Аллея Первой Маевки, 15, стр. 6"}
                </Paragraph>
              </Block>
              <Block className={_utils.cx(_styles, "contacts_row")} tag="div">
                <Block
                  className={_utils.cx(_styles, "contacts_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a75a-2ed3a748"
                  )}
                  tag="div"
                >
                  <Paragraph
                    className={_utils.cx(_styles, "text-color-secondary")}
                    id={_utils.cx(
                      _styles,
                      "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a75b-2ed3a748"
                    )}
                  >
                    {"Телефон"}
                  </Paragraph>
                </Block>
                <Link
                  block=""
                  button={false}
                  className={_utils.cx(_styles, "link-underline")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a75d-2ed3a748"
                  )}
                  options={{
                    href: "tel:+74951202219",
                  }}
                >
                  {"+7 (495) 120-22-19"}
                </Link>
              </Block>
              <Block className={_utils.cx(_styles, "contacts_row")} tag="div">
                <Block
                  className={_utils.cx(_styles, "contacts_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a760-2ed3a748"
                  )}
                  tag="div"
                >
                  <Paragraph
                    className={_utils.cx(_styles, "text-color-secondary")}
                    id={_utils.cx(
                      _styles,
                      "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a761-2ed3a748"
                    )}
                  >
                    {"Режим работы"}
                  </Paragraph>
                </Block>
                <Paragraph
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a763-2ed3a748"
                  )}
                >
                  {"По предварительной записи ежедневно с 10:00 до 21:00"}
                </Paragraph>
              </Block>
            </Block>
            {visibilityMap ? (
              <HtmlEmbed
                className={_utils.cx(_styles, "contacts_map-embed")}
                content=""
                value="%3Ciframe%20src%3D%22https%3A%2F%2Fyandex.ru%2Fmap-widget%2Fv1%2F%3Fum%3Dconstructor%253Ab4579fae0c30e0c2f39037b3d6e6d7e7a178812ea93bfcbb1e560d5e6844ecea%26amp%3Bsource%3Dconstructor%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22border%3A0%3B%22%20title%3D%22%D0%9A%D0%B0%D1%80%D1%82%D0%B0%20%D1%81%20%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20%D0%BE%D1%84%D0%B8%D1%81%D0%B0%20%D0%B2%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B5%22%3E%0A%3C%2Fiframe%3E"
              />
            ) : null}
          </Block>
          <Block
            className={_utils.cx(_styles, "contacts_item")}
            id={_utils.cx(
              _styles,
              "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a766-2ed3a748"
            )}
            tag="div"
          >
            <Paragraph className={_utils.cx(_styles, "text-size-large")}>
              {"Санкт-Петербург"}
            </Paragraph>
            <Block className={_utils.cx(_styles, "divider")} tag="div" />
            <Block className={_utils.cx(_styles, "contacts_info")} tag="div">
              <Block className={_utils.cx(_styles, "contacts_row")} tag="div">
                <Block
                  className={_utils.cx(_styles, "contacts_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a76c-2ed3a748"
                  )}
                  tag="div"
                >
                  <Paragraph
                    className={_utils.cx(_styles, "text-color-secondary")}
                    id={_utils.cx(
                      _styles,
                      "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a76d-2ed3a748"
                    )}
                  >
                    {"Адрес"}
                  </Paragraph>
                </Block>
                <Paragraph
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a76f-2ed3a748"
                  )}
                >
                  {"Проспект Народного Ополчения, 149"}
                </Paragraph>
              </Block>
              <Block className={_utils.cx(_styles, "contacts_row")} tag="div">
                <Block
                  className={_utils.cx(_styles, "contacts_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a772-2ed3a748"
                  )}
                  tag="div"
                >
                  <Paragraph
                    className={_utils.cx(_styles, "text-color-secondary")}
                    id={_utils.cx(
                      _styles,
                      "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a773-2ed3a748"
                    )}
                  >
                    {"Телефон"}
                  </Paragraph>
                </Block>
                <Link
                  block=""
                  button={false}
                  className={_utils.cx(_styles, "link-underline")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a775-2ed3a748"
                  )}
                  options={{
                    href: "tel:+79818385329",
                  }}
                >
                  {"+7 (981) 838-53-29"}
                </Link>
              </Block>
              <Block className={_utils.cx(_styles, "contacts_row")} tag="div">
                <Block
                  className={_utils.cx(_styles, "contacts_label")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a778-2ed3a748"
                  )}
                  tag="div"
                >
                  <Paragraph
                    className={_utils.cx(_styles, "text-color-secondary")}
                    id={_utils.cx(
                      _styles,
                      "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a779-2ed3a748"
                    )}
                  >
                    {"Режим работы"}
                  </Paragraph>
                </Block>
                <Paragraph
                  id={_utils.cx(
                    _styles,
                    "w-node-c179fce4-7f66-1fd2-5744-9d392ed3a77b-2ed3a748"
                  )}
                >
                  {"По предварительной записи ежедневно с 10:00 до 21:00"}
                </Paragraph>
              </Block>
            </Block>
            {visibilityMap ? (
              <HtmlEmbed
                className={_utils.cx(_styles, "contacts_map-embed")}
                content=""
                value="%3Ciframe%20src%3D%22https%3A%2F%2Fyandex.ru%2Fmap-widget%2Fv1%2F%3Fum%3Dconstructor%253A55fd4eefd7192283cbb36faa4bc27080857f7069a3263ccb8d16da6dc72ca4bc%26amp%3Bsource%3Dconstructor%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22border%3A0%3B%22%20title%3D%22%D0%9A%D0%B0%D1%80%D1%82%D0%B0%20%D1%81%20%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20%D0%BE%D1%84%D0%B8%D1%81%D0%B0%20%D0%B2%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D0%B5%22%3E%0A%3C%2Fiframe%3E"
              />
            ) : null}
          </Block>
        </Grid>
      </Block>
    </_Component>
  );
}
