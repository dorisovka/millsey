"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import DOM from "./_Builtin/DOM";
import FormBlockLabel from "./_Builtin/FormBlockLabel";
import FormButton from "./_Builtin/FormButton";
import FormErrorMessage from "./_Builtin/FormErrorMessage";
import FormForm from "./_Builtin/FormForm";
import FormInlineLabel from "./_Builtin/FormInlineLabel";
import FormRadioInput from "./_Builtin/FormRadioInput";
import FormRadioWrapper from "./_Builtin/FormRadioWrapper";
import FormSuccessMessage from "./_Builtin/FormSuccessMessage";
import FormTextInput from "./_Builtin/FormTextInput";
import FormWrapper from "./_Builtin/FormWrapper";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import NavbarBrand from "./_Builtin/NavbarBrand";
import NavbarMenu from "./_Builtin/NavbarMenu";
import NavbarWrapper from "./_Builtin/NavbarWrapper";
import NotSupported from "./_Builtin/NotSupported";
import Paragraph from "./_Builtin/Paragraph";
import SearchButton from "./_Builtin/SearchButton";
import SearchForm from "./_Builtin/SearchForm";
import SearchInput from "./_Builtin/SearchInput";
import Span from "./_Builtin/Span";
import TabsContent from "./_Builtin/TabsContent";
import TabsLink from "./_Builtin/TabsLink";
import TabsMenu from "./_Builtin/TabsMenu";
import TabsPane from "./_Builtin/TabsPane";
import TabsWrapper from "./_Builtin/TabsWrapper";
import * as _interactions from "./interactions";
import { WishlistMini } from "./WishlistMini";

const _interactionsData = JSON.parse(
  '{"events":{"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"81f89ed7-daa7-d273-f213-572c07891170","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"81f89ed7-daa7-d273-f213-572c07891170","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757784995460},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ddc0bc-2898-6816-a1b8-9fba9b60e4ae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ddc0bc-2898-6816-a1b8-9fba9b60e4ae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757798189004},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"689463613017e085454fd6ac|07ca2cac-147d-5689-3bfb-1fc7b7262785","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"689463613017e085454fd6ac|07ca2cac-147d-5689-3bfb-1fc7b7262785","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758142700098},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".tool_item.is-search","originalId":"5cc449ff-fda1-9cb4-b594-178a923ed52b","appliesTo":"CLASS"},"targets":[{"selector":".tool_item.is-search","originalId":"5cc449ff-fda1-9cb4-b594-178a923ed52b","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758503433476},"e-59":{"id":"e-59","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"689463613017e085454fd6ac|d8b6ba25-afe6-0435-1fae-85fd2310e0a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"689463613017e085454fd6ac|d8b6ba25-afe6-0435-1fae-85fd2310e0a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765842341132},"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"689463613017e085454fd6ac|336cb8c8-7615-0907-94c2-5ddd93ac8c7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"689463613017e085454fd6ac|336cb8c8-7615-0907-94c2-5ddd93ac8c7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765842453549},"e-63":{"id":"e-63","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"689463613017e085454fd6ac|1ea900b1-f04d-eb51-c95b-6c44344cf36a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"689463613017e085454fd6ac|1ea900b1-f04d-eb51-c95b-6c44344cf36a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1765842749021},"e-65":{"id":"e-65","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-66"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6893878d254e1daa66e3f93a|7c3daea1-c8f8-8215-b8d5-b31e649cecd5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6893878d254e1daa66e3f93a|7c3daea1-c8f8-8215-b8d5-b31e649cecd5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1772908555177},"e-69":{"id":"e-69","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"689463613017e085454fd6ac|21c51268-8eb8-0c5f-3462-51a98e6f29b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"689463613017e085454fd6ac|21c51268-8eb8-0c5f-3462-51a98e6f29b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1775663621481},"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6893878d254e1daa66e3f93a|e63ca84c-5935-5a51-9486-5f6628c1968c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6893878d254e1daa66e3f93a|e63ca84c-5935-5a51-9486-5f6628c1968c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1775663727984},"e-73":{"id":"e-73","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6893878d254e1daa66e3f93a|e63ca84c-5935-5a51-9486-5f6628c19691","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6893878d254e1daa66e3f93a|e63ca84c-5935-5a51-9486-5f6628c19691","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1775663727984},"e-75":{"id":"e-75","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-76"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"69ca440adc758bd4af191957|ecb522d7-d181-f458-f5b6-41d337ad1a0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1775738830384},"e-77":{"id":"e-77","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-78"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"69ca440adc758bd4af191957|ecb522d7-d181-f458-f5b6-41d337ad1a14","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1775738830384},"e-79":{"id":"e-79","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6893878d254e1daa66e3f93a|df6f661f-a528-0e7a-e2ad-f11b8085b9db","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1775738972855},"e-81":{"id":"e-81","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-82"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6893878d254e1daa66e3f93a|df6f661f-a528-0e7a-e2ad-f11b8085b9e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1775738972855},"e-83":{"id":"e-83","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"6893878d254e1daa66e3f93a|3d7a4b37-9abf-ef43-fa86-3577a34e790f"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1775739061176}},"actionLists":{"a-11":{"id":"a-11","title":"Close Search","actionItemGroups":[{"actionItems":[{"id":"a-11-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".nav-search","selectorGuids":["00873ab3-1718-5252-9df9-5fd934a6fd21"]},"value":0,"unit":""}},{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-search","selectorGuids":["00873ab3-1718-5252-9df9-5fd934a6fd21"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1757773755343},"a-10":{"id":"a-10","title":"Open Search","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-search","selectorGuids":["00873ab3-1718-5252-9df9-5fd934a6fd21"]},"value":"none"}},{"id":"a-10-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".nav-search","selectorGuids":["00873ab3-1718-5252-9df9-5fd934a6fd21"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-10-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".nav-search","selectorGuids":["00873ab3-1718-5252-9df9-5fd934a6fd21"]},"value":1,"unit":""}},{"id":"a-10-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".nav-search","selectorGuids":["00873ab3-1718-5252-9df9-5fd934a6fd21"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1757773755343},"a-25":{"id":"a-25","title":"Close Cheaper Popup","actionItemGroups":[{"actionItems":[{"id":"a-25-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"selector":".cart_popup-dialog.is-cheaper","selectorGuids":["a09e724f-eea3-8545-f230-89c0d48ab754","017de38d-35a7-a088-0549-7a49b7d51394"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-25-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".popup-cheaper_wrapper","selectorGuids":["3376841b-1f19-c2fb-eaa2-c72dc862f6db"]},"value":"none"}}]},{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"selector":".cart_popup-dialog.is-cheaper","selectorGuids":["a09e724f-eea3-8545-f230-89c0d48ab754","017de38d-35a7-a088-0549-7a49b7d51394"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".popup-cheaper_wrapper","selectorGuids":["3376841b-1f19-c2fb-eaa2-c72dc862f6db"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755206936343},"a-26":{"id":"a-26","title":"Open Cheaper Popup","actionItemGroups":[{"actionItems":[{"id":"a-26-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".popup-cheaper_wrapper","selectorGuids":["3376841b-1f19-c2fb-eaa2-c72dc862f6db"]},"value":"flex"}}]},{"actionItems":[{"id":"a-26-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"selector":".cart_popup-dialog.is-cheaper","selectorGuids":["a09e724f-eea3-8545-f230-89c0d48ab754","017de38d-35a7-a088-0549-7a49b7d51394"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1755206936343},"a-30":{"id":"a-30","title":"Close Gift Popup","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"selector":".cart_popup-dialog.is-cheaper","selectorGuids":["a09e724f-eea3-8545-f230-89c0d48ab754","017de38d-35a7-a088-0549-7a49b7d51394"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-30-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".popup-gift_wrapper","selectorGuids":["bb77749b-8ee9-f960-73db-67ec53e2f247"]},"value":"none"}}]},{"actionItems":[{"id":"a-30-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"selector":".cart_popup-dialog.is-cheaper","selectorGuids":["a09e724f-eea3-8545-f230-89c0d48ab754","017de38d-35a7-a088-0549-7a49b7d51394"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-30-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".popup-gift_wrapper","selectorGuids":["bb77749b-8ee9-f960-73db-67ec53e2f247"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755206936343},"a-29":{"id":"a-29","title":"Open Gift Popup","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".popup-gift_wrapper","selectorGuids":["bb77749b-8ee9-f960-73db-67ec53e2f247"]},"value":"flex"}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"selector":".cart_popup-dialog.is-cheaper","selectorGuids":["a09e724f-eea3-8545-f230-89c0d48ab754","017de38d-35a7-a088-0549-7a49b7d51394"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1755206936343}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({ as: _Component = NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "header_component")}
      config={{
        easing: "ease-out-cubic",
        easing2: "ease-out-cubic",
        duration: 400,
        docHeight: false,
        noScroll: false,
        animation: "default",
        collapse: "none",
      }}
      tag="div"
    >
      <Block className={_utils.cx(_styles, "header_container")} tag="div">
        <Block
          className={_utils.cx(_styles, "header_layout")}
          id={_utils.cx(
            _styles,
            "w-node-b4594c11-6be4-1b39-7a67-f8249ec38f96-a9812f43"
          )}
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, "header_nav")}
            id={_utils.cx(
              _styles,
              "w-node-_630ce1cd-f04f-7eb4-a1b2-f5583b598726-a9812f43"
            )}
            tag="div"
          >
            <NavbarMenu
              className={_utils.cx(_styles, "nav_menu")}
              id={_utils.cx(
                _styles,
                "w-node-fbaf3f29-6895-05fd-408f-a8b3300f7952-a9812f43"
              )}
              role="navigation"
              tag="nav"
            >
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "nav_burger")}
                data-dropdown-trigger="menu"
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "nav_burger-line", "is-top")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "nav_burger-line", "is-bottom")}
                  tag="div"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "nav_trigger")}
                data-dropdown-trigger="herman-miller"
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "nav_link-text",
                    "link-underline"
                  )}
                  tag="div"
                >
                  {"Herman Miller"}
                </Block>
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "nav_trigger")}
                data-dropdown-trigger="libernovo"
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "nav_link-text",
                    "link-underline"
                  )}
                  tag="div"
                >
                  {"Libernovo"}
                </Block>
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(
                  _styles,
                  "tool_item",
                  "is-search",
                  "is-mobile"
                )}
                options={{
                  href: "#",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-1x1-medium")}
                  content=""
                  value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M15.1316%2015.1316L20.5%2020.5M16.9211%2010.2105C16.9211%2013.9166%2013.9166%2016.9211%2010.2105%2016.9211C6.5044%2016.9211%203.5%2013.9166%203.5%2010.2105C3.5%206.5044%206.5044%203.5%2010.2105%203.5C13.9166%203.5%2016.9211%206.5044%2016.9211%2010.2105Z%22%20stroke-width%3D%221.2%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "nav_trigger")}
                data-dropdown-trigger="steelcase"
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "nav_link-text",
                    "link-underline"
                  )}
                  tag="div"
                >
                  {"Steelcase"}
                </Block>
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "nav_trigger")}
                data-dropdown-trigger="haworth"
                editable={true}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "nav_link-text",
                    "link-underline"
                  )}
                  tag="div"
                >
                  {"Haworth"}
                </Block>
              </Link>
            </NavbarMenu>
          </Block>
          <Block
            className={_utils.cx(_styles, "header_brand")}
            id={_utils.cx(
              _styles,
              "w-node-_5da6585d-a393-655a-76ba-e171eb13da25-a9812f43"
            )}
            tag="div"
          >
            <NavbarBrand
              className={_utils.cx(_styles, "brand_link")}
              id={_utils.cx(
                _styles,
                "w-node-_1c0bb8a9-e711-6d71-74ca-793e4210d4d0-a9812f43"
              )}
              options={{
                href: "#",
              }}
            >
              <HtmlEmbed
                className={_utils.cx(_styles, "brand_logo")}
                content=""
                value="%3Csvg%20viewBox%3D%220%200%20194%2022%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M22.2598%2021.3177H19.2638V5.16169L12.9078%2021.1777H10.4438L3.86384%205.16169V21.3177H0.839844V0.429688H4.87184L11.6478%2017.0337L18.2278%200.429688H22.2598V21.3177Z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M44.6806%2021.2044H41.6006V0.484375H44.6806V21.2044Z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M73.7341%2021.2044H63.2061V0.484375H66.2301V18.3204H73.7341V21.2044Z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M101.297%2021.2044H90.7686V0.484375H93.7926V18.3204H101.297V21.2044Z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M128.047%203.6465C127.114%203.17983%20125.863%202.9465%20124.295%202.9465C121.869%202.9465%20120.655%203.8425%20120.655%205.6345C120.655%206.49317%20121.411%207.3985%20122.923%208.3505C124.174%209.15317%20125.154%209.78783%20125.863%2010.2545C126.573%2010.7212%20127.002%2011.0292%20127.151%2011.1785C128.663%2012.5038%20129.419%2014.0345%20129.419%2015.7705C129.419%2017.7118%20128.673%2019.2332%20127.179%2020.3345C125.91%2021.2678%20124.389%2021.7345%20122.615%2021.7345C120.842%2021.7345%20119.218%2021.4078%20117.743%2020.7545L118.107%2017.6465C119.507%2018.4305%20121.047%2018.8225%20122.727%2018.8225C125.21%2018.8225%20126.451%2017.7305%20126.451%2015.5465C126.451%2014.6878%20125.695%2013.7545%20124.183%2012.7465C122.821%2011.8318%20121.785%2011.1318%20121.075%2010.6465C120.385%2010.1612%20120.011%209.89983%20119.955%209.8625C118.462%208.5745%20117.715%207.16517%20117.715%205.6345C117.715%203.8985%20118.387%202.50783%20119.731%201.4625C120.945%200.529166%20122.475%200.0625%20124.323%200.0625C125.854%200.0625%20127.263%200.305166%20128.551%200.790499L128.047%203.6465Z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M158.397%2021.3177H147.757V0.429688H158.089V3.28569H150.809V9.10969H157.697V11.9657H150.809V18.4337H158.397V21.3177Z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M193.507%200.429688L185.779%2012.4977V21.3177H182.727V12.4977L174.999%200.429688H178.639L184.239%209.61369L190.007%200.429688H193.507Z%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </NavbarBrand>
          </Block>
          <Block
            className={_utils.cx(_styles, "header_actions")}
            id={_utils.cx(
              _styles,
              "w-node-_1ce5a8d1-b7e6-d271-94a6-ac6b541c56ee-a9812f43"
            )}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "header_contacts")}
              id={_utils.cx(
                _styles,
                "w-node-e99fe8d1-c2bb-7888-8383-fd1683be8d59-a9812f43"
              )}
              tag="div"
            >
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "nav_phone-link")}
                options={{
                  href: "tel:+74951202219",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "text-color-secondary")}
                  tag="div"
                >
                  {"МСК:"}
                </Block>
                <Block
                  className={_utils.cx(
                    _styles,
                    "contact_number",
                    "link-underline"
                  )}
                  tag="div"
                >
                  {"+7 495 120 22 19"}
                </Block>
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "nav_phone-link")}
                options={{
                  href: "tel:+79818385329",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "text-color-secondary")}
                  tag="div"
                >
                  {"СПб:"}
                </Block>
                <Block
                  className={_utils.cx(
                    _styles,
                    "contact_number",
                    "link-underline"
                  )}
                  tag="div"
                >
                  {"+7 981 838 53 29"}
                </Block>
              </Link>
            </Block>
            <Block className={_utils.cx(_styles, "header_tools")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "tool_item", "is-phone")}
                options={{
                  href: "#",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-1x1-medium")}
                  content=""
                  value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.49991%203.5H4.49991C3.94763%203.5%203.49679%203.94821%203.53032%204.49947C3.78096%208.62055%205.57024%2012.5703%208.49991%2015.5C11.4296%2018.4297%2015.3793%2020.219%2019.5004%2020.4696C20.0517%2020.5031%2020.4999%2020.0523%2020.4999%2019.5V16.5C20.4999%2015.9477%2020.0512%2015.5055%2019.5012%2015.4545C18.4774%2015.3595%2017.5119%2015.1165%2016.5438%2014.7311C16.2051%2014.5963%2015.8187%2014.6359%2015.5271%2014.8546L13.9999%2016C11.6048%2014.6958%209.3038%2012.3945%207.99991%2010L9.14532%208.47279C9.36404%208.18116%209.4036%207.79482%209.26878%207.45613C8.88342%206.48802%208.64038%205.52245%208.54541%204.49867C8.4944%203.94874%208.05219%203.5%207.49991%203.5Z%22%20stroke-width%3D%221.2%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
              <Link
                aria-label="Открыть поиск"
                block="inline"
                button={false}
                className={_utils.cx(
                  _styles,
                  "tool_item",
                  "is-search",
                  "is-desktop"
                )}
                options={{
                  href: "#",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-1x1-medium")}
                  content=""
                  value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M15.1316%2015.1316L20.5%2020.5M16.9211%2010.2105C16.9211%2013.9166%2013.9166%2016.9211%2010.2105%2016.9211C6.5044%2016.9211%203.5%2013.9166%203.5%2010.2105C3.5%206.5044%206.5044%203.5%2010.2105%203.5C13.9166%203.5%2016.9211%206.5044%2016.9211%2010.2105Z%22%20stroke-width%3D%221.2%22%20vector-effect%3D%22non-scaling-stroke%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </Link>
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "tool_item")}
                options={{
                  href: "#",
                }}
              >
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-1x1-medium")}
                  content=""
                  value="%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M17.5%202.5H6.5V21.5C8.59224%2016.4786%2015.4077%2016.4786%2017.5%2021.5V2.5Z%22%20stroke-width%3D%221.2%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block
                  className={_utils.cx(_styles, "tool_badge", "is-wishlist")}
                  tag="div"
                >
                  {"0"}
                </Block>
              </Link>
              <NotSupported _atom="Cart" />
            </Block>
          </Block>
        </Block>
      </Block>
      <Block
        className={_utils.cx(_styles, "header_overlay")}
        data-dropdown-overlay=""
        tag="div"
      />
      <Block
        className={_utils.cx(_styles, "header_dropdown-wrap")}
        data-dropdown-wrap=""
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "header_dropdown")}
          data-dropdown-panel="menu"
          tag="div"
        >
          <Block className={_utils.cx(_styles, "dropdown_sidebar")} tag="div">
            <Block className={_utils.cx(_styles, "dropdown_header")} tag="div">
              <Block className={_utils.cx(_styles)} tag="div">
                {"Меню"}
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Каталог"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18e22b1e793ab14d58a8b_Herman%20miller.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Офисные кресла"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b0509bb8dd2c6f992ce8_embody%20x%20logitech.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Игровые кресла"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "#",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18f26f1ff79b2f819fd3c_%D0%9A%D0%BE%D0%BB%D0%B5%D1%81%D0%B8%D0%BA%D0%B8.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Аксессуары"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Покупателям"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Корпоративным клиентам"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Сервисный центр Herman Miller"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Гарантия и обслуживание"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Оплата и доставка"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Возврат"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
            <Block
              className={_utils.cx(_styles, "dropdown_group", "is-margin-auto")}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "tel:+74951202219",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"МСК: +7 495 120 22 19"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "tel:+79818385329",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"СПб: +7 981 838 53 29"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "https://t.me/millsey_msk",
                      target: "_blank",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Telegram"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "dropdown_sublink",
                      "is-small"
                    )}
                    options={{
                      href: "https://wa.me/79032555502",
                      target: "_blank",
                    }}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"WhatsApp"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, "header_dropdown")}
          data-dropdown-panel="catalog"
          tag="div"
        >
          <Block className={_utils.cx(_styles, "dropdown_sidebar")} tag="div">
            <Block className={_utils.cx(_styles, "dropdown_header")} tag="div">
              <Block className={_utils.cx(_styles)} tag="div">
                {"Каталог"}
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Офисные кресла"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/brands/office-herman-miller",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18e22b1e793ab14d58a8b_Herman%20miller.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Herman miller"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/brands/office-haworth",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18e2294581312e774e135_Haworth.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Haworth"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/brands/office-steelcase",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18e22c784cdde63c385d2_Steelcase.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Steelcase"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/brands/office-libernovo",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18e22147137d26f13d18e_Lebernovo.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Libernovo"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Игровые кресла"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/brands/gaming-herman-miller",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18f2868387a7957f5fd06_Herman%20miller.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Herman miller"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/brands/gaming-haworth",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18f2618b335fa65285789_Haworth.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Haworth"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "#",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Аксессуары"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/accessories-headrest-hm-aeron",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18f2756ff710db4e90be0_%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%B4%D0%BB%D1%8F%20Aeron.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Подголовники для Aeron"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/accessories-headrest-hm-embody",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18f27996c1f209bb559cc_%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%B4%D0%BB%D1%8F%20Embody.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Подголовники для Embody"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/accessories-casters-hm",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18f26f1ff79b2f819fd3c_%D0%9A%D0%BE%D0%BB%D0%B5%D1%81%D0%B8%D0%BA%D0%B8.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Колесики"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, "header_dropdown")}
          data-dropdown-panel="herman-miller"
          tag="div"
        >
          <Block className={_utils.cx(_styles, "dropdown_sidebar")} tag="div">
            <Block className={_utils.cx(_styles, "dropdown_header")} tag="div">
              <Block className={_utils.cx(_styles)} tag="div">
                {"Herman Miller"}
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "/brands/office-herman-miller",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Офисные кресла"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-hm-aeron",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18e22b1e793ab14d58a8b_Herman%20miller.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Aeron"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-hm-embody",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b01180cd7765f1504bb7_Embody.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Embody"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-hm-mirra-2",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b01fbf3432ddd2fe9c25_Mirra%202.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Mirra 2"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-hm-cosm",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1affd57fed37b21e09853_Cosm.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Cosm"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-hm-sayl",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b03675a4e80fb28b940a_Sayl.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Sayl"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-hm-verus",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b043ecf8ecc90f2468c6_verus.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"verus"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "/brands/gaming-herman-miller",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Игровые кресла"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/gaming-hm-aeron",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18f2868387a7957f5fd06_Herman%20miller.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Aeron"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/gaming-hm-embody-x-logitech",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b0509bb8dd2c6f992ce8_embody%20x%20logitech.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"embody x logitech"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/gaming-hm-vantum",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b05ddf561fd80f6e6412_Vantum.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Vantum"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, "header_dropdown")}
          data-dropdown-panel="haworth"
          tag="div"
        >
          <Block className={_utils.cx(_styles, "dropdown_sidebar")} tag="div">
            <Block className={_utils.cx(_styles, "dropdown_header")} tag="div">
              <Block className={_utils.cx(_styles)} tag="div">
                {"Haworth"}
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "/brands/office-haworth",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Офисные кресла"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-haworth-aloha",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/68e8d6ad780015bc9be3e7f0_Haworth%20Aloha.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"ALoha"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-haworth-fern",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/68e8d6af3433a63c2a6aa289_Haworth%20Fern.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Fern"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "/brands/gaming-haworth",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Игровые кресла"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/gaming-haworth-fern-x-halo",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/68e9996c39f145d5de91bec8_Haworth%20Fern%20x%20Halo.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Fern x Halo"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, "header_dropdown")}
          data-dropdown-panel="steelcase"
          tag="div"
        >
          <Block className={_utils.cx(_styles, "dropdown_sidebar")} tag="div">
            <Block className={_utils.cx(_styles, "dropdown_header")} tag="div">
              <Block className={_utils.cx(_styles)} tag="div">
                {"Steelcase"}
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "/brands/office-steelcase",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Офисные кресла"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-steelcase-gesture",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b58b3af98f090328ffd4_Gesture.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Gesture"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-steelcase-karman",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18e22c784cdde63c385d2_Steelcase.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"KArman"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-steelcase-leap",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b5a19e8c9c7d6f96e901_Leap.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Leap"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-steelcase-series-1",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b5aed5bc31f7c59d24ee_Series%201.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Series 1"}
                    </Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-steelcase-series-2",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c1b5b8abaaadf0e5d19926_Series%202.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Series 2"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, "header_dropdown")}
          data-dropdown-panel="libernovo"
          tag="div"
        >
          <Block className={_utils.cx(_styles, "dropdown_sidebar")} tag="div">
            <Block className={_utils.cx(_styles, "dropdown_header")} tag="div">
              <Block className={_utils.cx(_styles)} tag="div">
                {"Libernovo"}
              </Block>
            </Block>
            <Block className={_utils.cx(_styles, "dropdown_group")} tag="div">
              <Link
                block="inline"
                button={false}
                className={_utils.cx(_styles, "dropdown_group-toggle")}
                options={{
                  href: "/brands/office-libernovo",
                }}
              >
                <Block
                  className={_utils.cx(_styles, "toggle_fill")}
                  tag="div"
                />
                <Block
                  className={_utils.cx(_styles, "toggle_content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "dropdown_group-label")}
                    tag="div"
                  >
                    {"Офисные кресла"}
                  </Block>
                  <HtmlEmbed
                    className={_utils.cx(_styles, "dropdown_group-icon")}
                    content=""
                    value="%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20d%3D%22M7.79245%2012.2263L6.81132%2011.3206L11.717%206.47155V7.52815L6.81132%202.6791L7.77359%201.77344L13%206.99985L7.79245%2012.2263ZM1%207.71683V6.30174H11.8679V7.71683H1Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </Block>
              </Link>
              <Block
                className={_utils.cx(_styles, "dropdown_sublist")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "dropdown_subitem")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "dropdown_sublink")}
                    options={{
                      href: "/catalog-series/office-libernovo-omni-dynamic",
                    }}
                  >
                    <Image
                      alt=""
                      className={_utils.cx(_styles, "dropdown_sublink-media")}
                      height="auto"
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6893878d254e1daa66e3f933/69c18e22147137d26f13d18e_Lebernovo.avif"
                      width="auto"
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "dropdown_sublink-text",
                        "link-underline"
                      )}
                      tag="div"
                    >
                      {"Omni Dynamic"}
                    </Block>
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block
        aria-hidden="true"
        className={_utils.cx(_styles, "nav-search")}
        data-header-layer="search"
        id={_utils.cx(_styles, "search-dialog")}
        role="dialog"
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "nav-search_overlay")}
          data-w-id="64ddc0bc-2898-6816-a1b8-9fba9b60e4ae"
          tag="div"
        />
        <Block className={_utils.cx(_styles, "nav-search_header")} tag="div">
          <Block
            className={_utils.cx(
              _styles,
              "nav-search_side",
              "header-search_column-left"
            )}
            tag="div"
          >
            <Paragraph className={_utils.cx(_styles, "text-size-large")}>
              {"Вам могут понравиться"}
            </Paragraph>
          </Block>
          <Block
            className={_utils.cx(
              _styles,
              "nav-search_side",
              "is-right",
              "is-search"
            )}
            tag="div"
          >
            <SearchForm
              action="/search"
              className={_utils.cx(_styles, "nav_search")}
            >
              <SearchInput
                autoFocus={false}
                className={_utils.cx(_styles, "search-input")}
                disabled={false}
                id={_utils.cx(_styles, "search-2")}
                maxLength={256}
                name="query"
                placeholder="Поиск"
                required={true}
                type="search"
              />
              <Link
                aria-label="Закрыть поиск"
                block=""
                button={true}
                className={_utils.cx(_styles, "button", "is-small")}
                data-w-id="81f89ed7-daa7-d273-f213-572c07891170"
                options={{
                  href: "#",
                }}
              >
                {"Закрыть"}
              </Link>
            </SearchForm>
          </Block>
        </Block>
        <Block className={_utils.cx(_styles, "nav-search_body")} tag="div">
          <Block className={_utils.cx(_styles, "nav-search_inner")} tag="div">
            <Block className={_utils.cx(_styles, "nav-search_side")} tag="div">
              <NotSupported _atom="Collection List" />
            </Block>
            <Block
              className={_utils.cx(
                _styles,
                "nav-search_side",
                "is-right",
                "tablet-fullw"
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "nav-search_section")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "nav-search_section-content")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "nav-search_taps")}
                    tag="div"
                  >
                    <Link
                      block=""
                      button={true}
                      className={_utils.cx(_styles, "nav-search_tap")}
                      options={{
                        href: "/search?query=Embody",
                      }}
                    >
                      {"Embody"}
                    </Link>
                    <Link
                      block=""
                      button={true}
                      className={_utils.cx(_styles, "nav-search_tap")}
                      options={{
                        href: "/search?query=Aeron",
                      }}
                    >
                      {"Aeron"}
                    </Link>
                    <Link
                      block=""
                      button={true}
                      className={_utils.cx(_styles, "nav-search_tap")}
                      options={{
                        href: "/search?query=Gesture",
                      }}
                    >
                      {"Gesture"}
                    </Link>
                    <Link
                      block=""
                      button={true}
                      className={_utils.cx(_styles, "nav-search_tap")}
                      options={{
                        href: "/search?query=Mirra2",
                      }}
                    >
                      {"Mirra2"}
                    </Link>
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "nav-search_section")}
                tag="div"
              >
                <Paragraph
                  className={_utils.cx(_styles, "nav-search_section-title")}
                >
                  {"Часто ищут"}
                </Paragraph>
                <Block
                  className={_utils.cx(_styles, "nav-search_section-content")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "nav-search_result")}
                    options={{
                      href: "/search?query=Herman+Miller+Aeron+Graphite",
                    }}
                  >
                    <Block tag="div">{"Herman Miller Aeron Graphite"}</Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "nav-search_section-content")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "nav-search_result")}
                    options={{
                      href: "/search?query=Herman+Miller+Embody+x+Logitech",
                    }}
                  >
                    <Block tag="div">{"Herman Miller Embody x Logitech"}</Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "nav-search_section-content")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "nav-search_result")}
                    options={{
                      href: "/search?query=Steelcase+Gesture",
                    }}
                  >
                    <Block tag="div">{"Steelcase Gesture"}</Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "nav-search_section-content")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "nav-search_result")}
                    options={{
                      href: "/search?query=Steelcase",
                    }}
                  >
                    <Block tag="div">{"Steelcase"}</Block>
                  </Link>
                </Block>
                <Block
                  className={_utils.cx(_styles, "nav-search_section-content")}
                  tag="div"
                >
                  <Link
                    block="inline"
                    button={false}
                    className={_utils.cx(_styles, "nav-search_result")}
                    options={{
                      href: "/search?query=Haworth+Fern",
                    }}
                  >
                    <Block tag="div">{"Haworth Fern"}</Block>
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
      <HtmlEmbed
        className={_utils.cx(_styles, "u-embed-css")}
        content=""
        value="%3Cstyle%3E%0A%20%20%2F*%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%20%20%20%20%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%0A%20%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20*%2F%0A%20%20%3Aroot%20%7B%0A%20%20%20%20--ease-primary%3A%20cubic-bezier(0.65%2C%200.05%2C%200%2C%201)%3B%0A%20%20%20%20--duration-primary%3A%200.6s%3B%0A%20%20%20%20--duration-fade%3A%200.3s%3B%0A%20%20%7D%0A%0A%20%20%2F*%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%20%20%20%20Inputs%0A%20%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20*%2F%0A%20%20%2F*%20%D0%A3%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%20%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B8%20%D1%83%20number%20*%2F%0A%20%20input%5Btype%3D'number'%5D%3A%3A-webkit-outer-spin-button%2C%0A%20%20input%5Btype%3D'number'%5D%3A%3A-webkit-inner-spin-button%20%7B%0A%20%20%20%20-webkit-appearance%3A%20none%3B%0A%20%20%20%20margin%3A%200%3B%0A%20%20%7D%0A%0A%20%20input%5Btype%3D'number'%5D%20%7B%0A%20%20%20%20-moz-appearance%3A%20textfield%3B%0A%20%20%7D%0A%0A%20%20%2F*%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%20%20%20%20Dropdown%20%2F%20Overlay%0A%20%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20*%2F%0A%20%20.dropdown_sidebar%20%7B%0A%20%20%20%20overflow-y%3A%20auto%3B%0A%20%20%20%20overflow-x%3A%20hidden%3B%0A%20%20%20%20-webkit-overflow-scrolling%3A%20touch%3B%0A%20%20%7D%0A%0A%20%20.header_overlay%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%20%20transition%3A%20opacity%20var(--duration-fade)%20ease%3B%0A%20%20%7D%0A%0A%20%20.header_overlay.is-active%20%7B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20.header_dropdown%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20visibility%3A%20hidden%3B%0A%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%20%20transform%3A%20translateX(-100%25)%3B%0A%20%20%20%20transition%3A%0A%20%20%20%20%20%20transform%20var(--duration-primary)%20var(--ease-primary)%2C%0A%20%20%20%20%20%20opacity%20var(--duration-fade)%20ease%2C%0A%20%20%20%20%20%20visibility%200s%20linear%20var(--duration-primary)%3B%0A%20%20%7D%0A%0A%20%20.header_dropdown.is-active%20%7B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20visibility%3A%20visible%3B%0A%20%20%20%20pointer-events%3A%20auto%3B%0A%20%20%20%20transform%3A%20translateX(0)%3B%0A%20%20%20%20transition%3A%0A%20%20%20%20%20%20transform%20var(--duration-primary)%20var(--ease-primary)%2C%0A%20%20%20%20%20%20opacity%20var(--duration-fade)%20ease%2C%0A%20%20%20%20%20%20visibility%200s%20linear%200s%3B%0A%20%20%7D%0A%0A%20%20.header_dropdown-wrap%20%7B%0A%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%7D%0A%0A%20%20.header_dropdown-wrap.is-switching%20.header_dropdown%2C%0A%20%20.header_dropdown-wrap.is-switching%20.header_dropdown.is-active%20%7B%0A%20%20%20%20transition%3A%20none%20!important%3B%0A%20%20%7D%0A%0A%20%20html.is-dropdown-open%2C%0A%20%20body.is-dropdown-open%20%7B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%7D%0A%0A%20%20%2F*%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%20%20%20%20%20%D0%91%D1%83%D1%80%D0%B3%D0%B5%D1%80%0A%20%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20*%2F%0A%0A%20%20.nav_burger.is-active%20.nav_burger-line.is-top%20%7B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20transform%3A%20translateX(-50%25)%20translateY(-50%25)%20rotate(45deg)%3B%0A%20%20%7D%0A%0A%20%20.nav_burger.is-active%20.nav_burger-line.is-bottom%20%7B%0A%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20bottom%3A%20auto%3B%0A%20%20%20%20transform%3A%20translateX(-50%25)%20translateY(-50%25)%20rotate(-45deg)%3B%0A%20%20%7D%0A%0A%20%20%2F*%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%20%20%20%20%20Desktop%20hover%20(%3E%3D%20480px)%0A%20%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%20*%2F%0A%20%20%40media%20(min-width%3A%20480px)%20%7B%0A%20%20%20%20%2F*%20%D0%9F%D0%BE%D0%B4%D1%87%D0%B5%D1%80%D0%BA%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20*%2F%0A%20%20%20%20.link-underline%20%7B%0A%20%20%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20%20%20display%3A%20inline-block%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.nav_trigger.is-active%20%7B%0A%20%20%20%20%20%20color%3A%20var(--_theme---text--secondary)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.dropdown_group-toggle%3Ahover%20.toggle_fill%20%7B%0A%20%20%20%20%20%20transform%3A%20scaleY(1)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.dropdown_group-toggle%3Ahover%20.toggle_content%20%7B%0A%20%20%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.tool_item%20%7B%0A%20%20%20%20%20%20transition%3A%20color%20var(--duration-fade)%20var(--ease-primary)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.tool_item%3Ahover%20%7B%0A%20%20%20%20%20%20color%3A%20var(--_theme---text--secondary)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
      <HtmlEmbed
        className={_utils.cx(_styles, "u-embed-js")}
        content=""
        value="%3Cscript%3E%0A%20%20document.addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20const%20btn%20%3D%20e.target.closest('.cart_quantity-button')%3B%0A%20%20%20%20if%20(!btn)%20return%3B%0A%0A%20%20%20%20const%20input%20%3D%20btn.closest('.cart_quantity')%3F.querySelector('.cart_quantity-value')%3B%0A%20%20%20%20if%20(!input)%20return%3B%0A%0A%20%20%20%20const%20step%20%3D%20parseInt(input.step%20%7C%7C%201%2C%2010)%3B%0A%20%20%20%20const%20min%20%3D%20input.min%20%3F%20parseInt(input.min%2C%2010)%20%3A%201%3B%0A%20%20%20%20const%20max%20%3D%20input.max%20%3F%20parseInt(input.max%2C%2010)%20%3A%20999999%3B%0A%0A%20%20%20%20let%20v%20%3D%20parseInt(input.value%20%7C%7C%20min%2C%2010)%3B%0A%0A%20%20%20%20if%20(btn.classList.contains('is-plus'))%20%7B%0A%20%20%20%20%20%20v%20%2B%3D%20step%3B%0A%20%20%20%20%7D%20else%20if%20(btn.classList.contains('is-minus'))%20%7B%0A%20%20%20%20%20%20v%20-%3D%20step%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20v%20%3D%20Math.max(min%2C%20Math.min(max%2C%20v))%3B%0A%0A%20%20%20%20input.value%20%3D%20v%3B%0A%0A%20%20%20%20%2F%2F%20%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE%20%D0%B4%D0%BB%D1%8F%20Webflow%0A%20%20%20%20input.dispatchEvent(new%20Event('input'%2C%20%7B%20bubbles%3A%20true%20%7D))%3B%0A%20%20%20%20input.dispatchEvent(new%20Event('change'%2C%20%7B%20bubbles%3A%20true%20%7D))%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Cscript%3E%0A%20%20document.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20triggers%20%3D%20%5B...document.querySelectorAll('%5Bdata-dropdown-trigger%5D')%5D%3B%0A%20%20%20%20const%20panels%20%3D%20%5B...document.querySelectorAll('%5Bdata-dropdown-panel%5D')%5D%3B%0A%20%20%20%20const%20overlay%20%3D%20document.querySelector('%5Bdata-dropdown-overlay%5D')%3B%0A%20%20%20%20const%20wrap%20%3D%20document.querySelector('%5Bdata-dropdown-wrap%5D')%3B%0A%0A%20%20%20%20if%20(!triggers.length%20%7C%7C%20!panels.length%20%7C%7C%20!overlay%20%7C%7C%20!wrap)%20return%3B%0A%0A%20%20%20%20const%20triggerMap%20%3D%20new%20Map(triggers.map((trigger)%20%3D%3E%20%5Btrigger.dataset.dropdownTrigger%2C%20trigger%5D))%3B%0A%0A%20%20%20%20const%20panelMap%20%3D%20new%20Map(panels.map((panel)%20%3D%3E%20%5Bpanel.dataset.dropdownPanel%2C%20panel%5D))%3B%0A%0A%20%20%20%20let%20activeName%20%3D%20null%3B%0A%0A%20%20%20%20const%20setOpenState%20%3D%20(isOpen)%20%3D%3E%20%7B%0A%20%20%20%20%20%20overlay.classList.toggle('is-active'%2C%20isOpen)%3B%0A%20%20%20%20%20%20wrap.classList.toggle('is-active'%2C%20isOpen)%3B%0A%20%20%20%20%20%20document.documentElement.classList.toggle('is-dropdown-open'%2C%20isOpen)%3B%0A%20%20%20%20%20%20document.body.classList.toggle('is-dropdown-open'%2C%20isOpen)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20setActive%20%3D%20(name)%20%3D%3E%20%7B%0A%20%20%20%20%20%20activeName%20%3D%20name%3B%0A%0A%20%20%20%20%20%20triggers.forEach((trigger)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20isActive%20%3D%20trigger.dataset.dropdownTrigger%20%3D%3D%3D%20name%3B%0A%20%20%20%20%20%20%20%20trigger.classList.toggle('is-active'%2C%20isActive)%3B%0A%20%20%20%20%20%20%20%20trigger.setAttribute('aria-expanded'%2C%20String(isActive))%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20panels.forEach((panel)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20panel.classList.toggle('is-active'%2C%20panel.dataset.dropdownPanel%20%3D%3D%3D%20name)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20closeAll%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20activeName%20%3D%20null%3B%0A%20%20%20%20%20%20wrap.classList.remove('is-switching')%3B%0A%20%20%20%20%20%20setOpenState(false)%3B%0A%0A%20%20%20%20%20%20triggers.forEach((trigger)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20trigger.classList.remove('is-active')%3B%0A%20%20%20%20%20%20%20%20trigger.setAttribute('aria-expanded'%2C%20'false')%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20panels.forEach((panel)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20panel.classList.remove('is-active')%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20open%20%3D%20(name)%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(!triggerMap.has(name)%20%7C%7C%20!panelMap.has(name))%20return%3B%0A%20%20%20%20%20%20setActive(name)%3B%0A%20%20%20%20%20%20setOpenState(true)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20switchTo%20%3D%20(name)%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(!triggerMap.has(name)%20%7C%7C%20!panelMap.has(name))%20return%3B%0A%20%20%20%20%20%20wrap.classList.add('is-switching')%3B%0A%20%20%20%20%20%20setActive(name)%3B%0A%20%20%20%20%20%20requestAnimationFrame(()%20%3D%3E%20wrap.classList.remove('is-switching'))%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20triggers.forEach((trigger)%20%3D%3E%20%7B%0A%20%20%20%20%20%20trigger.setAttribute('aria-expanded'%2C%20'false')%3B%0A%0A%20%20%20%20%20%20trigger.addEventListener('click'%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20event.preventDefault()%3B%0A%0A%20%20%20%20%20%20%20%20const%20%7B%20dropdownTrigger%3A%20name%20%7D%20%3D%20trigger.dataset%3B%0A%20%20%20%20%20%20%20%20if%20(!name)%20return%3B%0A%0A%20%20%20%20%20%20%20%20if%20(activeName%20%3D%3D%3D%20name)%20return%20closeAll()%3B%0A%20%20%20%20%20%20%20%20if%20(activeName)%20return%20switchTo(name)%3B%0A%0A%20%20%20%20%20%20%20%20open(name)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20overlay.addEventListener('click'%2C%20closeAll)%3B%0A%0A%20%20%20%20document.addEventListener('keydown'%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(event.key%20%3D%3D%3D%20'Escape'%20%26%26%20activeName)%20closeAll()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
