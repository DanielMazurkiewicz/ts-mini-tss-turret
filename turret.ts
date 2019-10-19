import { tss, tssFrames, tssFont, join, query } from "ts-mini/tss";
const tssMedia__1 = `(min-width:1920px)`;
const tssMedia__2 = `(min-width:1680px) and (max-width:1919px)`;
const tssMedia__3 = `(min-width:1280px) and (max-width:1679px)`;
const tssMedia__4 = `(min-width:960px) and (max-width:1279px)`;
const tssMedia__5 = `(min-width:640px) and (max-width:959px)`;
const tssMedia__6 = `(min-width:320px) and (max-width:639px)`;
const tssMedia__7 = `(max-width:320px)`;
const tssMedia__8 = `print`;
const tssMedia__9 = `screen`;
const tssMedia__10 = `(min-width:320px)`;
const tssMedia__11 = `(max-width:639px)`;
const tssMedia__12 = `(min-width:640px)`;
const tssMedia__13 = `(max-width:959px)`;
const tssMedia__14 = `(min-width:960px)`;
const tssMedia__15 = `(max-width:1279px)`;
const tssMedia__16 = `(min-width:1280px)`;
const tssMedia__17 = `(max-width:1679px)`;

tssFrames(`spin`, {
  SELECTOR:          `0%`,
  _webkit_transform: `rotate(0deg)`,
  transform:         `rotate(0deg)`,
}, {
  SELECTOR:          `to`,
  _webkit_transform: `rotate(1turn)`,
  transform:         `rotate(1turn)`,
}, {
  SELECTOR:          `0%`,
  _webkit_transform: `rotate(0deg)`,
  transform:         `rotate(0deg)`,
}, {
  SELECTOR:          `to`,
  _webkit_transform: `rotate(1turn)`,
  transform:         `rotate(1turn)`,
});

const tssCommon__0 = {
  margin_top: `0`,
}
const tssCommon__1 = {
  margin_bottom: `0`,
}
const tssCommon__2 = {
  page_break_inside: `avoid`,
}
const tssCommon__3 = {
  color:          `inherit`,
  font_family:    `inherit`,
  font_style:     `normal`,
  font_weight:    `600`,
  letter_spacing: `0`,
  line_height:    `1.375`,
  margin:         `1em 0 .5em`,
  text_transform: `none`,
}
const tssCommon__4 = {
  color:       `inherit`,
  font_family: `inherit`,
  font_size:   `.6em`,
  font_style:  `inherit`,
  font_weight: `inherit`,
}
const tssCommon__5 = {
  font_size: `2rem`,
}
const tssCommon__6 = {
  margin_top: `0`,
}
const tssCommon__7 = {
  font_size: `1.5rem`,
}
const tssCommon__8 = {
  margin_top: `0`,
}
const tssCommon__9 = {
  font_size: `1.25rem`,
}
const tssCommon__10 = {
  margin_top: `0`,
}
const tssCommon__11 = {
  font_size: `1.125rem`,
}
const tssCommon__12 = {
  margin_top: `0`,
}
const tssCommon__13 = {
  font_size: `1rem`,
}
const tssCommon__14 = {
  margin_top: `0`,
}
const tssCommon__15 = {
  font_size: `.875rem`,
}
const tssCommon__16 = {
  font_size: `1rem`,
}
const tssCommon__17 = {
  color:       `inherit`,
  font_family: `inherit`,
  font_style:  `normal`,
  font_weight: `inherit`,
}
const tssCommon__18 = {
  _webkit_transition: `all .2s ease-in-out`,
  display:            `block`,
  transition:         `all .2s ease-in-out`,
}
const tssCommon__19 = {
  _webkit_transition: `all .2s ease-in-out`,
  background:         `#fff`,
  border:             `1px solid #d5d7dd`,
  border_radius:      `.25em`,
  cursor:             `pointer`,
  display:            `inline-block`,
  font_family:        `inherit`,
  font_size:          `1rem`,
  font_weight:        `600`,
  height:             `2.5rem`,
  letter_spacing:     `0`,
  line_height:        `1`,
  min_width:          `2.5rem`,
  padding:            `calc(.75rem - 1px) 1em`,
  text_align:         `center`,
  text_transform:     `none`,
  transition:         `all .2s ease-in-out`,
  white_space:        `nowrap`,
}
const tssCommon__20 = {
  _webkit_box_shadow: `none`,
  box_shadow:         `none`,
  color:              `#2e3138`,
  text_decoration:    `none`,
}
const tssCommon__21 = {
  background:   `#f9f9f9`,
  border_color: `#d0d2d7`,
}
const tssCommon__22 = {
  _webkit_box_shadow: `none`,
  background:         `#f2f2f2`,
  border_color:       `#cacdd2`,
  box_shadow:         `none`,
  color:              `#2e3138`,
}
const tssCommon__23 = {
  color: `transparent!important`,
}
const tssCommon__24 = {
  height:      `1em`,
  margin_left: `-.5em`,
  margin_top:  `-.5em`,
  width:       `1em`,
}
const tssCommon__25 = {
  fill:   `currentColor`,
  height: `1rem`,
  width:  `1rem`,
}
const tssCommon__26 = {
  background:   `#c00`,
  border_color: `#c00`,
  color:        `#fff`,
}
const tssCommon__27 = {
  background: `transparent`,
  color:      `#c00`,
}
const tssCommon__28 = {
  background:   `#d41717`,
  border_color: `#d41717`,
  color:        `#fff`,
}
const tssCommon__29 = {
  background:   `#ad0000`,
  border_color: `#ad0000`,
  color:        `#fff`,
}
const tssCommon__30 = {
  color: `#c00`,
}
const tssCommon__31 = {
  color: `#d41717`,
}
const tssCommon__32 = {
  color: `#ad0000`,
}
const tssCommon__33 = {
  background:   `#f50`,
  border_color: `#f50`,
  color:        `#fff`,
}
const tssCommon__34 = {
  background: `transparent`,
  color:      `#f50`,
}
const tssCommon__35 = {
  background:   `#ff661a`,
  border_color: `#ff661a`,
  color:        `#fff`,
}
const tssCommon__36 = {
  background:   `#d94800`,
  border_color: `#d94800`,
  color:        `#fff`,
}
const tssCommon__37 = {
  color: `#f50`,
}
const tssCommon__38 = {
  color: `#ff661a`,
}
const tssCommon__39 = {
  color: `#d94800`,
}
const tssCommon__40 = {
  background:   `#00b300`,
  border_color: `#00b300`,
  color:        `#fff`,
}
const tssCommon__41 = {
  background: `transparent`,
  color:      `#00b300`,
}
const tssCommon__42 = {
  background:   `#17bd17`,
  border_color: `#17bd17`,
  color:        `#fff`,
}
const tssCommon__43 = {
  background:   `#009800`,
  border_color: `#009800`,
  color:        `#fff`,
}
const tssCommon__44 = {
  color: `#00b300`,
}
const tssCommon__45 = {
  color: `#17bd17`,
}
const tssCommon__46 = {
  color: `#009800`,
}
const tssCommon__47 = {
  background:   `#08c`,
  border_color: `#08c`,
  color:        `#fff`,
}
const tssCommon__48 = {
  background: `transparent`,
  color:      `#08c`,
}
const tssCommon__49 = {
  background:   `#1795d4`,
  border_color: `#1795d4`,
  color:        `#fff`,
}
const tssCommon__50 = {
  background:   `#0074ad`,
  border_color: `#0074ad`,
  color:        `#fff`,
}
const tssCommon__51 = {
  color: `#08c`,
}
const tssCommon__52 = {
  color: `#1795d4`,
}
const tssCommon__53 = {
  color: `#0074ad`,
}
const tssCommon__54 = {
  padding: `0`,
}
const tssCommon__55 = {
  background_color: `transparent`,
  border_color:     `transparent`,
}
const tssCommon__56 = {
  opacity:        `.65`,
  pointer_events: `none`,
}
const tssCommon__57 = {
  list_style: `none`,
  margin:     `0`,
}
const tssCommon__58 = {
  margin:  `1rem 0`,
  padding: `0`,
}
const tssCommon__59 = {
  background_color: `#fff`,
}
const tssCommon__60 = {
  border_radius: `0`,
}
const tssCommon__61 = {
  border_top_left_radius: `.25em`,
}
const tssCommon__62 = {
  _ms_flex_pack:    `justify`,
  _webkit_box_pack: `justify`,
  display:          [`-webkit-box`,`-ms-flexbox`,`flex`],
  justify_content:  `space-between`,
}
const tssCommon__63 = {
  _webkit_box_direction: `normal`,
}
const tssCommon__64 = {
  font_family: `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
}
const tssCommon__65 = {
  margin_top: `0!important`,
}
const tssCommon__66 = {
  _ms_flex_order:           `1`,
  _webkit_box_ordinal_group: `2`,
  order:                    `1`,
}
const tssCommon__67 = {
  _ms_flex_order:           `2`,
  _webkit_box_ordinal_group: `3`,
  order:                    `2`,
}
const tssCommon__68 = {
  _ms_flex_order:           `3`,
  _webkit_box_ordinal_group: `4`,
  order:                    `3`,
}
const tssCommon__69 = {
  padding_top: `0!important`,
}
const tssCommon__70 = {
  position: `fixed`,
}
const tssCommon__71 = {
  position: `relative`,
}
const tssCommon__72 = {
  position: `absolute`,
}
const tssCommon__73 = {
  position: `sitcky`,
}
const tssCommon__74 = {
  position: `static`,
}
const tssCommon__75 = {
  position: `absolute`,
}

tss({
  SELECTOR:                 `=html`,
  _webkit_text_size_adjust: `100%`,
  line_height:              `1.15`,
}, {
  SELECTOR: `=body`,
  margin:   `0`,
}, {
  SELECTOR:  `=h1`,
  font_size: `2em`,
  margin:    `.67em 0`,
}, {
  SELECTOR:           `=hr`,
  _webkit_box_sizing: `content-box`,
  box_sizing:         `content-box`,
  height:             `0`,
  overflow:           `visible`,
}, {
  SELECTOR:    `=pre`,
  font_family: `monospace,monospace`,
  font_size:   `1em`,
}, {
  SELECTOR:         `=a`,
  background_color: `transparent`,
}, {
  SELECTOR:                `=abbr[title]`,
  _webkit_text_decoration: `underline dotted`,
  border_bottom:           `none`,
  text_decoration:         [`underline`,`underline dotted`],
}, {
  SELECTOR:    `=b,strong`,
  font_weight: `bolder`,
}, {
  SELECTOR:    `=code,kbd,samp`,
  font_family: `monospace,monospace`,
  font_size:   `1em`,
}, {
  SELECTOR:  `=small`,
  font_size: `80%`,
}, {
  SELECTOR:       `=sub,sup`,
  font_size:      `75%`,
  line_height:    `0`,
  position:       `relative`,
  vertical_align: `baseline`,
}, {
  SELECTOR: `=sub`,
  bottom:   `-.25em`,
}, {
  SELECTOR: `=sup`,
  top:      `-.5em`,
}, {
  SELECTOR:     `=img`,
  border_style: `none`,
}, {
  SELECTOR:    `=button,input,optgroup,select,textarea`,
  font_family: `inherit`,
  font_size:   `100%`,
  line_height: `1.15`,
  margin:      `0`,
}, {
  SELECTOR: `=button,input`,
  overflow: `visible`,
}, {
  SELECTOR:       `=button,select`,
  text_transform: `none`,
}, {
  SELECTOR:           `=[type=button],[type=reset],[type=submit],button`,
  _webkit_appearance: `button`,
}, {
  SELECTOR:     `=[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner`,
  border_style: `none`,
  padding:      `0`,
}, {
  SELECTOR: `=[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring`,
  outline:  `1px dotted ButtonText`,
}, {
  SELECTOR: `=fieldset`,
  padding:  `.35em .75em .625em`,
}, {
  SELECTOR:           `=legend`,
  _webkit_box_sizing: `border-box`,
  box_sizing:         `border-box`,
  display:            `table`,
  max_width:          `100%`,
  white_space:        `normal`,
}, {
  SELECTOR:       `=progress`,
  vertical_align: `baseline`,
}, {
  SELECTOR: `=textarea`,
  overflow: `auto`,
}, {
  SELECTOR:           `=[type=checkbox],[type=radio]`,
  _webkit_box_sizing: `border-box`,
  box_sizing:         `border-box`,
  padding:            `0`,
}, {
  SELECTOR: `=[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button`,
  height:   `auto`,
}, {
  SELECTOR:           `=[type=search]`,
  _webkit_appearance: `textfield`,
  outline_offset:     `-2px`,
}, {
  SELECTOR:           `=[type=search]::-webkit-search-decoration`,
  _webkit_appearance: `none`,
}, {
  SELECTOR:           `=::-webkit-file-upload-button`,
  _webkit_appearance: `button`,
  font:               `inherit`,
}, {
  SELECTOR: `=details`,
  display:  `block`,
}, {
  SELECTOR: `=summary`,
  display:  `list-item`,
}, {
  SELECTOR: `=[hidden],template`,
  display:  `none`,
}, {
  SELECTOR:                 `=html`,
  _moz_osx_font_smoothing:  `grayscale`,
  _webkit_box_sizing:       `border-box`,
  _webkit_font_smoothing:   `antialiased`,
  _webkit_tap_highlight_color: `rgba(0,0,0,0)`,
  box_sizing:               `border-box`,
  text_rendering:           `optimizeLegibility`,
}, {
  SELECTOR:           `=*,:after,:before`,
  _webkit_box_sizing: `inherit`,
  box_sizing:         `inherit`,
}, {
  SELECTOR:       `=:focus`,
  outline:        `.125rem solid #08c`,
  outline_offset: `.125rem`,
}, {
  SELECTOR:   `=body,html`,
  min_height: `100%`,
  width:      `100%`,
}, {
  SELECTOR:  `=img`,
  height:    `auto`,
  max_width: `100%`,
}, join({  SELECTOR: `=blockquote:first-child,caption:first-child,cite:first-child,dd:first-child,dl:first-child,dt:first-child,fieldset:first-child,figcaption:first-child,h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h6:first-child,hr:first-child,input:first-child,label:first-child,legend:first-child,ol:first-child,ol li:first-child,p:first-child,progress:first-child,table:first-child,textarea:first-child,ul:first-child,ul li:first-child`,}, tssCommon__0), join({  SELECTOR: `=blockquote:last-child,caption:last-child,cite:last-child,dd:last-child,dl:last-child,dt:last-child,fieldset:last-child,figcaption:last-child,h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,h6:last-child,hr:last-child,input:last-child,label:last-child,legend:last-child,ol:last-child,ol li:last-child,p:last-child,progress:last-child,table:last-child,textarea:last-child,ul:last-child,ul li:last-child`,}, tssCommon__1), {
  SELECTOR:  `=:root`,
  font_size: `16px`,
}, {
  SELECTOR:       `=body`,
  background:     `#fff`,
  color:          `#2e3138`,
  font_family:    `-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  font_weight:    `400`,
  letter_spacing: `0`,
  line_height:    `1.375`,
}, {
  MEDIA:              tssMedia__8,
  SELECTOR:           `=*,:after,:before`,
  _webkit_box_shadow: `none!important`,
  background:         `transparent!important`,
  box_shadow:         `none!important`,
  color:              `#000!important`,
  text_shadow:        `none!important`,
}, {
  MEDIA:           tssMedia__8,
  SELECTOR:        `=a`,
  text_decoration: `underline!important`,
}, {
  MEDIA:       tssMedia__8,
  SELECTOR:    `=a[href]:after`,
  content:     `attr(href)`,
  margin_left: `.2em`,
}, {
  MEDIA:    tssMedia__8,
  SELECTOR: `=a[href^="#"]:after`,
  content:  `""`,
}, {
  MEDIA:       tssMedia__8,
  SELECTOR:    `=abbr[title]:after`,
  content:     `attr(title)`,
  margin_left: `.2em`,
}, {
  MEDIA:    tssMedia__8,
  SELECTOR: `=pre`,
  border:   `1px solid #5c6370!important`,
}, join({  MEDIA: tssMedia__8,  SELECTOR: `=blockquote,input,pre,textarea`,}, tssCommon__2), {
  MEDIA:    tssMedia__8,
  SELECTOR: `=thead`,
  display:  `table-header-group`,
}, {
  MEDIA:             tssMedia__8,
  SELECTOR:          `=img,tr`,
  page_break_inside: `avoid`,
}, {
  MEDIA:     tssMedia__8,
  SELECTOR:  `=img`,
  max_width: `100%!important`,
}, {
  MEDIA:    tssMedia__8,
  SELECTOR: `=h2,h3,p`,
  orphans:  `3`,
  widows:   `3`,
}, {
  MEDIA:            tssMedia__8,
  SELECTOR:         `=h2,h3`,
  page_break_after: `avoid`,
}, {
  MEDIA:           tssMedia__8,
  SELECTOR:        `=table`,
  border_collapse: `collapse!important`,
}, {
  MEDIA:            tssMedia__8,
  SELECTOR:         `=table td,table th`,
  background_color: `#fff!important`,
}, join({  SELECTOR: `=h1,h2,h3,h4,h5,h6`,}, tssCommon__3), join({  SELECTOR: `=h1 small,h2 small,h3 small,h4 small,h5 small,h6 small`,}, tssCommon__4), join({  SELECTOR: `=h1`,}, tssCommon__5), join({  SELECTOR: `=h1+h2`,}, tssCommon__6), join({  SELECTOR: `=h2`,}, tssCommon__7), join({  SELECTOR: `=h2+h3`,}, tssCommon__8), join({  SELECTOR: `=h3`,}, tssCommon__9), join({  SELECTOR: `=h3+h4`,}, tssCommon__10), join({  SELECTOR: `=h4`,}, tssCommon__11), join({  SELECTOR: `=h4+h5`,}, tssCommon__12), join({  SELECTOR: `=h5`,}, tssCommon__13), join({  SELECTOR: `=h5+h6`,}, tssCommon__14), join({  SELECTOR: `=h6`,}, tssCommon__15), join({  SELECTOR: `=p`,}, tssCommon__16), {
  SELECTOR:       `=p`,
  color:          `inherit`,
  font_family:    `inherit`,
  font_style:     `normal`,
  font_weight:    `inherit`,
  letter_spacing: `0`,
  line_height:    `1.5`,
  margin:         `1em 0`,
  text_transform: `none`,
}, {
  SELECTOR:           `=a`,
  _webkit_transition: `color .2s ease-in-out,background .2s ease-in-out,border .2s ease-in-out`,
  transition:         `color .2s ease-in-out,background .2s ease-in-out,border .2s ease-in-out`,
}, {
  SELECTOR:                 `=a,a:focus,a:hover`,
  _webkit_text_decoration_skip: [`objects`,`ink`],
  color:                    `currentColor`,
  text_decoration:          `underline`,
  text_decoration_skip:     `objects`,
  text_decoration_skip_ink: `auto`,
}, {
  SELECTOR:    `=strong`,
  font_style:  `inherit`,
  font_weight: `600`,
}, {
  SELECTOR:    `=em,strong`,
  color:       `inherit`,
  font_family: `inherit`,
}, {
  SELECTOR:    `=em`,
  font_style:  `italic`,
  font_weight: `inherit`,
}, {
  SELECTOR:   `=hr`,
  background: `#d5d7dd`,
  border:     `0`,
  clear:      `both`,
  height:     `1px`,
  margin:     `1rem auto`,
}, {
  SELECTOR:       `=blockquote`,
  font_size:      `1.375rem`,
  font_style:     `normal`,
  letter_spacing: `0`,
  line_height:    `1.25`,
  margin:         `2em 0`,
  padding:        `0`,
  text_transform: `none`,
}, {
  SELECTOR:    `=blockquote,blockquote p`,
  color:       `inherit`,
  font_family: `inherit`,
  font_weight: `inherit`,
}, {
  SELECTOR:       `=blockquote p`,
  font_size:      `inherit`,
  font_style:     `inherit`,
  letter_spacing: `inherit`,
  line_height:    `inherit`,
  text_transform: `inherit`,
}, {
  SELECTOR:    `=cite`,
  display:     `block`,
  font_size:   `.875rem`,
  line_height: `1.375`,
  text_align:  `inherit`,
}, {
  SELECTOR:       `=cite,ol,ul`,
  color:          `inherit`,
  font_family:    `inherit`,
  font_style:     `normal`,
  font_weight:    `inherit`,
  letter_spacing: `0`,
  margin:         `1em 0`,
  text_transform: `none`,
}, {
  SELECTOR:    `=ol,ul`,
  font_size:   `1rem`,
  line_height: `1.5`,
  padding:     `0`,
}, {
  SELECTOR: `=ol li,ul li`,
  margin:   `.5em 0 .5em 1.5em`,
  padding:  `0 0 0 .5em`,
}, {
  SELECTOR: `=ol li>ol,ol li>ul,ul li>ol,ul li>ul`,
  margin:   `.5em 0`,
  padding:  `0`,
}, {
  SELECTOR: `=ol li>ol:first-child,ol li>ul:first-child,ul li>ol:first-child,ul li>ul:first-child`,
  margin:   `.5em 0`,
}, {
  SELECTOR: `=ol li>ol li,ol li>ul li,ul li>ol li,ul li>ul li`,
  margin:   `.5em 0 .5em 1.5em`,
  padding:  `0 0 0 .5em`,
}, {
  SELECTOR:   `=ul,ul li ul`,
  list_style: `disc`,
}, {
  SELECTOR:  `=dl`,
  font_size: `1rem`,
  margin:    `1em 0`,
  padding:   `0`,
}, {
  SELECTOR:    `=dt`,
  font_weight: `600`,
  line_height: `1.375`,
  margin:      `.5em 0`,
}, {
  SELECTOR:       `=dd,dt`,
  color:          `inherit`,
  font_family:    `inherit`,
  font_size:      `inherit`,
  font_style:     `normal`,
  letter_spacing: `0`,
  text_transform: `none`,
}, {
  SELECTOR:    `=dd`,
  font_weight: `inherit`,
  line_height: `1.5`,
  margin:      `0 0 1em`,
}, {
  SELECTOR: `=code`,
  color:    `#195de6`,
}, {
  SELECTOR:    `=code,pre`,
  font_family: `Monaco,Menlo,Consolas,Courier New,monospace`,
  font_size:   `80%`,
  font_style:  `normal`,
  font_weight: `400`,
}, {
  SELECTOR:        `=pre`,
  _moz_tab_size:   `4`,
  _ms_hyphens:     `none`,
  _o_tab_size:     `4`,
  _webkit_hyphens: `none`,
  background:      `#f8f9fa`,
  border:          `1px solid #d5d7dd`,
  border_radius:   `.25em`,
  direction:       `ltr`,
  hyphens:         `none`,
  margin:          `1em 0`,
  overflow:        `auto`,
  padding:         `1em`,
  tab_size:        `4`,
  text_align:      `left`,
  white_space:     `pre`,
  word_break:      `normal`,
  word_spacing:    `normal`,
}, {
  SELECTOR: `=pre,pre code`,
  color:    `inherit`,
}, {
  SELECTOR:  `=pre code`,
  font_size: `inherit`,
}, {
  SELECTOR:      `=kbd`,
  background:    `#f8f9fa`,
  border:        `1px solid #d5d7dd`,
  border_radius: `.25em`,
  color:         `#195de6`,
  font_family:   `Monaco,Menlo,Consolas,Courier New,monospace`,
  font_size:     `80%`,
  font_style:    `normal`,
  font_weight:   `400`,
  margin:        `0 .2em`,
  padding:       `.2em .4em`,
}, {
  SELECTOR:   `=mark`,
  background: `#ff0`,
  font_size:  `inherit`,
  margin:     `0`,
  padding:    `.2em .4em`,
}, join({  SELECTOR: `=mark`,}, tssCommon__17), {
  SELECTOR:      `=fieldset`,
  border:        `0 transparent`,
  border_radius: `0`,
  display:       `block`,
  margin:        `1rem 0`,
  padding:       `0`,
}, {
  SELECTOR:  `=legend`,
  font_size: `1rem`,
  padding:   `0`,
}, {
  SELECTOR:    `=label,legend`,
  color:       `inherit`,
  font_family: `inherit`,
  font_weight: `inherit`,
}, {
  SELECTOR:  `=label`,
  font_size: `.875rem`,
}, {
  SELECTOR:       `=input,label,textarea`,
  display:        `block`,
  font_style:     `normal`,
  letter_spacing: `0`,
  line_height:    `1.5`,
  margin:         `.5em 0`,
  text_transform: `none`,
}, {
  SELECTOR:           `=input,textarea`,
  _moz_appearance:    `none`,
  _webkit_appearance: `none`,
  _webkit_box_shadow: `none`,
  _webkit_box_sizing: `border-box`,
  _webkit_transition: `all .2s ease-in-out`,
  appearance:         `none`,
  background:         `#fff`,
  border:             `1px solid #d5d7dd`,
  border_radius:      `.25em`,
  box_shadow:         `none`,
  box_sizing:         `border-box`,
  color:              `inherit`,
  font_family:        `inherit`,
  font_size:          `1rem`,
  font_weight:        `inherit`,
  height:             `2.5rem`,
  padding:            `0 1em`,
  transition:         `all .2s ease-in-out`,
  width:              `100%`,
}, {
  SELECTOR: `=input::-webkit-input-placeholder,textarea::-webkit-input-placeholder`,
  color:    `inherit`,
  opacity:  `.5`,
}, {
  SELECTOR: `=input::-moz-placeholder,textarea::-moz-placeholder`,
  color:    `inherit`,
  opacity:  `.5`,
}, {
  SELECTOR: `=input:-ms-input-placeholder,textarea:-ms-input-placeholder`,
  color:    `inherit`,
  opacity:  `.5`,
}, {
  SELECTOR: `=input::-ms-input-placeholder,textarea::-ms-input-placeholder`,
  color:    `inherit`,
  opacity:  `.5`,
}, {
  SELECTOR: `=input::placeholder,textarea::placeholder`,
  color:    `inherit`,
  opacity:  `.5`,
}, {
  SELECTOR: `=input:-ms-input-placeholder,textarea:-ms-input-placeholder`,
  opacity:  `1`,
}, {
  SELECTOR:           `=input:hover,textarea:hover`,
  _webkit_box_shadow: `none`,
  background:         `#f9f9f9`,
  border_color:       `#d0d2d7`,
  box_shadow:         `none`,
  color:              `inherit`,
}, {
  SELECTOR:           `=input:focus,textarea:focus`,
  _webkit_box_shadow: `none`,
  background:         `#f2f2f2`,
  border_color:       `#cacdd2`,
  box_shadow:         `none`,
  color:              `inherit`,
}, {
  SELECTOR:       `=input:disabled,textarea:disabled`,
  background:     `#f2f2f2`,
  border_color:   `#d5d7dd`,
  color:          `inherit`,
  pointer_events: `none`,
}, {
  SELECTOR:           `=input[type=search]`,
  _moz_appearance:    `none`,
  _webkit_appearance: `none`,
  _webkit_box_sizing: `border-box`,
  appearance:         `none`,
  box_sizing:         `border-box`,
}, {
  SELECTOR:           `=input[type=file]`,
  _webkit_box_sizing: `border-box!important`,
  background:         `transparent!important`,
  border:             `none!important`,
  box_sizing:         `border-box!important`,
  font_size:          `.7em!important`,
  height:             `auto!important`,
  padding:            `0!important`,
}, {
  SELECTOR:           `=input[type=checkbox],input[type=file],input[type=radio]`,
  _webkit_box_shadow: `none!important`,
  box_shadow:         `none!important`,
}, {
  SELECTOR:     `=input[type=checkbox],input[type=radio]`,
  display:      `inline-block`,
  height:       `auto`,
  margin_right: `10px`,
  width:        `auto`,
}, {
  SELECTOR: `=input[type=checkbox]+p,input[type=radio]+p`,
  display:  `inline-block`,
  margin:   `0`,
}, {
  SELECTOR: `=input[type=checkbox]+label,input[type=radio]+label`,
  display:  `inline-block`,
}, {
  SELECTOR:           `=input[type=checkbox]`,
  _moz_appearance:    `checkbox`,
  _webkit_appearance: `checkbox`,
  appearance:         `checkbox`,
}, {
  SELECTOR:           `=input[type=radio]`,
  _moz_appearance:    `radio`,
  _webkit_appearance: `radio`,
  appearance:         `radio`,
}, {
  SELECTOR:           `=input[type=color]`,
  _webkit_appearance: `none`,
  display:            `inline-block`,
  margin:             `0`,
  padding:            `0`,
  width:              `2.5rem`,
}, {
  SELECTOR: `=input[type=color]::-moz-focus-inner`,
  padding:  `1px`,
}, {
  SELECTOR: `=input[type=color]::-webkit-color-swatch-wrapper`,
  padding:  `1px`,
}, {
  SELECTOR: `=input[type=color]::-moz-color-swatch`,
  border:   `none`,
}, {
  SELECTOR: `=input[type=color]::-webkit-color-swatch`,
  border:   `none`,
}, {
  SELECTOR:           `=textarea`,
  _webkit_transition: `color .2s ease-in-out,background .2s ease-in-out,border .2s ease-in-out`,
  height:             `auto`,
  line_height:        `inherit`,
  max_width:          `100%`,
  padding:            `1em`,
  transition:         `color .2s ease-in-out,background .2s ease-in-out,border .2s ease-in-out`,
}, {
  SELECTOR: `=select`,
  display:  `block`,
  width:    `100%`,
}, {
  SELECTOR:           `=input[type=range]`,
  _webkit_appearance: `none`,
  _webkit_box_shadow: `none!important`,
  _webkit_transition: `all .2s ease-in-out`,
  background:         `transparent`,
  border:             `none`,
  border_radius:      `.25em`,
  box_shadow:         `none!important`,
  color:              `#d5d7dd`,
  font_size:          `.625rem`,
  height:             `auto`,
  margin:             `1rem 0`,
  padding:            `0`,
  transition:         `all .2s ease-in-out`,
  width:              `100%`,
}, {
  SELECTOR:           `=input[type=range]::-webkit-slider-thumb`,
  _webkit_appearance: `none`,
  background:         `#fff`,
  border:             `1px solid #d5d7dd`,
  border_radius:      `50%`,
  height:             `2em`,
  margin_top:         `-.5em`,
  width:              `2em`,
}, {
  SELECTOR:           `=input[type=range]::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-thumb`,
  _webkit_box_shadow: `none`,
  _webkit_transition: `all .2s ease-in-out`,
  box_shadow:         `none`,
  cursor:             `pointer`,
  transition:         `all .2s ease-in-out`,
}, {
  SELECTOR:      `=input[type=range]::-webkit-slider-runnable-track`,
  background:    `currentColor`,
  border:        `0`,
  border_radius: `.25em`,
  height:        `1em`,
  width:         `100%`,
}, {
  SELECTOR:      `=input[type=range]::-moz-range-thumb`,
  background:    `#fff`,
  border:        `1px solid #d5d7dd`,
  border_radius: `50%`,
  height:        `2em`,
  width:         `2em`,
}, {
  SELECTOR:           `=input[type=range]::-moz-range-thumb,input[type=range]::-moz-range-track`,
  _webkit_transition: `all .2s ease-in-out`,
  box_shadow:         `none`,
  cursor:             `pointer`,
  transition:         `all .2s ease-in-out`,
}, {
  SELECTOR:      `=input[type=range]::-moz-range-track`,
  background:    `currentColor`,
  border:        `0`,
  border_radius: `.25em`,
  height:        `1em`,
  width:         `100%`,
}, {
  SELECTOR:           `=input[type=range]::-ms-thumb`,
  _webkit_transition: `all .2s ease-in-out`,
  background:         `#fff`,
  border:             `1px solid #d5d7dd`,
  border_radius:      `50%`,
  box_shadow:         `none`,
  cursor:             `pointer`,
  height:             `2em`,
  transition:         `all .2s ease-in-out`,
  width:              `2em`,
}, {
  SELECTOR:           `=input[type=range]::-ms-fill-lower,input[type=range]::-ms-fill-upper`,
  _webkit_transition: `all .2s ease-in-out`,
  background:         `currentColor`,
  border:             `0`,
  border_radius:      `.25em`,
  box_shadow:         `none`,
  cursor:             `pointer`,
  height:             `1em`,
  transition:         `all .2s ease-in-out`,
  width:              `100%`,
}, {
  SELECTOR:           `=input[type=range]::-ms-track`,
  _webkit_transition: `all .2s ease-in-out`,
  background:         `currentColor`,
  border:             `0`,
  border_radius:      `.25em`,
  box_shadow:         `none`,
  color:              `transparent`,
  cursor:             `pointer`,
  height:             `1em`,
  transition:         `all .2s ease-in-out`,
  width:              `100%`,
}, {
  SELECTOR:   `=input[type=range]:hover`,
  background: `transparent`,
  color:      `#d0d2d7`,
}, {
  SELECTOR:   `=input[type=range]:hover::-webkit-slider-thumb`,
  background: `#f9f9f9`,
}, {
  SELECTOR:           `=input[type=range]:hover::-webkit-slider-runnable-track`,
  _webkit_box_shadow: `none`,
  border_color:       `none`,
  box_shadow:         `none`,
}, {
  SELECTOR:     `=input[type=range]:hover::-moz-range-thumb`,
  border_color: `#d0d2d7`,
}, {
  SELECTOR:   `=input[type=range]:hover::-ms-thumb`,
  box_shadow: `none`,
}, {
  SELECTOR:     `=input[type=range]:hover::-ms-fill-lower,input[type=range]:hover::-ms-fill-upper`,
  border_color: `none`,
  box_shadow:   `none`,
}, {
  SELECTOR:     `=input[type=range]:hover::-ms-track`,
  border_color: `none`,
  box_shadow:   `none`,
}, {
  SELECTOR:   `=input[type=range]:focus`,
  background: `transparent`,
  color:      `#cacdd2`,
}, {
  SELECTOR:           `=input[type=range]:focus::-webkit-slider-thumb`,
  _webkit_box_shadow: `none`,
  background:         `#f2f2f2`,
  border_color:       `#cacdd2`,
  box_shadow:         `none`,
}, {
  SELECTOR:           `=input[type=range]:focus::-webkit-slider-runnable-track`,
  _webkit_box_shadow: `none`,
  border_color:       `none`,
  box_shadow:         `none`,
}, {
  SELECTOR:     `=input[type=range]:focus::-moz-range-thumb,input[type=range]:focus::-moz-range-track`,
  background:   `#f2f2f2`,
  border_color: `#cacdd2`,
  box_shadow:   `none`,
}, {
  SELECTOR:     `=input[type=range]:focus::-ms-thumb`,
  background:   `#f2f2f2`,
  border_color: `#cacdd2`,
  box_shadow:   `none`,
}, {
  SELECTOR:     `=input[type=range]:focus::-ms-fill-lower,input[type=range]:focus::-ms-fill-upper`,
  border_color: `none`,
  box_shadow:   `none`,
}, {
  SELECTOR:     `=input[type=range]:focus::-ms-track`,
  border_color: `none`,
  box_shadow:   `none`,
}, {
  SELECTOR:       `=input[type=range]:disabled`,
  pointer_events: `none`,
}, {
  SELECTOR: `=progress`,
  display:  `block`,
  height:   `.625rem`,
  margin:   `.5em 0`,
  width:    `100%`,
}, {
  SELECTOR:           `=progress[value]`,
  _moz_appearance:    `none`,
  _webkit_appearance: `none`,
  appearance:         `none`,
  border:             `0`,
  color:              `#195de6`,
}, {
  SELECTOR:           `=progress[value]::-webkit-progress-bar`,
  _webkit_box_shadow: `none`,
  background:         `#d5d7dd`,
  border:             `0`,
  border_radius:      `1rem`,
  box_shadow:         `none`,
}, {
  SELECTOR:      `=progress[value]::-webkit-progress-value`,
  background:    `currentColor`,
  border_radius: `1rem`,
}, join({  SELECTOR: `=button`,}, tssCommon__19), join({  SELECTOR: `=button,button:focus,button:hover`,}, tssCommon__20), join({  SELECTOR: `=button:focus,button:hover`,}, tssCommon__21), join({  SELECTOR: `=button:active`,}, tssCommon__22), join({  SELECTOR: `=button svg`,}, tssCommon__25), join({  SELECTOR: `=button:disabled`,}, tssCommon__56), {
  SELECTOR: `=[role=button]`,
  cursor:   `pointer`,
}, {
  SELECTOR: `=figure`,
  display:  `block`,
  margin:   `0`,
  padding:  `0`,
}, {
  SELECTOR:    `=figcaption`,
  color:       `inherit`,
  font_family: `inherit`,
  font_size:   `.875rem`,
  font_weight: `inherit`,
  margin:      `1em 0`,
  text_align:  `left`,
}, join({  SELECTOR: `=nav ul`,}, tssCommon__57), join({  SELECTOR: `=nav li`,}, tssCommon__58), {
  SELECTOR:        `=table`,
  background:      `#fff`,
  border:          `1px solid #d5d7dd`,
  border_collapse: `collapse`,
  border_radius:   `.25em`,
  margin:          `1em 0`,
  width:           `100%`,
}, {
  SELECTOR: `=caption`,
  margin:   `1em 0`,
}, {
  SELECTOR:    `=caption,th`,
  color:       `inherit`,
  font_family: `inherit`,
  font_size:   `inherit`,
  font_weight: `inherit`,
  text_align:  `left`,
}, {
  SELECTOR:       `=th`,
  background:     `#f8f9fa`,
  text_transform: `none`,
}, {
  SELECTOR: `=td,th`,
  border:   `1px solid #d5d7dd`,
  padding:  `.5em`,
}, {
  SELECTOR:       `=td`,
  color:          `inherit`,
  font_family:    `inherit`,
  font_size:      `inherit`,
  font_weight:    `inherit`,
  line_height:    `1.375`,
  vertical_align: `middle`,
});

export const all_caps = tss(join({  SELECTOR: `=@:first-child`,}, tssCommon__0), join({  SELECTOR: `=@:last-child`,}, tssCommon__1), {
  color:          `inherit`,
  font_family:    `inherit`,
  font_size:      `.875rem`,
  font_style:     `normal`,
  font_weight:    `600`,
  letter_spacing: `0`,
  line_height:    `1.25`,
  margin:         `.5em 0`,
  text_transform: `uppercase`,
});

export const control_inline = tss();

export const control_indicator = tss({
  _moz_user_select:    `none`,
  _ms_flex:            `0 0 auto`,
  _ms_user_select:     `none`,
  _webkit_box_flex:    `0`,
  _webkit_box_shadow:  `none`,
  _webkit_user_select: `none`,
  background_color:    `#fff`,
  background_position: `50%`,
  background_repeat:   `no-repeat`,
  border:              `1px solid #d5d7dd`,
  box_shadow:          `none`,
  flex:                `0 0 auto`,
  font_size:           `1.375rem`,
  height:              `1em`,
  line_height:         `1`,
  position:            `relative`,
  text_align:          `center`,
  user_select:         `none`,
  vertical_align:      `middle`,
  width:               `1em`,
}, tssCommon__18);

export const control_label = tss(tssCommon__18, {
  _ms_flex:         `1 1 auto`,
  _webkit_box_flex: `1`,
  color:            `inherit`,
  flex:             `1 1 auto`,
  margin:           `0 0 0 .75em`,
});

export const checkbox = tss();

export const radio = tss();

export const switcher = tss();

export const button_border = tss({
  background: `transparent`,
});

export const button_text = tss(join({  SELECTOR: `=button@`,}, tssCommon__54), join({  SELECTOR: [`=button@`, `=button@:active`, `=button@:focus`, `=button@:hover`],}, tssCommon__55));

export const error = tss({
  SELECTOR:     [`=input@`, `=textarea@`],
  border_color: `#c00!important`,
  color:        `#c00!important`,
}, {
  SELECTOR: `=input[type=range]@`,
  color:    `#c00!important`,
}, {
  SELECTOR: `=progress[value]@`,
  color:    `#c00!important`,
}, join({  SELECTOR: `=button@`,}, tssCommon__26), join({  SELECTOR: query(`button@%`, button_border),}, tssCommon__27), join({  SELECTOR: [`=button@:focus`, `=button@:hover`],}, tssCommon__28), join({  SELECTOR: `=button@:active`,}, tssCommon__29), join({  SELECTOR: query(`button@%`, button_text),}, tssCommon__30), join({  SELECTOR: [query(`button@%:focus`, button_text), query(`button@%:hover`, button_text)],}, tssCommon__31), join({  SELECTOR: query(`button@%:active`, button_text),}, tssCommon__32));

export const warning = tss({
  SELECTOR:     [`=input@`, `=textarea@`],
  border_color: `#f50!important`,
  color:        `#f50!important`,
}, {
  SELECTOR: `=input[type=range]@`,
  color:    `#f50!important`,
}, {
  SELECTOR: `=progress[value]@`,
  color:    `#f50!important`,
}, join({  SELECTOR: `=button@`,}, tssCommon__33), join({  SELECTOR: query(`button@%`, button_border),}, tssCommon__34), join({  SELECTOR: [`=button@:focus`, `=button@:hover`],}, tssCommon__35), join({  SELECTOR: `=button@:active`,}, tssCommon__36), join({  SELECTOR: query(`button@%`, button_text),}, tssCommon__37), join({  SELECTOR: [query(`button@%:focus`, button_text), query(`button@%:hover`, button_text)],}, tssCommon__38), join({  SELECTOR: query(`button@%:active`, button_text),}, tssCommon__39));

export const success = tss({
  SELECTOR:     [`=input@`, `=textarea@`],
  border_color: `#00b300!important`,
  color:        `#00b300!important`,
}, {
  SELECTOR: `=input[type=range]@`,
  color:    `#00b300!important`,
}, {
  SELECTOR: `=progress[value]@`,
  color:    `#00b300!important`,
}, join({  SELECTOR: `=button@`,}, tssCommon__40), join({  SELECTOR: query(`button@%`, button_border),}, tssCommon__41), join({  SELECTOR: [`=button@:focus`, `=button@:hover`],}, tssCommon__42), join({  SELECTOR: `=button@:active`,}, tssCommon__43), join({  SELECTOR: query(`button@%`, button_text),}, tssCommon__44), join({  SELECTOR: [query(`button@%:focus`, button_text), query(`button@%:hover`, button_text)],}, tssCommon__45), join({  SELECTOR: query(`button@%:active`, button_text),}, tssCommon__46));

export const info = tss({
  SELECTOR:     [`=input@`, `=textarea@`],
  border_color: `#08c!important`,
  color:        `#08c!important`,
}, {
  SELECTOR: `=input[type=range]@`,
  color:    `#08c!important`,
}, {
  SELECTOR: `=progress[value]@`,
  color:    `#08c!important`,
}, join({  SELECTOR: `=button@`,}, tssCommon__47), join({  SELECTOR: query(`button@%`, button_border),}, tssCommon__48), join({  SELECTOR: [`=button@:focus`, `=button@:hover`],}, tssCommon__49), join({  SELECTOR: `=button@:active`,}, tssCommon__50), join({  SELECTOR: query(`button@%`, button_text),}, tssCommon__51), join({  SELECTOR: [query(`button@%:focus`, button_text), query(`button@%:hover`, button_text)],}, tssCommon__52), join({  SELECTOR: query(`button@%:active`, button_text),}, tssCommon__53));

export const control = tss(join({  SELECTOR: `=@:first-child`,}, tssCommon__0), join({  SELECTOR: `=@:last-child`,}, tssCommon__1), join({  MEDIA: tssMedia__8,}, tssCommon__2), {
  color:          `inherit`,
  cursor:         `pointer`,
  display:        [`-webkit-box`,`-ms-flexbox`,`flex`],
  font_family:    `inherit`,
  font_size:      `1rem`,
  font_style:     `normal`,
  font_weight:    `inherit`,
  letter_spacing: `0`,
  line_height:    `1.25`,
  margin:         `.5em 0`,
  padding:        `0`,
  position:       `relative`,
  text_transform: `none`,
}, {
  SELECTOR:     query(`@%`, control_inline),
  display:      [`-webkit-inline-box`,`-ms-inline-flexbox`,`inline-flex`],
  margin_right: `2rem`,
}, {
  SELECTOR:           query(`@:hover %`, control_indicator),
  _webkit_box_shadow: `none`,
  background_color:   `#f9f9f9`,
  border_color:       `#d0d2d7`,
  box_shadow:         `none`,
}, {
  SELECTOR: [`input[type=checkbox]`, `input[type=radio]`],
  margin:   `0`,
  opacity:  `0`,
  position: `absolute`,
  z_index:  `-1`,
}, {
  SELECTOR:           [query(`@ input[type=checkbox]:focus~%`, control_indicator), query(`@ input[type=radio]:focus~%`, control_indicator)],
  _webkit_box_shadow: `none`,
  background_color:   `#f2f2f2`,
  border_color:       `#cacdd2`,
  box_shadow:         `none`,
  outline:            `.125rem solid #08c`,
  outline_offset:     `.125rem`,
}, {
  SELECTOR:         [query(`@ input[type=checkbox]:checked~%`, control_indicator), query(`@ input[type=radio]:checked~%`, control_indicator)],
  background_color: `#195de6`,
  border:           `1px solid #195de6`,
}, {
  SELECTOR: [query(`@ input[type=checkbox]:checked~%`, control_label), query(`@ input[type=radio]:checked~%`, control_label)],
  color:    `inherit`,
}, {
  SELECTOR:      query(`@% %`, checkbox, control_indicator),
  border_radius: `.25em`,
}, {
  SELECTOR:         query(`@% input[type=checkbox]:checked~%`, checkbox, control_indicator),
  background_color: `#195de6`,
  background_image: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16"><polyline points="4 8.43 6.67 11 12 5" fill="none" stroke="white" stroke-miterlimit="10" stroke-width="2"/></svg>')`,
}, {
  SELECTOR:      query(`@% %`, radio, control_indicator),
  border_radius: `1.375rem`,
}, {
  SELECTOR:          query(`@% input[type=radio]:checked~%:before`, radio, control_indicator),
  _webkit_transform: `translate(-50%,-50%)`,
  background:        `#fff`,
  border_radius:     `1.375rem`,
  content:           `""`,
  height:            `.5em`,
  left:              `50%`,
  position:          `absolute`,
  top:               `50%`,
  transform:         `translate(-50%,-50%)`,
  width:             `.5em`,
}, {
  SELECTOR:      query(`@% %`, switcher, control_indicator),
  border_radius: `1.375rem`,
  width:         `2em`,
}, {
  SELECTOR:           query(`@% %:before`, switcher, control_indicator),
  _webkit_transition: `all .2s ease-in-out`,
  background_color:   `#fff`,
  border:             `inherit`,
  border_radius:      `1.375rem`,
  content:            `""`,
  display:            `block`,
  height:             `1em`,
  left:               `-1px`,
  position:           `absolute`,
  top:                `-1px`,
  transition:         `all .2s ease-in-out`,
  width:              `1em`,
}, {
  SELECTOR: query(`@% input[type=checkbox]:checked~%:before`, switcher, control_indicator),
  left:     `calc(100% - 1em + 1px)`,
}, {
  SELECTOR:         query(`@% input:checked~%`, error, control_indicator),
  background_color: `#c00!important`,
  border_color:     `#c00!important`,
}, {
  SELECTOR:         query(`@% input:checked~%`, warning, control_indicator),
  background_color: `#f50!important`,
  border_color:     `#f50!important`,
}, {
  SELECTOR:         query(`@% input:checked~%`, success, control_indicator),
  background_color: `#00b300!important`,
  border_color:     `#00b300!important`,
}, {
  SELECTOR:         query(`@% input:checked~%`, info, control_indicator),
  background_color: `#08c!important`,
  border_color:     `#08c!important`,
});

export const display_title = tss(join({  SELECTOR: `=@:first-child`,}, tssCommon__0), join({  SELECTOR: `=@:last-child`,}, tssCommon__1), {
  color:          `inherit`,
  font_family:    `inherit`,
  font_size:      `1.5rem`,
  font_style:     `normal`,
  font_weight:    `700`,
  letter_spacing: `0`,
  line_height:    `1`,
  margin:         `.125em 0`,
  text_transform: `none`,
});

export const form_message = tss(tssCommon__17, {
  font_size:      `.875rem`,
  letter_spacing: `0`,
  line_height:    `1.5`,
  margin:         `.5em 0`,
  text_transform: `none`,
}, {
  SELECTOR: `=@:empty`,
  display:  `none`,
}, {
  SELECTOR: query(`@%`, error),
  color:    `#c00`,
}, {
  SELECTOR: query(`@%`, warning),
  color:    `#f50`,
}, {
  SELECTOR: query(`@%`, success),
  color:    `#00b300`,
}, {
  SELECTOR: query(`@%`, info),
  color:    `#08c`,
});

export const select = tss(join({  SELECTOR: `=@:first-child`,}, tssCommon__0), join({  SELECTOR: `=@:last-child`,}, tssCommon__1), {
  display:        `block`,
  font_size:      `1rem`,
  font_style:     `normal`,
  letter_spacing: `0`,
  line_height:    `auto`,
  margin:         `.5em 0`,
  position:       `relative`,
  text_transform: `none`,
}, {
  SELECTOR:    `select`,
  font_family: `inherit`,
  font_weight: `inherit`,
}, {
  SELECTOR:           `select`,
  _moz_appearance:    `none`,
  _webkit_appearance: `none`,
  _webkit_box_shadow: `none`,
  _webkit_transition: `all .2s ease-in-out`,
  appearance:         `none`,
  background:         `#fff`,
  border:             `1px solid #d5d7dd`,
  border_radius:      `.25em`,
  box_shadow:         `none`,
  color:              `inherit`,
  cursor:             `pointer`,
  font_size:          `inherit`,
  font_style:         `inherit`,
  height:             `2.5rem`,
  letter_spacing:     `inherit`,
  line_height:        `inherit`,
  margin:             `0`,
  outline:            `0`,
  padding:            `0 1em`,
  text_transform:     `inherit`,
  transition:         `all .2s ease-in-out`,
}, {
  SELECTOR:    `select::-moz-focusring`,
  color:       `transparent`,
  text_shadow: `0 0 0 #000`,
}, {
  SELECTOR: `select::-ms-expand`,
  display:  `none`,
}, {
  SELECTOR:     `select:hover`,
  background:   `#f9f9f9`,
  border_color: `#d0d2d7`,
}, {
  SELECTOR:           [`select:focus`, `select:hover`],
  _webkit_box_shadow: `none`,
  box_shadow:         `none`,
  color:              `inherit`,
}, {
  SELECTOR:       `select:focus`,
  background:     `#f2f2f2`,
  border_color:   `#cacdd2`,
  outline:        `.125rem solid #08c`,
  outline_offset: `.125rem`,
}, {
  SELECTOR:       `select:disabled`,
  background:     `#f2f2f2`,
  border_color:   `#d5d7dd`,
  color:          `inherit`,
  pointer_events: `none`,
}, {
  SELECTOR:     query(`@% select`, error),
  border_color: `#c00!important`,
  color:        `#c00!important`,
}, {
  SELECTOR:         query(`@%:after`, error),
  border_top_color: `#c00!important`,
}, {
  SELECTOR:     query(`@% select`, warning),
  border_color: `#f50!important`,
  color:        `#f50!important`,
}, {
  SELECTOR:         query(`@%:after`, warning),
  border_top_color: `#f50!important`,
}, {
  SELECTOR:     query(`@% select`, success),
  border_color: `#00b300!important`,
  color:        `#00b300!important`,
}, {
  SELECTOR:         query(`@%:after`, success),
  border_top_color: `#00b300!important`,
}, {
  SELECTOR:     query(`@% select`, info),
  border_color: `#08c!important`,
  color:        `#08c!important`,
}, {
  SELECTOR:         query(`@%:after`, info),
  border_top_color: `#08c!important`,
}, {
  SELECTOR:       `=@:after`,
  border_left:    `4px solid transparent`,
  border_right:   `4px solid transparent`,
  border_top:     `4px solid #2e3138`,
  content:        `""`,
  height:         `0`,
  margin_top:     `-2px`,
  pointer_events: `none`,
  position:       `absolute`,
  right:          `1em`,
  top:            `50%`,
  width:          `0`,
});

export const field = tss(join({  SELECTOR: `=@:first-child`,}, tssCommon__0), join({  SELECTOR: `=@:last-child`,}, tssCommon__1), join({  MEDIA: tssMedia__8,}, tssCommon__2), {
  margin: `1rem 0`,
}, {
  SELECTOR:   [query(`@ %:first-child`, form_message), query(`@ %:first-child`, select), `input:first-child`, `label:first-child`, `textarea:first-child`],
  margin_top: `0`,
}, {
  SELECTOR:      [query(`@ %:last-child`, form_message), query(`@ %:last-child`, select), `input:last-child`, `label:last-child`, `textarea:last-child`],
  margin_bottom: `0`,
});

export const table_responsive = tss(join({  SELECTOR: `=@:first-child`,}, tssCommon__0), join({  SELECTOR: `=@:last-child`,}, tssCommon__1), {
  margin:     `1em 0`,
  min_height: `.01%`,
  overflow_x: `auto`,
}, {
  MEDIA:              tssMedia__5,
  _ms_overflow_style: `-ms-autohiding-scrollbar`,
  border:             `1px solid #d5d7dd`,
  overflow_y:         `hidden`,
  width:              `100%`,
}, {
  MEDIA:    tssMedia__5,
  SELECTOR: `=@>table`,
  border:   `none`,
  margin:   `0`,
}, {
  MEDIA:       tssMedia__5,
  SELECTOR:    [`=@>table td`, `=@>table th`],
  white_space: `nowrap`,
}, {
  MEDIA:       tssMedia__5,
  SELECTOR:    [`=@>table td:first-child`, `=@>table th:first-child`],
  border_left: `none`,
}, {
  MEDIA:        tssMedia__5,
  SELECTOR:     [`=@>table td:last-child`, `=@>table th:last-child`],
  border_right: `none`,
}, {
  MEDIA:      tssMedia__5,
  SELECTOR:   [`=@>table tr:first-child>td`, `=@>table tr:first-child>th`],
  border_top: `none`,
}, {
  MEDIA:         tssMedia__5,
  SELECTOR:      [`=@>table tr:last-child>td`, `=@>table tr:last-child>th`],
  border_bottom: `none`,
});

export const container = tss({
  margin:        `0 auto`,
  padding_left:  `1rem`,
  padding_right: `1rem`,
  width:         `100%`,
}, {
  MEDIA:     tssMedia__1,
  max_width: `80rem`,
}, {
  MEDIA:     tssMedia__2,
  max_width: `80rem`,
}, {
  MEDIA:     tssMedia__3,
  max_width: `80rem`,
}, {
  MEDIA:     tssMedia__4,
  max_width: `70rem`,
}, {
  MEDIA:     tssMedia__5,
  max_width: `100%`,
}, {
  MEDIA:     tssMedia__6,
  max_width: `100%`,
}, {
  MEDIA:     tssMedia__7,
  max_width: `100%`,
});

export const group = tss({
  SELECTOR:          `=@>ul`,
  _ms_flex_align:    `center`,
  _ms_flex_wrap:     `wrap`,
  _webkit_box_align: `center`,
  align_items:       `center`,
  display:           [`-webkit-box`,`-ms-flexbox`,`flex`],
  flex_wrap:         `wrap`,
  list_style:        `none`,
  margin:            `0`,
  padding:           `0`,
}, {
  SELECTOR:         `=@>ul>li`,
  _ms_flex:         `none`,
  _webkit_box_flex: `0`,
  flex:             `none`,
  margin:           `0`,
  padding:          `0`,
});

export const group_center = tss({
  SELECTOR:         `=@>ul`,
  _ms_flex_pack:    `center`,
  _webkit_box_pack: `center`,
  justify_content:  `center`,
});

export const group_column = tss({
  SELECTOR:              `=@>ul`,
  _ms_flex_direction:    `column`,
  _webkit_box_direction: `normal`,
  _webkit_box_orient:    `vertical`,
  flex_direction:        `column`,
});

export const group_nowrap = tss({
  SELECTOR:      `=@>ul`,
  _ms_flex_wrap: `nowrap`,
  flex_wrap:     `nowrap`,
});

export const group_space_between = tss({
  SELECTOR:         `=@>ul`,
  _ms_flex_pack:    `justify`,
  _webkit_box_pack: `justify`,
  justify_content:  `space-between`,
});

export const group_space_around = tss({
  SELECTOR:        `=@>ul`,
  _ms_flex_pack:   `distribute`,
  justify_content: `space-around`,
});

export const group_space_evenly = tss({
  SELECTOR:         `=@>ul`,
  _ms_flex_pack:    `space-evenly`,
  _webkit_box_pack: `space-evenly`,
  justify_content:  `space-evenly`,
});

export const group_stretch = tss({
  SELECTOR:         `=@>ul>li`,
  _ms_flex:         `1 1 0px`,
  _webkit_box_flex: `1`,
  flex:             `1 1 0px`,
});

export const group_xxl = tss({
  SELECTOR: `=@>ul`,
  margin:   `-.875rem`,
}, {
  SELECTOR: `=@>ul>li`,
  margin:   `.875rem`,
});

export const group_xl = tss({
  SELECTOR: `=@>ul`,
  margin:   `-.75rem`,
}, {
  SELECTOR: `=@>ul>li`,
  margin:   `.75rem`,
});

export const group_l = tss({
  SELECTOR: `=@>ul`,
  margin:   `-.625rem`,
}, {
  SELECTOR: `=@>ul>li`,
  margin:   `.625rem`,
});

export const group_m = tss({
  SELECTOR: `=@>ul`,
  margin:   `-.5rem`,
}, {
  SELECTOR: `=@>ul>li`,
  margin:   `.5rem`,
});

export const group_s = tss({
  SELECTOR: `=@>ul`,
  margin:   `-.375rem`,
}, {
  SELECTOR: `=@>ul>li`,
  margin:   `.375rem`,
});

export const group_xs = tss({
  SELECTOR: `=@>ul`,
  margin:   `-.25rem`,
}, {
  SELECTOR: `=@>ul>li`,
  margin:   `.25rem`,
});

export const group_xxs = tss({
  SELECTOR: `=@>ul`,
  margin:   `-.125rem`,
}, {
  SELECTOR: `=@>ul>li`,
  margin:   `.125rem`,
});

export const media_inner = tss();

export const media = tss(join({  MEDIA: tssMedia__8,}, tssCommon__2), {
  background:    `rgba(0,0,0,.1)`,
  border_radius: `.25em`,
  display:       `block`,
  overflow:      `hidden`,
  position:      `relative`,
}, {
  SELECTOR:      [query(`@>%`, media_inner), `=@>canvas`, `=@>iframe`, `=@>img`, `=@>svg`, `=@>video`],
  border_radius: `inherit`,
  bottom:        `0`,
  display:       `block`,
  height:        `100%`,
  left:          `0`,
  position:      `absolute`,
  right:         `0`,
  top:           `0`,
  width:         `100%`,
}, {
  SELECTOR:      [`=@>canvas`, `=@>img`, `=@>video`],
  _o_object_fit: `cover`,
  object_fit:    `cover`,
});

export const screen_reader = tss({
  border:   `0`,
  clip:     `rect(0 0 0 0)`,
  height:   `1px`,
  margin:   `-1px`,
  overflow: `hidden`,
  padding:  `0`,
  position: `absolute`,
  width:    `1px`,
});

export const screen_reader_focusable = tss({
  SELECTOR: [`=@:active`, `=@:focus`],
  clip:     `auto`,
  height:   `auto`,
  margin:   `0`,
  overflow: `visible`,
  position: `static`,
  width:    `auto`,
});

export const h6 = tss(tssCommon__3, join({  SELECTOR: `small`,}, tssCommon__4), join({  SELECTOR: `=h5+@`,}, tssCommon__14), tssCommon__15);

export const h5 = tss(tssCommon__3, join({  SELECTOR: `small`,}, tssCommon__4), join({  SELECTOR: `=h4+@`,}, tssCommon__12), tssCommon__13, join({  SELECTOR: [query(`@+%`, h6), `=@+h6`],}, tssCommon__14));

export const h4 = tss(tssCommon__3, join({  SELECTOR: `small`,}, tssCommon__4), join({  SELECTOR: `=h3+@`,}, tssCommon__10), tssCommon__11, join({  SELECTOR: [query(`@+%`, h5), `=@+h5`],}, tssCommon__12));

export const h3 = tss(tssCommon__3, join({  SELECTOR: `small`,}, tssCommon__4), join({  SELECTOR: `=h2+@`,}, tssCommon__8), tssCommon__9, join({  SELECTOR: [query(`@+%`, h4), `=@+h4`],}, tssCommon__10));

export const h2 = tss(tssCommon__3, join({  SELECTOR: `small`,}, tssCommon__4), join({  SELECTOR: `=h1+@`,}, tssCommon__6), tssCommon__7, join({  SELECTOR: [query(`@+%`, h3), `=@+h3`],}, tssCommon__8));

export const h1 = tss(tssCommon__3, join({  SELECTOR: `small`,}, tssCommon__4), tssCommon__5, join({  SELECTOR: [query(`@+%`, h2), `=@+h2`],}, tssCommon__6));

export const display_title_xxl = tss({
  font_size: `2.5rem`,
});

export const display_title_xl = tss({
  font_size: `2rem`,
});

export const display_title_l = tss({
  font_size: `1.75rem`,
});

export const display_title_s = tss({
  font_size: `1.25rem`,
});

export const display_title_xs = tss({
  font_size: `1.125rem`,
});

export const display_title_xxs = tss({
  font_size: `1rem`,
});

export const all_caps_xxl = tss({
  font_size: `1.0625rem`,
});

export const all_caps_xl = tss({
  font_size: `1rem`,
});

export const all_caps_l = tss({
  font_size: `.9375rem`,
});

export const all_caps_s = tss({
  font_size: `.8125rem`,
});

export const all_caps_xs = tss({
  font_size: `.75rem`,
});

export const all_caps_xxs = tss({
  font_size: `.6875rem`,
});

export const lead = tss({
  color:          `inherit`,
  font_family:    `inherit`,
  font_size:      `1.375rem`,
  font_style:     `normal`,
  font_weight:    `inherit`,
  letter_spacing: `0`,
  line_height:    `1.25`,
  margin:         `.5em 0`,
  text_transform: `none`,
});

export const lead_xxl = tss({
  font_size: `1.75rem`,
});

export const lead_xl = tss({
  font_size: `1.625rem`,
});

export const lead_l = tss({
  font_size: `1.5rem`,
});

export const lead_s = tss({
  font_size: `1.25rem`,
});

export const lead_xs = tss({
  font_size: `1.125rem`,
});

export const lead_xxs = tss(tssCommon__16);

export const list_unstyled = tss({
  list_style: `none`,
}, {
  SELECTOR:     `li`,
  margin_left:  `0`,
  padding_left: `0`,
});

export const list_inline = tss({
  SELECTOR: `li`,
  display:  `inline-block`,
});

export const field_float_label = tss({
  position: `relative`,
}, {
  SELECTOR:           [`input+label`, `textarea+label`],
  _webkit_transform:  `translateY(50%)`,
  _webkit_transition: `all .2s ease-in-out`,
  left:               `0`,
  margin:             `0 1em`,
  opacity:            `0`,
  padding:            `.25em`,
  pointer_events:     `none`,
  position:           `absolute`,
  top:                `0`,
  transform:          `translateY(50%)`,
  transition:         `all .2s ease-in-out`,
}, {
  SELECTOR: [`input:focus::-webkit-input-placeholder`, `textarea:focus::-webkit-input-placeholder`],
  opacity:  `0`,
}, {
  SELECTOR: [`input:focus::-moz-placeholder`, `textarea:focus::-moz-placeholder`],
  opacity:  `0`,
}, {
  SELECTOR: [`input:focus:-ms-input-placeholder`, `textarea:focus:-ms-input-placeholder`],
  opacity:  `0`,
}, {
  SELECTOR: [`input:focus::-ms-input-placeholder`, `textarea:focus::-ms-input-placeholder`],
  opacity:  `0`,
}, {
  SELECTOR: [`input:focus::placeholder`, `textarea:focus::placeholder`],
  opacity:  `0`,
}, {
  SELECTOR:          [`input:focus+label`, `textarea:focus+label`],
  _webkit_transform: `translateY(-50%)`,
  background_color:  `transparent`,
  background_image:  [`-webkit-gradient(linear,left top,left bottom,color-stop(50%,transparent),color-stop(50%,#f2f2f2))`,`linear-gradient(180deg,transparent 50%,#f2f2f2 0)`],
  opacity:           `1`,
  transform:         `translateY(-50%)`,
});

export const input_xxl = tss({
  font_size: `1.5rem`,
  height:    `3.25rem`,
}, {
  SELECTOR: `=input[type=color]@`,
  width:    `3.25rem`,
});

export const input_xl = tss({
  font_size: `1.25rem`,
  height:    `3rem`,
}, {
  SELECTOR: `=input[type=color]@`,
  width:    `3rem`,
});

export const input_l = tss({
  font_size: `1.125rem`,
  height:    `2.75rem`,
}, {
  SELECTOR: `=input[type=color]@`,
  width:    `2.75rem`,
});

export const input_s = tss({
  font_size: `.875rem`,
  height:    `2.25rem`,
}, {
  SELECTOR: `=input[type=color]@`,
  width:    `2.25rem`,
});

export const input_xs = tss({
  font_size: `.75rem`,
  height:    `2rem`,
}, {
  SELECTOR: `=input[type=color]@`,
  width:    `2rem`,
});

export const input_xxs = tss({
  font_size: `.625rem`,
  height:    `1.75rem`,
}, {
  SELECTOR: `=input[type=color]@`,
  width:    `1.75rem`,
});

export const spinner = tss(join({  SELECTOR: `=button@`,}, tssCommon__23), join({  SELECTOR: `=button@:before`,}, tssCommon__24), {
  position: `relative`,
}, {
  SELECTOR:          `=@:before`,
  _webkit_animation: `spin .5s linear infinite`,
  animation:         `spin .5s linear infinite`,
  border:            `.125rem solid rgba(0,0,0,.1)`,
  border_left_color: `#fff`,
  border_radius:     `50%`,
  content:           `""`,
  display:           `block`,
  height:            `1.75rem`,
  left:              `50%`,
  margin_left:       `-.875rem`,
  margin_top:        `-.875rem`,
  position:          `absolute`,
  top:               `50%`,
  width:             `1.75rem`,
});

export const button = tss(tssCommon__19, join({  SELECTOR: [`=@:focus`, `=@:hover`],}, tssCommon__20), join({  SELECTOR: [`=@:focus`, `=@:hover`],}, tssCommon__21), join({  SELECTOR: `=@:active`,}, tssCommon__22), join({  SELECTOR: query(`@%`, spinner),}, tssCommon__23), join({  SELECTOR: query(`@%:before`, spinner),}, tssCommon__24), join({  SELECTOR: `svg`,}, tssCommon__25), join({  SELECTOR: query(`@%`, error),}, tssCommon__26), join({  SELECTOR: query(`@%%`, error, button_border),}, tssCommon__27), join({  SELECTOR: [query(`@%:focus`, error), query(`@%:hover`, error)],}, tssCommon__28), join({  SELECTOR: query(`@%:active`, error),}, tssCommon__29), join({  SELECTOR: query(`@%%`, error, button_text),}, tssCommon__30), join({  SELECTOR: [query(`@%%:focus`, error, button_text), query(`@%%:hover`, error, button_text)],}, tssCommon__31), join({  SELECTOR: query(`@%%:active`, error, button_text),}, tssCommon__32), join({  SELECTOR: query(`@%`, warning),}, tssCommon__33), join({  SELECTOR: query(`@%%`, warning, button_border),}, tssCommon__34), join({  SELECTOR: [query(`@%:focus`, warning), query(`@%:hover`, warning)],}, tssCommon__35), join({  SELECTOR: query(`@%:active`, warning),}, tssCommon__36), join({  SELECTOR: query(`@%%`, warning, button_text),}, tssCommon__37), join({  SELECTOR: [query(`@%%:focus`, warning, button_text), query(`@%%:hover`, warning, button_text)],}, tssCommon__38), join({  SELECTOR: query(`@%%:active`, warning, button_text),}, tssCommon__39), join({  SELECTOR: query(`@%`, success),}, tssCommon__40), join({  SELECTOR: query(`@%%`, success, button_border),}, tssCommon__41), join({  SELECTOR: [query(`@%:focus`, success), query(`@%:hover`, success)],}, tssCommon__42), join({  SELECTOR: query(`@%:active`, success),}, tssCommon__43), join({  SELECTOR: query(`@%%`, success, button_text),}, tssCommon__44), join({  SELECTOR: [query(`@%%:focus`, success, button_text), query(`@%%:hover`, success, button_text)],}, tssCommon__45), join({  SELECTOR: query(`@%%:active`, success, button_text),}, tssCommon__46), join({  SELECTOR: query(`@%`, info),}, tssCommon__47), join({  SELECTOR: query(`@%%`, info, button_border),}, tssCommon__48), join({  SELECTOR: [query(`@%:focus`, info), query(`@%:hover`, info)],}, tssCommon__49), join({  SELECTOR: query(`@%:active`, info),}, tssCommon__50), join({  SELECTOR: query(`@%%`, info, button_text),}, tssCommon__51), join({  SELECTOR: [query(`@%%:focus`, info, button_text), query(`@%%:hover`, info, button_text)],}, tssCommon__52), join({  SELECTOR: query(`@%%:active`, info, button_text),}, tssCommon__53), join({  SELECTOR: query(`@%`, button_text),}, tssCommon__54), join({  SELECTOR: [query(`@%`, button_text), query(`@%:active`, button_text), query(`@%:focus`, button_text), query(`@%:hover`, button_text)],}, tssCommon__55), join({  SELECTOR: `=@[disabled]`,}, tssCommon__56));

export const input_group = tss({
  display: [`-webkit-box`,`-ms-flexbox`,`flex`],
}, {
  SELECTOR:         `input`,
  _ms_flex:         `1 1 auto`,
  _webkit_box_flex: `1`,
  flex:             `1 1 auto`,
  margin:           `0`,
}, {
  SELECTOR:                 `input:not(:last-child)`,
  border_bottom_right_radius: `0`,
  border_top_right_radius:  `0`,
}, {
  SELECTOR:         [query(`@ %`, button), `button`],
  _ms_flex:         `0 0 auto`,
  _webkit_box_flex: `0`,
  flex:             `0 0 auto`,
}, {
  SELECTOR: [query(`@ %`, button), `button`, `input`],
  position: `relative`,
}, {
  SELECTOR: [query(`@ %:active`, button), query(`@ %:focus`, button), query(`@ %:hover`, button), `button:active`, `button:focus`, `button:hover`, `input:active`, `input:focus`, `input:hover`],
  z_index:  `2`,
}, {
  SELECTOR:                 [query(`@ %+%`, button, button), query(`@ %+button`, button), query(`@ %+input`, button), query(`@ button+%`, button), `button+button`, `button+input`, query(`@ input+%`, button), `input+button`, `input+input`],
  border_bottom_left_radius: `0`,
  border_top_left_radius:   `0`,
}, {
  SELECTOR:    [query(`@ %+%`, button, button), query(`@ %+button`, button), query(`@ %+input`, button), query(`@ button+%`, button), `button+button`, `button+input`, query(`@ input+%`, button), `input+button`, `input+input`],
  margin_left: `-1px`,
});

export const select_xxl = tss({
  SELECTOR:  [`select`, `=select@`],
  font_size: `1.5rem`,
  height:    `3.25rem`,
});

export const select_xl = tss({
  SELECTOR:  [`select`, `=select@`],
  font_size: `1.25rem`,
  height:    `3rem`,
});

export const select_l = tss({
  SELECTOR:  [`select`, `=select@`],
  font_size: `1.125rem`,
  height:    `2.75rem`,
});

export const select_s = tss({
  SELECTOR:  [`select`, `=select@`],
  font_size: `.875rem`,
  height:    `2.25rem`,
});

export const select_xs = tss({
  SELECTOR:  [`select`, `=select@`],
  font_size: `.75rem`,
  height:    `2rem`,
});

export const select_xxs = tss({
  SELECTOR:  [`select`, `=select@`],
  font_size: `.625rem`,
  height:    `1.75rem`,
});

export const control_reversed = tss({
  SELECTOR:                 query(`@>%`, control_label),
  _ms_flex_order:           `1`,
  _webkit_box_ordinal_group: `2`,
  margin:                   `0`,
  order:                    `1`,
}, {
  SELECTOR:                 query(`@>%`, control_indicator),
  _ms_flex_order:           `2`,
  _webkit_box_ordinal_group: `3`,
  margin:                   `0 0 0 .75em`,
  order:                    `2`,
});

export const control_xxl = tss({
  font_size: `1.5rem`,
}, {
  SELECTOR:  query(`@ %`, control_indicator),
  font_size: `1.75rem`,
});

export const control_xl = tss({
  font_size: `1.25rem`,
}, {
  SELECTOR:  query(`@ %`, control_indicator),
  font_size: `1.625rem`,
});

export const control_l = tss({
  font_size: `1.125rem`,
}, {
  SELECTOR:  query(`@ %`, control_indicator),
  font_size: `1.5rem`,
});

export const control_s = tss({
  font_size: `.875rem`,
}, {
  SELECTOR:  query(`@ %`, control_indicator),
  font_size: `1.25rem`,
});

export const control_xs = tss({
  font_size: `.75rem`,
}, {
  SELECTOR:  query(`@ %`, control_indicator),
  font_size: `1.125rem`,
});

export const control_xxs = tss({
  font_size: `.625rem`,
}, {
  SELECTOR:  query(`@ %`, control_indicator),
  font_size: `1rem`,
});

export const range_xxl = tss({
  SELECTOR:  `=input[type=range]@`,
  font_size: `1rem`,
});

export const range_xl = tss({
  SELECTOR:  `=input[type=range]@`,
  font_size: `.875rem`,
});

export const range_l = tss({
  SELECTOR:  `=input[type=range]@`,
  font_size: `.75rem`,
});

export const range_s = tss({
  SELECTOR:  `=input[type=range]@`,
  font_size: `.5rem`,
});

export const range_xs = tss({
  SELECTOR:  `=input[type=range]@`,
  font_size: `.375rem`,
});

export const range_xxs = tss({
  SELECTOR:  `=input[type=range]@`,
  font_size: `.25rem`,
});

export const progress_xxl = tss({
  height: `1rem`,
});

export const progress_xl = tss({
  height: `.875rem`,
});

export const progress_l = tss({
  height: `.75rem`,
});

export const progress_s = tss({
  height: `.5rem`,
});

export const progress_xs = tss({
  height: `.375rem`,
});

export const progress_xxs = tss({
  height: `.25rem`,
});

export const button_error = tss(tssCommon__26, join({  SELECTOR: query(`@%`, button_border),}, tssCommon__27), join({  SELECTOR: [`=@:focus`, `=@:hover`],}, tssCommon__28), join({  SELECTOR: `=@:active`,}, tssCommon__29), join({  SELECTOR: query(`@%`, button_text),}, tssCommon__30), join({  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],}, tssCommon__31), join({  SELECTOR: query(`@%:active`, button_text),}, tssCommon__32));

export const button_warning = tss(tssCommon__33, join({  SELECTOR: query(`@%`, button_border),}, tssCommon__34), join({  SELECTOR: [`=@:focus`, `=@:hover`],}, tssCommon__35), join({  SELECTOR: `=@:active`,}, tssCommon__36), join({  SELECTOR: query(`@%`, button_text),}, tssCommon__37), join({  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],}, tssCommon__38), join({  SELECTOR: query(`@%:active`, button_text),}, tssCommon__39));

export const button_success = tss(tssCommon__40, join({  SELECTOR: query(`@%`, button_border),}, tssCommon__41), join({  SELECTOR: [`=@:focus`, `=@:hover`],}, tssCommon__42), join({  SELECTOR: `=@:active`,}, tssCommon__43), join({  SELECTOR: query(`@%`, button_text),}, tssCommon__44), join({  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],}, tssCommon__45), join({  SELECTOR: query(`@%:active`, button_text),}, tssCommon__46));

export const button_info = tss(tssCommon__47, join({  SELECTOR: query(`@%`, button_border),}, tssCommon__48), join({  SELECTOR: [`=@:focus`, `=@:hover`],}, tssCommon__49), join({  SELECTOR: `=@:active`,}, tssCommon__50), join({  SELECTOR: query(`@%`, button_text),}, tssCommon__51), join({  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],}, tssCommon__52), join({  SELECTOR: query(`@%:active`, button_text),}, tssCommon__53));

export const button_square = tss({
  padding: `calc(.75rem - 1px)`,
});

export const button_pill = tss({
  border_radius: `1.25rem`,
});

export const button_block = tss({
  display:    `block`,
  text_align: `center`,
  width:      `100%`,
});

export const button_icon = tss({
  padding_bottom: `calc(.5rem - 1px)`,
  padding_top:    `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@%`, button_square),
  padding:  `calc(.5rem - 1px)`,
}, {
  SELECTOR:       [`span`, `svg`],
  vertical_align: `middle`,
}, {
  SELECTOR: `svg`,
  display:  `inline-block`,
  height:   `1.5rem`,
  width:    `1.5rem`,
}, {
  SELECTOR:    `svg:not(:first-child)`,
  margin_left: `.8em`,
}, {
  SELECTOR:     `svg:not(:last-child)`,
  margin_right: `.8em`,
}, {
  SELECTOR:          `=a@`,
  _ms_flex_align:    `center`,
  _webkit_box_align: `center`,
  align_items:       `center`,
  display:           [`-webkit-inline-box`,`-ms-inline-flexbox`,`inline-flex`],
}, {
  SELECTOR:         query(`a@%`, button_block),
  _ms_flex_pack:    `justify`,
  _webkit_box_pack: `justify`,
  display:          [`-webkit-box`,`-ms-flexbox`,`flex`],
  justify_content:  `space-between`,
}, {
  SELECTOR:         [`=a@ span`, `=a@ svg`],
  _ms_flex:         `none`,
  _webkit_box_flex: `0`,
  flex:             `none`,
});

export const button_xxl = tss({
  font_size: `1.5rem`,
  height:    `3.25rem`,
  min_width: `3.25rem`,
  padding:   `calc(.875rem - 1px) 1em`,
}, {
  SELECTOR: `svg`,
  height:   `1.5rem`,
  width:    `1.5rem`,
}, {
  SELECTOR: query(`@%`, button_square),
  padding:  `calc(.875rem - 1px)`,
}, {
  SELECTOR:      query(`@%`, button_pill),
  border_radius: `1.625rem`,
}, {
  SELECTOR:       query(`@%`, button_icon),
  padding_bottom: `calc(.5rem - 1px)`,
  padding_top:    `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@%%`, button_icon, button_square),
  padding:  `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@% svg`, button_icon),
  height:   `2.25rem`,
  width:    `2.25rem`,
});

export const button_xl = tss({
  font_size: `1.25rem`,
  height:    `3rem`,
  min_width: `3rem`,
  padding:   `calc(.875rem - 1px) 1em`,
}, {
  SELECTOR: `svg`,
  height:   `1.25rem`,
  width:    `1.25rem`,
}, {
  SELECTOR: query(`@%`, button_square),
  padding:  `calc(.875rem - 1px)`,
}, {
  SELECTOR:      query(`@%`, button_pill),
  border_radius: `1.5rem`,
}, {
  SELECTOR:       query(`@%`, button_icon),
  padding_bottom: `calc(.5rem - 1px)`,
  padding_top:    `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@%%`, button_icon, button_square),
  padding:  `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@% svg`, button_icon),
  height:   `2rem`,
  width:    `2rem`,
});

export const button_l = tss({
  font_size: `1.125rem`,
  height:    `2.75rem`,
  min_width: `2.75rem`,
  padding:   `calc(.8125rem - 1px) 1em`,
}, {
  SELECTOR: `svg`,
  height:   `1.125rem`,
  width:    `1.125rem`,
}, {
  SELECTOR: query(`@%`, button_square),
  padding:  `calc(.8125rem - 1px)`,
}, {
  SELECTOR:      query(`@%`, button_pill),
  border_radius: `1.375rem`,
}, {
  SELECTOR:       query(`@%`, button_icon),
  padding_bottom: `calc(.5rem - 1px)`,
  padding_top:    `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@%%`, button_icon, button_square),
  padding:  `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@% svg`, button_icon),
  height:   `1.75rem`,
  width:    `1.75rem`,
});

export const button_s = tss({
  font_size: `.875rem`,
  height:    `2.25rem`,
  min_width: `2.25rem`,
  padding:   `calc(.6875rem - 1px) 1em`,
}, {
  SELECTOR: `svg`,
  height:   `.875rem`,
  width:    `.875rem`,
}, {
  SELECTOR: query(`@%`, button_square),
  padding:  `calc(.6875rem - 1px)`,
}, {
  SELECTOR:      query(`@%`, button_pill),
  border_radius: `1.125rem`,
}, {
  SELECTOR:       query(`@%`, button_icon),
  padding_bottom: `calc(.5rem - 1px)`,
  padding_top:    `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@%%`, button_icon, button_square),
  padding:  `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@% svg`, button_icon),
  height:   `1.25rem`,
  width:    `1.25rem`,
});

export const button_xs = tss({
  font_size: `.75rem`,
  height:    `2rem`,
  min_width: `2rem`,
  padding:   `calc(.625rem - 1px) 1em`,
}, {
  SELECTOR: `svg`,
  height:   `.75rem`,
  width:    `.75rem`,
}, {
  SELECTOR: query(`@%`, button_square),
  padding:  `calc(.625rem - 1px)`,
}, {
  SELECTOR:      query(`@%`, button_pill),
  border_radius: `1rem`,
}, {
  SELECTOR:       query(`@%`, button_icon),
  padding_bottom: `calc(.5rem - 1px)`,
  padding_top:    `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@%%`, button_icon, button_square),
  padding:  `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@% svg`, button_icon),
  height:   `1rem`,
  width:    `1rem`,
});

export const button_xxs = tss({
  font_size: `.625rem`,
  height:    `1.75rem`,
  min_width: `1.75rem`,
  padding:   `calc(.5625rem - 1px) 1em`,
}, {
  SELECTOR: `svg`,
  height:   `.625rem`,
  width:    `.625rem`,
}, {
  SELECTOR: query(`@%`, button_square),
  padding:  `calc(.5625rem - 1px)`,
}, {
  SELECTOR:      query(`@%`, button_pill),
  border_radius: `.875rem`,
}, {
  SELECTOR:       query(`@%`, button_icon),
  padding_bottom: `calc(.5rem - 1px)`,
  padding_top:    `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@%%`, button_icon, button_square),
  padding:  `calc(.5rem - 1px)`,
}, {
  SELECTOR: query(`@% svg`, button_icon),
  height:   `.75rem`,
  width:    `.75rem`,
});

export const button_white = tss({
  background:   `#fff`,
  border_color: `#fff`,
  color:        `#000`,
}, {
  SELECTOR:   query(`@%`, button_border),
  background: `transparent`,
  color:      `#fff`,
}, {
  SELECTOR:     [`=@:focus`, `=@:hover`],
  background:   `#f2f2f2`,
  border_color: `#f2f2f2`,
  color:        `#000`,
}, {
  SELECTOR:     `=@:active`,
  background:   `#e6e6e6`,
  border_color: `#e6e6e6`,
  color:        `#000`,
}, {
  SELECTOR: query(`@%`, button_text),
  color:    `#fff`,
}, {
  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],
  color:    `#f2f2f2`,
}, {
  SELECTOR: query(`@%:active`, button_text),
  color:    `#e6e6e6`,
});

export const button_light = tss({
  background:   `#d5d7dd`,
  border_color: `#d5d7dd`,
  color:        `#2e3138`,
}, {
  SELECTOR:   query(`@%`, button_border),
  background: `transparent`,
  color:      `#d5d7dd`,
}, {
  SELECTOR:     [`=@:focus`, `=@:hover`],
  background:   `#d9dbe0`,
  border_color: `#d9dbe0`,
  color:        `#2e3138`,
}, {
  SELECTOR:     `=@:active`,
  background:   `#c8ccd4`,
  border_color: `#c8ccd4`,
  color:        `#2e3138`,
}, {
  SELECTOR: query(`@%`, button_text),
  color:    `#d5d7dd`,
}, {
  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],
  color:    `#d9dbe0`,
}, {
  SELECTOR: query(`@%:active`, button_text),
  color:    `#c8ccd4`,
});

export const button_grey = tss({
  background:   `#5c6370`,
  border_color: `#5c6370`,
  color:        `#fff`,
}, {
  SELECTOR:   query(`@%`, button_border),
  background: `transparent`,
  color:      `#5c6370`,
}, {
  SELECTOR:     [`=@:focus`, `=@:hover`],
  background:   `#697181`,
  border_color: `#697181`,
  color:        `#fff`,
}, {
  SELECTOR:     `=@:active`,
  background:   `#555d6d`,
  border_color: `#555d6d`,
  color:        `#fff`,
}, {
  SELECTOR: query(`@%`, button_text),
  color:    `#5c6370`,
}, {
  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],
  color:    `#697181`,
}, {
  SELECTOR: query(`@%:active`, button_text),
  color:    `#555d6d`,
});

export const button_dark = tss({
  background:   `#2e3138`,
  border_color: `#2e3138`,
  color:        `#fff`,
}, {
  SELECTOR:   query(`@%`, button_border),
  background: `transparent`,
  color:      `#2e3138`,
}, {
  SELECTOR:     [`=@:focus`, `=@:hover`],
  background:   `#41454e`,
  border_color: `#41454e`,
  color:        `#fff`,
}, {
  SELECTOR:     `=@:active`,
  background:   `#2a2e37`,
  border_color: `#2a2e37`,
  color:        `#fff`,
}, {
  SELECTOR: query(`@%`, button_text),
  color:    `#2e3138`,
}, {
  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],
  color:    `#41454e`,
}, {
  SELECTOR: query(`@%:active`, button_text),
  color:    `#2a2e37`,
});

export const button_black = tss({
  background:   `#000`,
  border_color: `#000`,
  color:        `#fff`,
}, {
  SELECTOR:   query(`@%`, button_border),
  background: `transparent`,
  color:      `#000`,
}, {
  SELECTOR:     [`=@:focus`, `=@:hover`],
  background:   `#333`,
  border_color: `#333`,
  color:        `#fff`,
}, {
  SELECTOR:     `=@:active`,
  background:   `#1a1a1a`,
  border_color: `#1a1a1a`,
  color:        `#fff`,
}, {
  SELECTOR: query(`@%`, button_text),
  color:    `#000`,
}, {
  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],
  color:    `#333`,
}, {
  SELECTOR: query(`@%:active`, button_text),
  color:    `#1a1a1a`,
});

export const button_primary = tss({
  background:   `#195de6`,
  border_color: `#195de6`,
  color:        `#fff`,
}, {
  SELECTOR:   query(`@%`, button_border),
  background: `transparent`,
  color:      `#195de6`,
}, {
  SELECTOR:     [`=@:focus`, `=@:hover`],
  background:   `#2e6deb`,
  border_color: `#2e6deb`,
  color:        `#fff`,
}, {
  SELECTOR:     `=@:active`,
  background:   `#134fc6`,
  border_color: `#134fc6`,
  color:        `#fff`,
}, {
  SELECTOR: query(`@%`, button_text),
  color:    `#195de6`,
}, {
  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],
  color:    `#2e6deb`,
}, {
  SELECTOR: query(`@%:active`, button_text),
  color:    `#134fc6`,
});

export const button_secondary = tss({
  background:   `#7f19e6`,
  border_color: `#7f19e6`,
  color:        `#fff`,
}, {
  SELECTOR:   query(`@%`, button_border),
  background: `transparent`,
  color:      `#7f19e6`,
}, {
  SELECTOR:     [`=@:focus`, `=@:hover`],
  background:   `#8c2eeb`,
  border_color: `#8c2eeb`,
  color:        `#fff`,
}, {
  SELECTOR:     `=@:active`,
  background:   `#6c13c6`,
  border_color: `#6c13c6`,
  color:        `#fff`,
}, {
  SELECTOR: query(`@%`, button_text),
  color:    `#7f19e6`,
}, {
  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],
  color:    `#8c2eeb`,
}, {
  SELECTOR: query(`@%:active`, button_text),
  color:    `#6c13c6`,
});

export const button_tertiary = tss({
  background:   `#e619a1`,
  border_color: `#e619a1`,
  color:        `#fff`,
}, {
  SELECTOR:   query(`@%`, button_border),
  background: `transparent`,
  color:      `#e619a1`,
}, {
  SELECTOR:     [`=@:focus`, `=@:hover`],
  background:   `#eb2eac`,
  border_color: `#eb2eac`,
  color:        `#fff`,
}, {
  SELECTOR:     `=@:active`,
  background:   `#c6138a`,
  border_color: `#c6138a`,
  color:        `#fff`,
}, {
  SELECTOR: query(`@%`, button_text),
  color:    `#e619a1`,
}, {
  SELECTOR: [query(`@%:focus`, button_text), query(`@%:hover`, button_text)],
  color:    `#eb2eac`,
}, {
  SELECTOR: query(`@%:active`, button_text),
  color:    `#c6138a`,
});

export const button_group = tss({
  display: [`-webkit-box`,`-ms-flexbox`,`flex`],
}, {
  SELECTOR:         `=@>*`,
  _ms_flex:         `0 0 auto`,
  _webkit_box_flex: `0`,
  flex:             `0 0 auto`,
  position:         `relative`,
}, {
  SELECTOR: [`=@>:active`, `=@>:focus`, `=@>:hover`],
  z_index:  `2`,
}, {
  SELECTOR:      `=@>:not(:first-child):not(:last-child)`,
  border_radius: `0`,
  margin_left:   `-1px`,
}, {
  SELECTOR:                 `=@>:first-child`,
  border_bottom_right_radius: `0`,
  border_top_right_radius:  `0`,
}, {
  SELECTOR:                 `=@>:last-child`,
  border_bottom_left_radius: `0`,
  border_top_left_radius:   `0`,
  margin_left:              `-1px`,
});

export const button_group_block = tss({
  width: `100%`,
}, {
  SELECTOR:         [query(`@ %`, button), `button`],
  _ms_flex:         `1 1 auto`,
  _webkit_box_flex: `1`,
  flex:             `1 1 auto`,
});

export const media_cover = tss({
  bottom:   `0`,
  left:     `0`,
  position: `absolute`,
  right:    `0`,
  top:      `0`,
}, {
  SELECTOR: `=@>div`,
  height:   `100%`,
  width:    `100%`,
}, {
  SELECTOR:      [`img`, `video`],
  _o_object_fit: `cover`,
  height:        `100%`,
  object_fit:    `cover`,
  width:         `100%`,
});

export const media_1 = tss({
  padding_top: `100%`,
});

export const media_1_2 = tss({
  padding_top: `200%`,
});

export const media_9_16 = tss({
  padding_top: `177.77778%`,
});

export const media_9_14 = tss({
  padding_top: `155.55556%`,
});

export const media_2_3 = tss({
  padding_top: `150%`,
});

export const media_3_4 = tss({
  padding_top: `133.33333%`,
});

export const media_4_5 = tss({
  padding_top: `125%`,
});

export const media_4_3 = tss({
  padding_top: `75%`,
});

export const media_3_2 = tss({
  padding_top: `66.66667%`,
});

export const media_5_4 = tss({
  padding_top: `80%`,
});

export const media_16_9 = tss({
  padding_top: `56.25%`,
});

export const media_2_1 = tss({
  padding_top: `50%`,
});

export const nav = tss(join({  SELECTOR: `ul`,}, tssCommon__57), join({  SELECTOR: `li`,}, tssCommon__58));

export const nav_inline = tss({
  SELECTOR: `li`,
  display:  `inline-block`,
  margin:   `0 1rem`,
});

export const spinner_xxl = tss({
  SELECTOR:    `=@:before`,
  height:      `2.5rem`,
  margin_left: `-1.25rem`,
  margin_top:  `-1.25rem`,
  width:       `2.5rem`,
});

export const spinner_xl = tss({
  SELECTOR:    `=@:before`,
  height:      `2.25rem`,
  margin_left: `-1.125rem`,
  margin_top:  `-1.125rem`,
  width:       `2.25rem`,
});

export const spinner_l = tss({
  SELECTOR:    `=@:before`,
  height:      `2rem`,
  margin_left: `-1rem`,
  margin_top:  `-1rem`,
  width:       `2rem`,
});

export const spinner_s = tss({
  SELECTOR:    `=@:before`,
  height:      `1.5rem`,
  margin_left: `-.75rem`,
  margin_top:  `-.75rem`,
  width:       `1.5rem`,
});

export const spinner_xs = tss({
  SELECTOR:    `=@:before`,
  height:      `1.25rem`,
  margin_left: `-.625rem`,
  margin_top:  `-.625rem`,
  width:       `1.25rem`,
});

export const spinner_xxs = tss({
  SELECTOR:    `=@:before`,
  height:      `1rem`,
  margin_left: `-.5rem`,
  margin_top:  `-.5rem`,
  width:       `1rem`,
});

export const background_repeat = tss({
  background_repeat: `repeat`,
});

export const background_no_repeat = tss({
  background_repeat: `no-repeat`,
});

export const background_fixed = tss({
  background_attachment: `fixed`,
});

export const background_cover = tss({
  background_size: `cover`,
});

export const background_center = tss({
  background_position: `50%`,
});

export const background_transparent = tss({
  background: `transparent`,
});

export const background_current_color = tss({
  background_color: `currentColor`,
});

export const background_inherit = tss({
  background_color: `inherit`,
});

export const background = tss(tssCommon__59);

export const background_white = tss(tssCommon__59);

export const background_black = tss({
  background_color: `#000`,
});

export const background_light = tss({
  background_color: `#d5d7dd`,
});

export const background_light_50 = tss({
  background_color: `#f8f9fa`,
});

export const background_light_100 = tss({
  background_color: `#f2f3f5`,
});

export const background_light_200 = tss({
  background_color: `#e9ebee`,
});

export const background_light_300 = tss({
  background_color: `#e0e2e7`,
});

export const background_light_400 = tss({
  background_color: `#d9dbe0`,
});

export const background_light_500 = tss({
  background_color: `#d5d7dd`,
});

export const background_light_600 = tss({
  background_color: `#c8ccd4`,
});

export const background_light_700 = tss({
  background_color: `#b0b6c2`,
});

export const background_light_800 = tss({
  background_color: `#9199aa`,
});

export const background_light_900 = tss({
  background_color: `#6e798e`,
});

export const background_grey = tss({
  background_color: `#5c6370`,
});

export const background_grey_50 = tss({
  background_color: `#c5cbd7`,
});

export const background_grey_100 = tss({
  background_color: `#adb5c4`,
});

export const background_grey_200 = tss({
  background_color: `#949dae`,
});

export const background_grey_300 = tss({
  background_color: `#7d8697`,
});

export const background_grey_400 = tss({
  background_color: `#697181`,
});

export const background_grey_500 = tss({
  background_color: `#5c6370`,
});

export const background_grey_600 = tss({
  background_color: `#555d6d`,
});

export const background_grey_700 = tss({
  background_color: `#4a5364`,
});

export const background_grey_800 = tss({
  background_color: `#3d4657`,
});

export const background_grey_900 = tss({
  background_color: `#2f3747`,
});

export const background_dark = tss({
  background_color: `#2e3138`,
});

export const background_dark_50 = tss({
  background_color: `#b5bbc6`,
});

export const background_dark_100 = tss({
  background_color: `#989eab`,
});

export const background_dark_200 = tss({
  background_color: `#797f8c`,
});

export const background_dark_300 = tss({
  background_color: `#5b606b`,
});

export const background_dark_400 = tss({
  background_color: `#41454e`,
});

export const background_dark_500 = tss({
  background_color: `#2e3138`,
});

export const background_dark_600 = tss({
  background_color: `#2a2e37`,
});

export const background_dark_700 = tss({
  background_color: `#252932`,
});

export const background_dark_800 = tss({
  background_color: `#1f232c`,
});

export const background_dark_900 = tss({
  background_color: `#181c24`,
});

export const background_primary = tss({
  background_color: `#195de6`,
});

export const background_primary_50 = tss({
  background_color: `#e1ebfe`,
});

export const background_primary_100 = tss({
  background_color: `#b6cdfb`,
});

export const background_primary_200 = tss({
  background_color: `#87acf7`,
});

export const background_primary_300 = tss({
  background_color: `#5589f1`,
});

export const background_primary_400 = tss({
  background_color: `#2e6deb`,
});

export const background_primary_500 = tss({
  background_color: `#195de6`,
});

export const background_primary_600 = tss({
  background_color: `#134fc6`,
});

export const background_primary_700 = tss({
  background_color: `#0d3ea0`,
});

export const background_primary_800 = tss({
  background_color: `#082e7a`,
});

export const background_primary_900 = tss({
  background_color: `#052056`,
});

export const background_secondary = tss({
  background_color: `#7f19e6`,
});

export const background_secondary_50 = tss({
  background_color: `#f2e6fe`,
});

export const background_secondary_100 = tss({
  background_color: `#dfc2fc`,
});

export const background_secondary_200 = tss({
  background_color: `#bf87f7`,
});

export const background_secondary_300 = tss({
  background_color: `#a355f1`,
});

export const background_secondary_400 = tss({
  background_color: `#8c2eeb`,
});

export const background_secondary_500 = tss({
  background_color: `#7f19e6`,
});

export const background_secondary_600 = tss({
  background_color: `#6c13c6`,
});

export const background_secondary_700 = tss({
  background_color: `#570da0`,
});

export const background_secondary_800 = tss({
  background_color: `#41087a`,
});

export const background_secondary_900 = tss({
  background_color: `#2e0556`,
});

export const background_tertiary = tss({
  background_color: `#e619a1`,
});

export const background_tertiary_50 = tss({
  background_color: `#fee6f6`,
});

export const background_tertiary_100 = tss({
  background_color: `#fcc2e9`,
});

export const background_tertiary_200 = tss({
  background_color: `#f787d1`,
});

export const background_tertiary_300 = tss({
  background_color: `#f155bd`,
});

export const background_tertiary_400 = tss({
  background_color: `#eb2eac`,
});

export const background_tertiary_500 = tss({
  background_color: `#e619a1`,
});

export const background_tertiary_600 = tss({
  background_color: `#c6138a`,
});

export const background_tertiary_700 = tss({
  background_color: `#a00d6f`,
});

export const background_tertiary_800 = tss({
  background_color: `#7a0854`,
});

export const background_tertiary_900 = tss({
  background_color: `#56053b`,
});

export const background_error = tss({
  background_color: `#c00`,
});

export const background_error_50 = tss({
  background_color: `#fce3e3`,
});

export const background_error_100 = tss({
  background_color: `#f6bbbb`,
});

export const background_error_200 = tss({
  background_color: `#eb7979`,
});

export const background_error_300 = tss({
  background_color: `#df4242`,
});

export const background_error_400 = tss({
  background_color: `#d41717`,
});

export const background_error_500 = tss({
  background_color: `#c00`,
});

export const background_error_600 = tss({
  background_color: `#ad0000`,
});

export const background_error_700 = tss({
  background_color: `#8b0000`,
});

export const background_error_800 = tss({
  background_color: `#680000`,
});

export const background_error_900 = tss({
  background_color: `#490000`,
});

export const background_warning = tss({
  background_color: `#f50`,
});

export const background_warning_50 = tss({
  background_color: `#ffeee5`,
});

export const background_warning_100 = tss({
  background_color: `#ffd4bf`,
});

export const background_warning_200 = tss({
  background_color: `#ffa97e`,
});

export const background_warning_300 = tss({
  background_color: `#ff8547`,
});

export const background_warning_400 = tss({
  background_color: `#ff661a`,
});

export const background_warning_500 = tss({
  background_color: `#f50`,
});

export const background_warning_600 = tss({
  background_color: `#d94800`,
});

export const background_warning_700 = tss({
  background_color: `#ad3a00`,
});

export const background_warning_800 = tss({
  background_color: `#822b00`,
});

export const background_warning_900 = tss({
  background_color: `#5b1e00`,
});

export const background_success = tss({
  background_color: `#00b300`,
});

export const background_success_50 = tss({
  background_color: `#e3f9e3`,
});

export const background_success_100 = tss({
  background_color: `#bbf0bb`,
});

export const background_success_200 = tss({
  background_color: `#79de79`,
});

export const background_success_300 = tss({
  background_color: `#42cd42`,
});

export const background_success_400 = tss({
  background_color: `#17bd17`,
});

export const background_success_500 = tss({
  background_color: `#00b300`,
});

export const background_success_600 = tss({
  background_color: `#009800`,
});

export const background_success_700 = tss({
  background_color: `#007900`,
});

export const background_success_800 = tss({
  background_color: `#005b00`,
});

export const background_success_900 = tss({
  background_color: `#004000`,
});

export const background_info = tss({
  background_color: `#08c`,
});

export const background_info_50 = tss({
  background_color: `#e3f4fc`,
});

export const background_info_100 = tss({
  background_color: `#bbe2f6`,
});

export const background_info_200 = tss({
  background_color: `#79c5eb`,
});

export const background_info_300 = tss({
  background_color: `#42abdf`,
});

export const background_info_400 = tss({
  background_color: `#1795d4`,
});

export const background_info_500 = tss({
  background_color: `#08c`,
});

export const background_info_600 = tss({
  background_color: `#0074ad`,
});

export const background_info_700 = tss({
  background_color: `#005c8b`,
});

export const background_info_800 = tss({
  background_color: `#004568`,
});

export const background_info_900 = tss({
  background_color: `#003149`,
});

export const border_radius_none = tss(tssCommon__60);

export const no_border_radius = tss(tssCommon__60);

export const border_radius = tss({
  border_radius: `.25em`,
});

export const border_radius_top = tss({
  border_top_left_radius:  `.25em`,
  border_top_right_radius: `.25em`,
});

export const border_radius_right = tss({
  border_bottom_right_radius: `.25em`,
  border_top_right_radius:  `.25em`,
});

export const border_radius_bottom = tss({
  border_bottom_left_radius: `.25em`,
  border_bottom_right_radius: `.25em`,
});

export const border_radius_left = tss({
  border_bottom_left_radius: `.25em`,
}, tssCommon__61);

export const border_radius_top_left = tss(tssCommon__61);

export const border_radius_top_right = tss({
  border_top_right_radius: `.25em`,
});

export const border_radius_bottom_left = tss({
  border_bottom_left_radius: `.25em`,
});

export const border_radius_bottom_right = tss({
  border_bottom_right_radius: `.25em`,
});

export const no_border = tss({
  border: `none!important`,
});

export const border = tss({
  border: `1px solid #d5d7dd`,
});

export const border_vertical = tss({
  border_bottom: `1px solid #d5d7dd`,
  border_top:    `1px solid #d5d7dd`,
});

export const border_horizontal = tss({
  border_left:  `1px solid #d5d7dd`,
  border_right: `1px solid #d5d7dd`,
});

export const border_top = tss({
  border_top: `1px solid #d5d7dd`,
});

export const border_right = tss({
  border_right: `1px solid #d5d7dd`,
});

export const border_bottom = tss({
  border_bottom: `1px solid #d5d7dd`,
});

export const border_left = tss({
  border_left: `1px solid #d5d7dd`,
});

export const border_color_current_color = tss({
  border_color: `currentColor`,
});

export const border_color_inherit = tss({
  border_color: `inherit`,
});

export const border_color_white = tss({
  border_color: `#fff`,
});

export const border_color_black = tss({
  border_color: `#000`,
});

export const border_color_light = tss({
  border_color: `#d5d7dd`,
});

export const border_color_light_50 = tss({
  border_color: `#f8f9fa`,
});

export const border_color_light_100 = tss({
  border_color: `#f2f3f5`,
});

export const border_color_light_200 = tss({
  border_color: `#e9ebee`,
});

export const border_color_light_300 = tss({
  border_color: `#e0e2e7`,
});

export const border_color_light_400 = tss({
  border_color: `#d9dbe0`,
});

export const border_color_light_500 = tss({
  border_color: `#d5d7dd`,
});

export const border_color_light_600 = tss({
  border_color: `#c8ccd4`,
});

export const border_color_light_700 = tss({
  border_color: `#b0b6c2`,
});

export const border_color_light_800 = tss({
  border_color: `#9199aa`,
});

export const border_color_light_900 = tss({
  border_color: `#6e798e`,
});

export const border_color_grey = tss({
  border_color: `#5c6370`,
});

export const border_color_grey_50 = tss({
  border_color: `#c5cbd7`,
});

export const border_color_grey_100 = tss({
  border_color: `#adb5c4`,
});

export const border_color_grey_200 = tss({
  border_color: `#949dae`,
});

export const border_color_grey_300 = tss({
  border_color: `#7d8697`,
});

export const border_color_grey_400 = tss({
  border_color: `#697181`,
});

export const border_color_grey_500 = tss({
  border_color: `#5c6370`,
});

export const border_color_grey_600 = tss({
  border_color: `#555d6d`,
});

export const border_color_grey_700 = tss({
  border_color: `#4a5364`,
});

export const border_color_grey_800 = tss({
  border_color: `#3d4657`,
});

export const border_color_grey_900 = tss({
  border_color: `#2f3747`,
});

export const border_color_dark = tss({
  border_color: `#2e3138`,
});

export const border_color_dark_50 = tss({
  border_color: `#b5bbc6`,
});

export const border_color_dark_100 = tss({
  border_color: `#989eab`,
});

export const border_color_dark_200 = tss({
  border_color: `#797f8c`,
});

export const border_color_dark_300 = tss({
  border_color: `#5b606b`,
});

export const border_color_dark_400 = tss({
  border_color: `#41454e`,
});

export const border_color_dark_500 = tss({
  border_color: `#2e3138`,
});

export const border_color_dark_600 = tss({
  border_color: `#2a2e37`,
});

export const border_color_dark_700 = tss({
  border_color: `#252932`,
});

export const border_color_dark_800 = tss({
  border_color: `#1f232c`,
});

export const border_color_dark_900 = tss({
  border_color: `#181c24`,
});

export const border_color_primary = tss({
  border_color: `#195de6`,
});

export const border_color_primary_50 = tss({
  border_color: `#e1ebfe`,
});

export const border_color_primary_100 = tss({
  border_color: `#b6cdfb`,
});

export const border_color_primary_200 = tss({
  border_color: `#87acf7`,
});

export const border_color_primary_300 = tss({
  border_color: `#5589f1`,
});

export const border_color_primary_400 = tss({
  border_color: `#2e6deb`,
});

export const border_color_primary_500 = tss({
  border_color: `#195de6`,
});

export const border_color_primary_600 = tss({
  border_color: `#134fc6`,
});

export const border_color_primary_700 = tss({
  border_color: `#0d3ea0`,
});

export const border_color_primary_800 = tss({
  border_color: `#082e7a`,
});

export const border_color_primary_900 = tss({
  border_color: `#052056`,
});

export const border_color_secondary = tss({
  border_color: `#7f19e6`,
});

export const border_color_secondary_50 = tss({
  border_color: `#f2e6fe`,
});

export const border_color_secondary_100 = tss({
  border_color: `#dfc2fc`,
});

export const border_color_secondary_200 = tss({
  border_color: `#bf87f7`,
});

export const border_color_secondary_300 = tss({
  border_color: `#a355f1`,
});

export const border_color_secondary_400 = tss({
  border_color: `#8c2eeb`,
});

export const border_color_secondary_500 = tss({
  border_color: `#7f19e6`,
});

export const border_color_secondary_600 = tss({
  border_color: `#6c13c6`,
});

export const border_color_secondary_700 = tss({
  border_color: `#570da0`,
});

export const border_color_secondary_800 = tss({
  border_color: `#41087a`,
});

export const border_color_secondary_900 = tss({
  border_color: `#2e0556`,
});

export const border_color_tertiary = tss({
  border_color: `#e619a1`,
});

export const border_color_tertiary_50 = tss({
  border_color: `#fee6f6`,
});

export const border_color_tertiary_100 = tss({
  border_color: `#fcc2e9`,
});

export const border_color_tertiary_200 = tss({
  border_color: `#f787d1`,
});

export const border_color_tertiary_300 = tss({
  border_color: `#f155bd`,
});

export const border_color_tertiary_400 = tss({
  border_color: `#eb2eac`,
});

export const border_color_tertiary_500 = tss({
  border_color: `#e619a1`,
});

export const border_color_tertiary_600 = tss({
  border_color: `#c6138a`,
});

export const border_color_tertiary_700 = tss({
  border_color: `#a00d6f`,
});

export const border_color_tertiary_800 = tss({
  border_color: `#7a0854`,
});

export const border_color_tertiary_900 = tss({
  border_color: `#56053b`,
});

export const border_color_error = tss({
  border_color: `#c00`,
});

export const border_color_error_50 = tss({
  border_color: `#fce3e3`,
});

export const border_color_error_100 = tss({
  border_color: `#f6bbbb`,
});

export const border_color_error_200 = tss({
  border_color: `#eb7979`,
});

export const border_color_error_300 = tss({
  border_color: `#df4242`,
});

export const border_color_error_400 = tss({
  border_color: `#d41717`,
});

export const border_color_error_500 = tss({
  border_color: `#c00`,
});

export const border_color_error_600 = tss({
  border_color: `#ad0000`,
});

export const border_color_error_700 = tss({
  border_color: `#8b0000`,
});

export const border_color_error_800 = tss({
  border_color: `#680000`,
});

export const border_color_error_900 = tss({
  border_color: `#490000`,
});

export const border_color_warning = tss({
  border_color: `#f50`,
});

export const border_color_warning_50 = tss({
  border_color: `#ffeee5`,
});

export const border_color_warning_100 = tss({
  border_color: `#ffd4bf`,
});

export const border_color_warning_200 = tss({
  border_color: `#ffa97e`,
});

export const border_color_warning_300 = tss({
  border_color: `#ff8547`,
});

export const border_color_warning_400 = tss({
  border_color: `#ff661a`,
});

export const border_color_warning_500 = tss({
  border_color: `#f50`,
});

export const border_color_warning_600 = tss({
  border_color: `#d94800`,
});

export const border_color_warning_700 = tss({
  border_color: `#ad3a00`,
});

export const border_color_warning_800 = tss({
  border_color: `#822b00`,
});

export const border_color_warning_900 = tss({
  border_color: `#5b1e00`,
});

export const border_color_success = tss({
  border_color: `#00b300`,
});

export const border_color_success_50 = tss({
  border_color: `#e3f9e3`,
});

export const border_color_success_100 = tss({
  border_color: `#bbf0bb`,
});

export const border_color_success_200 = tss({
  border_color: `#79de79`,
});

export const border_color_success_300 = tss({
  border_color: `#42cd42`,
});

export const border_color_success_400 = tss({
  border_color: `#17bd17`,
});

export const border_color_success_500 = tss({
  border_color: `#00b300`,
});

export const border_color_success_600 = tss({
  border_color: `#009800`,
});

export const border_color_success_700 = tss({
  border_color: `#007900`,
});

export const border_color_success_800 = tss({
  border_color: `#005b00`,
});

export const border_color_success_900 = tss({
  border_color: `#004000`,
});

export const border_color_info = tss({
  border_color: `#08c`,
});

export const border_color_info_50 = tss({
  border_color: `#e3f4fc`,
});

export const border_color_info_100 = tss({
  border_color: `#bbe2f6`,
});

export const border_color_info_200 = tss({
  border_color: `#79c5eb`,
});

export const border_color_info_300 = tss({
  border_color: `#42abdf`,
});

export const border_color_info_400 = tss({
  border_color: `#1795d4`,
});

export const border_color_info_500 = tss({
  border_color: `#08c`,
});

export const border_color_info_600 = tss({
  border_color: `#0074ad`,
});

export const border_color_info_700 = tss({
  border_color: `#005c8b`,
});

export const border_color_info_800 = tss({
  border_color: `#004568`,
});

export const border_color_info_900 = tss({
  border_color: `#003149`,
});

export const box_shadow_xxl = tss({
  _webkit_box_shadow: `0 1px 10px 1px rgba(46,49,56,.1)`,
  box_shadow:         `0 1px 10px 1px rgba(46,49,56,.1)`,
});

export const box_shadow_xl = tss({
  _webkit_box_shadow: `0 1px 8px 1px rgba(46,49,56,.1)`,
  box_shadow:         `0 1px 8px 1px rgba(46,49,56,.1)`,
});

export const box_shadow_l = tss({
  _webkit_box_shadow: `0 1px 6px 1px rgba(46,49,56,.1)`,
  box_shadow:         `0 1px 6px 1px rgba(46,49,56,.1)`,
});

export const box_shadow_m = tss({
  _webkit_box_shadow: `0 1px 4px 1px rgba(46,49,56,.1)`,
  box_shadow:         `0 1px 4px 1px rgba(46,49,56,.1)`,
});

export const box_shadow_s = tss({
  _webkit_box_shadow: `0 1px 2px 1px rgba(46,49,56,.1)`,
  box_shadow:         `0 1px 2px 1px rgba(46,49,56,.1)`,
});

export const box_shadow_xs = tss({
  _webkit_box_shadow: `0 1px 1px 1px rgba(46,49,56,.1)`,
  box_shadow:         `0 1px 1px 1px rgba(46,49,56,.1)`,
});

export const box_shadow_xxs = tss({
  _webkit_box_shadow: `0 0 1px rgba(46,49,56,.1)`,
  box_shadow:         `0 0 1px rgba(46,49,56,.1)`,
});

export const box_shadow = tss({
  _webkit_box_shadow: `none`,
  box_shadow:         `none`,
});

export const current_color = tss({
  color: `currentColor`,
});

export const color_inherit = tss({
  color: `inherit`,
});

export const color = tss({
  color: `#2e3138`,
});

export const color_white = tss({
  color: `#fff`,
});

export const color_black = tss({
  color: `#000`,
});

export const color_light = tss({
  color: `#d5d7dd`,
});

export const color_light_50 = tss({
  color: `#f8f9fa`,
});

export const color_light_100 = tss({
  color: `#f2f3f5`,
});

export const color_light_200 = tss({
  color: `#e9ebee`,
});

export const color_light_300 = tss({
  color: `#e0e2e7`,
});

export const color_light_400 = tss({
  color: `#d9dbe0`,
});

export const color_light_500 = tss({
  color: `#d5d7dd`,
});

export const color_light_600 = tss({
  color: `#c8ccd4`,
});

export const color_light_700 = tss({
  color: `#b0b6c2`,
});

export const color_light_800 = tss({
  color: `#9199aa`,
});

export const color_light_900 = tss({
  color: `#6e798e`,
});

export const color_grey = tss({
  color: `#5c6370`,
});

export const color_grey_50 = tss({
  color: `#c5cbd7`,
});

export const color_grey_100 = tss({
  color: `#adb5c4`,
});

export const color_grey_200 = tss({
  color: `#949dae`,
});

export const color_grey_300 = tss({
  color: `#7d8697`,
});

export const color_grey_400 = tss({
  color: `#697181`,
});

export const color_grey_500 = tss({
  color: `#5c6370`,
});

export const color_grey_600 = tss({
  color: `#555d6d`,
});

export const color_grey_700 = tss({
  color: `#4a5364`,
});

export const color_grey_800 = tss({
  color: `#3d4657`,
});

export const color_grey_900 = tss({
  color: `#2f3747`,
});

export const color_dark = tss({
  color: `#2e3138`,
});

export const color_dark_50 = tss({
  color: `#b5bbc6`,
});

export const color_dark_100 = tss({
  color: `#989eab`,
});

export const color_dark_200 = tss({
  color: `#797f8c`,
});

export const color_dark_300 = tss({
  color: `#5b606b`,
});

export const color_dark_400 = tss({
  color: `#41454e`,
});

export const color_dark_500 = tss({
  color: `#2e3138`,
});

export const color_dark_600 = tss({
  color: `#2a2e37`,
});

export const color_dark_700 = tss({
  color: `#252932`,
});

export const color_dark_800 = tss({
  color: `#1f232c`,
});

export const color_dark_900 = tss({
  color: `#181c24`,
});

export const color_primary = tss({
  color: `#195de6`,
});

export const color_primary_50 = tss({
  color: `#e1ebfe`,
});

export const color_primary_100 = tss({
  color: `#b6cdfb`,
});

export const color_primary_200 = tss({
  color: `#87acf7`,
});

export const color_primary_300 = tss({
  color: `#5589f1`,
});

export const color_primary_400 = tss({
  color: `#2e6deb`,
});

export const color_primary_500 = tss({
  color: `#195de6`,
});

export const color_primary_600 = tss({
  color: `#134fc6`,
});

export const color_primary_700 = tss({
  color: `#0d3ea0`,
});

export const color_primary_800 = tss({
  color: `#082e7a`,
});

export const color_primary_900 = tss({
  color: `#052056`,
});

export const color_secondary = tss({
  color: `#7f19e6`,
});

export const color_secondary_50 = tss({
  color: `#f2e6fe`,
});

export const color_secondary_100 = tss({
  color: `#dfc2fc`,
});

export const color_secondary_200 = tss({
  color: `#bf87f7`,
});

export const color_secondary_300 = tss({
  color: `#a355f1`,
});

export const color_secondary_400 = tss({
  color: `#8c2eeb`,
});

export const color_secondary_500 = tss({
  color: `#7f19e6`,
});

export const color_secondary_600 = tss({
  color: `#6c13c6`,
});

export const color_secondary_700 = tss({
  color: `#570da0`,
});

export const color_secondary_800 = tss({
  color: `#41087a`,
});

export const color_secondary_900 = tss({
  color: `#2e0556`,
});

export const color_tertiary = tss({
  color: `#e619a1`,
});

export const color_tertiary_50 = tss({
  color: `#fee6f6`,
});

export const color_tertiary_100 = tss({
  color: `#fcc2e9`,
});

export const color_tertiary_200 = tss({
  color: `#f787d1`,
});

export const color_tertiary_300 = tss({
  color: `#f155bd`,
});

export const color_tertiary_400 = tss({
  color: `#eb2eac`,
});

export const color_tertiary_500 = tss({
  color: `#e619a1`,
});

export const color_tertiary_600 = tss({
  color: `#c6138a`,
});

export const color_tertiary_700 = tss({
  color: `#a00d6f`,
});

export const color_tertiary_800 = tss({
  color: `#7a0854`,
});

export const color_tertiary_900 = tss({
  color: `#56053b`,
});

export const color_error = tss({
  color: `#c00`,
});

export const color_error_50 = tss({
  color: `#fce3e3`,
});

export const color_error_100 = tss({
  color: `#f6bbbb`,
});

export const color_error_200 = tss({
  color: `#eb7979`,
});

export const color_error_300 = tss({
  color: `#df4242`,
});

export const color_error_400 = tss({
  color: `#d41717`,
});

export const color_error_500 = tss({
  color: `#c00`,
});

export const color_error_600 = tss({
  color: `#ad0000`,
});

export const color_error_700 = tss({
  color: `#8b0000`,
});

export const color_error_800 = tss({
  color: `#680000`,
});

export const color_error_900 = tss({
  color: `#490000`,
});

export const color_warning = tss({
  color: `#f50`,
});

export const color_warning_50 = tss({
  color: `#ffeee5`,
});

export const color_warning_100 = tss({
  color: `#ffd4bf`,
});

export const color_warning_200 = tss({
  color: `#ffa97e`,
});

export const color_warning_300 = tss({
  color: `#ff8547`,
});

export const color_warning_400 = tss({
  color: `#ff661a`,
});

export const color_warning_500 = tss({
  color: `#f50`,
});

export const color_warning_600 = tss({
  color: `#d94800`,
});

export const color_warning_700 = tss({
  color: `#ad3a00`,
});

export const color_warning_800 = tss({
  color: `#822b00`,
});

export const color_warning_900 = tss({
  color: `#5b1e00`,
});

export const color_success = tss({
  color: `#00b300`,
});

export const color_success_50 = tss({
  color: `#e3f9e3`,
});

export const color_success_100 = tss({
  color: `#bbf0bb`,
});

export const color_success_200 = tss({
  color: `#79de79`,
});

export const color_success_300 = tss({
  color: `#42cd42`,
});

export const color_success_400 = tss({
  color: `#17bd17`,
});

export const color_success_500 = tss({
  color: `#00b300`,
});

export const color_success_600 = tss({
  color: `#009800`,
});

export const color_success_700 = tss({
  color: `#007900`,
});

export const color_success_800 = tss({
  color: `#005b00`,
});

export const color_success_900 = tss({
  color: `#004000`,
});

export const color_info = tss({
  color: `#08c`,
});

export const color_info_50 = tss({
  color: `#e3f4fc`,
});

export const color_info_100 = tss({
  color: `#bbe2f6`,
});

export const color_info_200 = tss({
  color: `#79c5eb`,
});

export const color_info_300 = tss({
  color: `#42abdf`,
});

export const color_info_400 = tss({
  color: `#1795d4`,
});

export const color_info_500 = tss({
  color: `#08c`,
});

export const color_info_600 = tss({
  color: `#0074ad`,
});

export const color_info_700 = tss({
  color: `#005c8b`,
});

export const color_info_800 = tss({
  color: `#004568`,
});

export const color_info_900 = tss({
  color: `#003149`,
});

export const cursor_auto = tss({
  cursor: `auto`,
});

export const cursor_default = tss({
  cursor: `default`,
});

export const cursor_none = tss({
  cursor: `none`,
});

export const cursor_context_menu = tss({
  cursor: `context-menu`,
});

export const cursor_help = tss({
  cursor: `help`,
});

export const cursor_pointer = tss({
  cursor: `pointer`,
});

export const cursor_progress = tss({
  cursor: `progress`,
});

export const cursor_wait = tss({
  cursor: `wait`,
});

export const cursor_cell = tss({
  cursor: `cell`,
});

export const cursor_crosshair = tss({
  cursor: `crosshair`,
});

export const cursor_text = tss({
  cursor: `text`,
});

export const cursor_vertical_text = tss({
  cursor: `vertical-text`,
});

export const cursor_alias = tss({
  cursor: `alias`,
});

export const cursor_copy = tss({
  cursor: `copy`,
});

export const cursor_move = tss({
  cursor: `move`,
});

export const cursor_no_drop = tss({
  cursor: `no-drop`,
});

export const cursor_not_allowed = tss({
  cursor: `not-allowed`,
});

export const cursor_e_resize = tss({
  cursor: `e-resize`,
});

export const cursor_n_resize = tss({
  cursor: `n-resize`,
});

export const cursor_ne_resize = tss({
  cursor: `ne-resize`,
});

export const cursor_nw_resize = tss({
  cursor: `nw-resize`,
});

export const cursor_s_resize = tss({
  cursor: `s-resize`,
});

export const cursor_se_resize = tss({
  cursor: `se-resize`,
});

export const cursor_sw_resize = tss({
  cursor: `sw-resize`,
});

export const cursor_w_resize = tss({
  cursor: `w-resize`,
});

export const cursor_ew_resize = tss({
  cursor: `ew-resize`,
});

export const cursor_ns_resize = tss({
  cursor: `ns-resize`,
});

export const cursor_nesw_resize = tss({
  cursor: `nesw-resize`,
});

export const cursor_nwse_resize = tss({
  cursor: `nwse-resize`,
});

export const cursor_col_resize = tss({
  cursor: `col-resize`,
});

export const cursor_row_resize = tss({
  cursor: `row-resize`,
});

export const cursor_all_scroll = tss({
  cursor: `all-scroll`,
});

export const cursor_zoom_in = tss({
  cursor: [`-webkit-zoom-in`,`zoom-in`],
});

export const cursor_zoom_out = tss({
  cursor: [`-webkit-zoom-out`,`zoom-out`],
});

export const cursor_grab = tss({
  cursor: [`-webkit-grab`,`grab`],
});

export const cursor_grabbing = tss({
  cursor: [`-webkit-grabbing`,`grabbing`],
});

export const display_none = tss({
  display: `none`,
});

export const display_contents = tss({
  display: `contents`,
});

export const display_block = tss({
  display: `block`,
});

export const display_inline_block = tss({
  display: `inline-block`,
});

export const display_flex = tss({
  display: [`-webkit-box`,`-ms-flexbox`,`flex`],
});

export const display_inline_flex = tss({
  display: [`-webkit-inline-box`,`-ms-inline-flexbox`,`inline-flex`],
});

export const display_grid = tss({
  display: `grid`,
});

export const display_table = tss({
  display: `table`,
});

export const display_table_cell = tss({
  display: `table-cell`,
});

export const fill_current_color = tss({
  SELECTOR: `=svg@`,
  fill:     `currentColor`,
});

export const fill_inherit = tss({
  SELECTOR: `=svg@`,
  fill:     `inherit`,
});

export const fill_white = tss({
  SELECTOR: `=svg@`,
  fill:     `#fff`,
});

export const fill_black = tss({
  SELECTOR: `=svg@`,
  fill:     `#000`,
});

export const fill_light = tss({
  SELECTOR: `=svg@`,
  fill:     `#d5d7dd`,
});

export const fill_light_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#f8f9fa`,
});

export const fill_light_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#f2f3f5`,
});

export const fill_light_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#e9ebee`,
});

export const fill_light_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#e0e2e7`,
});

export const fill_light_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#d9dbe0`,
});

export const fill_light_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#d5d7dd`,
});

export const fill_light_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#c8ccd4`,
});

export const fill_light_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#b0b6c2`,
});

export const fill_light_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#9199aa`,
});

export const fill_light_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#6e798e`,
});

export const fill_grey = tss({
  SELECTOR: `=svg@`,
  fill:     `#5c6370`,
});

export const fill_grey_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#c5cbd7`,
});

export const fill_grey_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#adb5c4`,
});

export const fill_grey_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#949dae`,
});

export const fill_grey_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#7d8697`,
});

export const fill_grey_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#697181`,
});

export const fill_grey_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#5c6370`,
});

export const fill_grey_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#555d6d`,
});

export const fill_grey_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#4a5364`,
});

export const fill_grey_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#3d4657`,
});

export const fill_grey_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#2f3747`,
});

export const fill_dark = tss({
  SELECTOR: `=svg@`,
  fill:     `#2e3138`,
});

export const fill_dark_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#b5bbc6`,
});

export const fill_dark_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#989eab`,
});

export const fill_dark_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#797f8c`,
});

export const fill_dark_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#5b606b`,
});

export const fill_dark_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#41454e`,
});

export const fill_dark_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#2e3138`,
});

export const fill_dark_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#2a2e37`,
});

export const fill_dark_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#252932`,
});

export const fill_dark_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#1f232c`,
});

export const fill_dark_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#181c24`,
});

export const fill_primary = tss({
  SELECTOR: `=svg@`,
  fill:     `#195de6`,
});

export const fill_primary_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#e1ebfe`,
});

export const fill_primary_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#b6cdfb`,
});

export const fill_primary_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#87acf7`,
});

export const fill_primary_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#5589f1`,
});

export const fill_primary_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#2e6deb`,
});

export const fill_primary_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#195de6`,
});

export const fill_primary_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#134fc6`,
});

export const fill_primary_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#0d3ea0`,
});

export const fill_primary_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#082e7a`,
});

export const fill_primary_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#052056`,
});

export const fill_secondary = tss({
  SELECTOR: `=svg@`,
  fill:     `#7f19e6`,
});

export const fill_secondary_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#f2e6fe`,
});

export const fill_secondary_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#dfc2fc`,
});

export const fill_secondary_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#bf87f7`,
});

export const fill_secondary_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#a355f1`,
});

export const fill_secondary_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#8c2eeb`,
});

export const fill_secondary_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#7f19e6`,
});

export const fill_secondary_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#6c13c6`,
});

export const fill_secondary_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#570da0`,
});

export const fill_secondary_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#41087a`,
});

export const fill_secondary_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#2e0556`,
});

export const fill_tertiary = tss({
  SELECTOR: `=svg@`,
  fill:     `#e619a1`,
});

export const fill_tertiary_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#fee6f6`,
});

export const fill_tertiary_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#fcc2e9`,
});

export const fill_tertiary_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#f787d1`,
});

export const fill_tertiary_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#f155bd`,
});

export const fill_tertiary_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#eb2eac`,
});

export const fill_tertiary_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#e619a1`,
});

export const fill_tertiary_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#c6138a`,
});

export const fill_tertiary_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#a00d6f`,
});

export const fill_tertiary_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#7a0854`,
});

export const fill_tertiary_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#56053b`,
});

export const fill_error = tss({
  SELECTOR: `=svg@`,
  fill:     `#c00`,
});

export const fill_error_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#fce3e3`,
});

export const fill_error_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#f6bbbb`,
});

export const fill_error_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#eb7979`,
});

export const fill_error_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#df4242`,
});

export const fill_error_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#d41717`,
});

export const fill_error_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#c00`,
});

export const fill_error_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#ad0000`,
});

export const fill_error_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#8b0000`,
});

export const fill_error_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#680000`,
});

export const fill_error_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#490000`,
});

export const fill_warning = tss({
  SELECTOR: `=svg@`,
  fill:     `#f50`,
});

export const fill_warning_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#ffeee5`,
});

export const fill_warning_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#ffd4bf`,
});

export const fill_warning_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#ffa97e`,
});

export const fill_warning_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#ff8547`,
});

export const fill_warning_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#ff661a`,
});

export const fill_warning_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#f50`,
});

export const fill_warning_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#d94800`,
});

export const fill_warning_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#ad3a00`,
});

export const fill_warning_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#822b00`,
});

export const fill_warning_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#5b1e00`,
});

export const fill_success = tss({
  SELECTOR: `=svg@`,
  fill:     `#00b300`,
});

export const fill_success_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#e3f9e3`,
});

export const fill_success_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#bbf0bb`,
});

export const fill_success_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#79de79`,
});

export const fill_success_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#42cd42`,
});

export const fill_success_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#17bd17`,
});

export const fill_success_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#00b300`,
});

export const fill_success_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#009800`,
});

export const fill_success_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#007900`,
});

export const fill_success_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#005b00`,
});

export const fill_success_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#004000`,
});

export const fill_info = tss({
  SELECTOR: `=svg@`,
  fill:     `#08c`,
});

export const fill_info_50 = tss({
  SELECTOR: `=svg@`,
  fill:     `#e3f4fc`,
});

export const fill_info_100 = tss({
  SELECTOR: `=svg@`,
  fill:     `#bbe2f6`,
});

export const fill_info_200 = tss({
  SELECTOR: `=svg@`,
  fill:     `#79c5eb`,
});

export const fill_info_300 = tss({
  SELECTOR: `=svg@`,
  fill:     `#42abdf`,
});

export const fill_info_400 = tss({
  SELECTOR: `=svg@`,
  fill:     `#1795d4`,
});

export const fill_info_500 = tss({
  SELECTOR: `=svg@`,
  fill:     `#08c`,
});

export const fill_info_600 = tss({
  SELECTOR: `=svg@`,
  fill:     `#0074ad`,
});

export const fill_info_700 = tss({
  SELECTOR: `=svg@`,
  fill:     `#005c8b`,
});

export const fill_info_800 = tss({
  SELECTOR: `=svg@`,
  fill:     `#004568`,
});

export const fill_info_900 = tss({
  SELECTOR: `=svg@`,
  fill:     `#003149`,
});

export const flex = tss({
  display: [`-webkit-box`,`-ms-flexbox`,`flex`],
});

export const inline_flex = tss({
  display: [`-webkit-inline-box`,`-ms-inline-flexbox`,`inline-flex`],
});

export const flex_justify = tss(tssCommon__62);

export const flex_justify_center = tss(tssCommon__62, {
  _ms_flex_align:    `center`,
  _webkit_box_align: `center`,
  align_items:       `center`,
});

export const flex_wrap = tss({
  _ms_flex_wrap: `wrap`,
  flex_wrap:     `wrap`,
});

export const flex_nowrap = tss({
  _ms_flex_wrap: `nowrap`,
  flex_wrap:     `nowrap`,
});

export const flex_row = tss({
  _ms_flex_direction: `row`,
  _webkit_box_orient: `horizontal`,
  flex_direction:     `row`,
}, tssCommon__63);

export const flex_column = tss(tssCommon__63, {
  _ms_flex_direction: `column`,
  _webkit_box_orient: `vertical`,
  flex_direction:     `column`,
});

export const flex_1 = tss({
  _ms_flex:         `1 1 0px`,
  _webkit_box_flex: `1`,
  flex:             `1 1 0px`,
});

export const flex_auto = tss({
  _ms_flex:         `auto`,
  _webkit_box_flex: `1`,
  flex:             `auto`,
});

export const flex_none = tss({
  _ms_flex:         `none`,
  _webkit_box_flex: `0`,
  flex:             `none`,
});

export const flex_1_1_auto = tss({
  _ms_flex:         `1 1 auto`,
  _webkit_box_flex: `1`,
  flex:             `1 1 auto`,
});

export const flex_1_0_auto = tss({
  _ms_flex:         `1 0 auto`,
  _webkit_box_flex: `1`,
  flex:             `1 0 auto`,
});

export const flex_0_1_auto = tss({
  _ms_flex:         `0 1 auto`,
  _webkit_box_flex: `0`,
  flex:             `0 1 auto`,
});

export const flex_0_0_auto = tss({
  _ms_flex:         `0 0 auto`,
  _webkit_box_flex: `0`,
  flex:             `0 0 auto`,
});

export const justify_content_flex_start = tss({
  _ms_flex_pack:    `start`,
  _webkit_box_pack: `start`,
  justify_content:  `flex-start`,
});

export const justify_content_flex_end = tss({
  _ms_flex_pack:    `end`,
  _webkit_box_pack: `end`,
  justify_content:  `flex-end`,
});

export const justify_content_center = tss({
  _ms_flex_pack:    `center`,
  _webkit_box_pack: `center`,
  justify_content:  `center`,
});

export const justify_content_space_between = tss({
  _ms_flex_pack:    `justify`,
  _webkit_box_pack: `justify`,
  justify_content:  `space-between`,
});

export const justify_content_space_around = tss({
  _ms_flex_pack:   `distribute`,
  justify_content: `space-around`,
});

export const align_content_flex_start = tss({
  _ms_flex_line_pack: `start`,
  align_content:      `flex-start`,
});

export const align_content_flex_end = tss({
  _ms_flex_line_pack: `end`,
  align_content:      `flex-end`,
});

export const align_content_center = tss({
  _ms_flex_line_pack: `center`,
  align_content:      `center`,
});

export const align_content_space_between = tss({
  _ms_flex_line_pack: `justify`,
  align_content:      `space-between`,
});

export const align_content_space_around = tss({
  _ms_flex_line_pack: `distribute`,
  align_content:      `space-around`,
});

export const align_content_stretch = tss({
  _ms_flex_line_pack: `stretch`,
  align_content:      `stretch`,
});

export const align_items_flex_start = tss({
  _ms_flex_align:    `start`,
  _webkit_box_align: `start`,
  align_items:       `flex-start`,
});

export const align_items_flex_end = tss({
  _ms_flex_align:    `end`,
  _webkit_box_align: `end`,
  align_items:       `flex-end`,
});

export const align_items_center = tss({
  _ms_flex_align:    `center`,
  _webkit_box_align: `center`,
  align_items:       `center`,
});

export const align_items_baseline = tss({
  _ms_flex_align:    `baseline`,
  _webkit_box_align: `baseline`,
  align_items:       `baseline`,
});

export const align_items_stretch = tss({
  _ms_flex_align:    `stretch`,
  _webkit_box_align: `stretch`,
  align_items:       `stretch`,
});

export const align_self_flex_start = tss({
  _ms_flex_item_align: `start`,
  align_self:          `flex-start`,
});

export const align_self_flex_end = tss({
  _ms_flex_item_align: `end`,
  align_self:          `flex-end`,
});

export const align_self_center = tss({
  _ms_flex_item_align: `center`,
  align_self:          `center`,
});

export const align_self_baseline = tss({
  _ms_flex_item_align: `baseline`,
  align_self:          `baseline`,
});

export const align_self_stretch = tss({
  _ms_flex_item_align: `stretch`,
  align_self:          `stretch`,
});

export const font_family = tss(tssCommon__64);

export const font_family_system = tss(tssCommon__64);

export const font_family_sans_serif = tss({
  font_family: `Helvetica Neue,Helvetica,Arial,sans-serif`,
});

export const font_family_serif = tss({
  font_family: `Georgia,Times New Roman,Times,serif`,
});

export const font_family_monospace = tss({
  font_family: `Monaco,Menlo,Consolas,Courier New,monospace`,
});

export const font_size_inherit = tss({
  font_size: `inherit`,
});

export const font_size_initial = tss({
  font_size: `medium`,
});

export const font_size_unset = tss({
  font_size: `unset`,
});

export const font_size = tss({
  font_size: `1rem`,
});

export const font_size_xxl = tss({
  font_size: `1.5rem`,
});

export const font_size_xl = tss({
  font_size: `1.25rem`,
});

export const font_size_l = tss({
  font_size: `1.125rem`,
});

export const font_size_m = tss({
  font_size: `1rem`,
});

export const font_size_s = tss({
  font_size: `.875rem`,
});

export const font_size_xs = tss({
  font_size: `.75rem`,
});

export const font_size_xxs = tss({
  font_size: `.625rem`,
});

export const font_style_inherit = tss({
  font_style: `inherit`,
});

export const font_style_initial = tss({
  font_style: `normal`,
});

export const font_style_unset = tss({
  font_style: `unset`,
});

export const font_style_normal = tss({
  font_style: `normal`,
});

export const font_style_italic = tss({
  font_style: `italic`,
});

export const font_style_oblique = tss({
  font_style: `oblique`,
});

export const font_weight_thin = tss({
  font_weight: `100`,
});

export const font_weight_extra_light = tss({
  font_weight: `200`,
});

export const font_weight_light = tss({
  font_weight: `300`,
});

export const font_weight_regular = tss({
  font_weight: `400`,
});

export const font_weight_medium = tss({
  font_weight: `500`,
});

export const font_weight_semibold = tss({
  font_weight: `600`,
});

export const font_weight_bold = tss({
  font_weight: `700`,
});

export const font_weight_extra_bold = tss({
  font_weight: `800`,
});

export const font_weight_black = tss({
  font_weight: `900`,
});

export const font_weight = tss({
  font_weight: `400`,
});

export const font_weight_100 = tss({
  font_weight: `100`,
});

export const font_weight_200 = tss({
  font_weight: `200`,
});

export const font_weight_300 = tss({
  font_weight: `300`,
});

export const font_weight_400 = tss({
  font_weight: `400`,
});

export const font_weight_500 = tss({
  font_weight: `500`,
});

export const font_weight_600 = tss({
  font_weight: `600`,
});

export const font_weight_700 = tss({
  font_weight: `700`,
});

export const font_weight_800 = tss({
  font_weight: `800`,
});

export const font_weight_900 = tss({
  font_weight: `900`,
});

export const height_100 = tss({
  height: `100%`,
});

export const icon = tss({
  SELECTOR: [`=@>svg`, `=svg@`],
  display:  `inline-block`,
  height:   `3rem`,
  width:    `3rem`,
});

export const icon_xxl = tss({
  SELECTOR: [`=@>svg`, `=svg@`],
  display:  `inline-block`,
  height:   `6rem`,
  width:    `6rem`,
});

export const icon_xl = tss({
  SELECTOR: [`=@>svg`, `=svg@`],
  display:  `inline-block`,
  height:   `5rem`,
  width:    `5rem`,
});

export const icon_l = tss({
  SELECTOR: [`=@>svg`, `=svg@`],
  display:  `inline-block`,
  height:   `4rem`,
  width:    `4rem`,
});

export const icon_m = tss({
  SELECTOR: [`=@>svg`, `=svg@`],
  display:  `inline-block`,
  height:   `3rem`,
  width:    `3rem`,
});

export const icon_s = tss({
  SELECTOR: [`=@>svg`, `=svg@`],
  display:  `inline-block`,
  height:   `2rem`,
  width:    `2rem`,
});

export const icon_xs = tss({
  SELECTOR: [`=@>svg`, `=svg@`],
  display:  `inline-block`,
  height:   `1.5rem`,
  width:    `1.5rem`,
});

export const icon_xxs = tss({
  SELECTOR: [`=@>svg`, `=svg@`],
  display:  `inline-block`,
  height:   `1rem`,
  width:    `1rem`,
});

export const letter_spacing_xxl = tss({
  letter_spacing: `.1em`,
});

export const letter_spacing_xl = tss({
  letter_spacing: `.0825em`,
});

export const letter_spacing_l = tss({
  letter_spacing: `.075em`,
});

export const letter_spacing_m = tss({
  letter_spacing: `.05em`,
});

export const letter_spacing_s = tss({
  letter_spacing: `.0375em`,
});

export const letter_spacing_xs = tss({
  letter_spacing: `.025em`,
});

export const letter_spacing_xxs = tss({
  letter_spacing: `.0125em`,
});

export const letter_spacing = tss({
  letter_spacing: `0`,
});

export const line_height_1 = tss({
  line_height: `1`,
});

export const line_height_xxl = tss({
  line_height: `2`,
});

export const line_height_xl = tss({
  line_height: `1.75`,
});

export const line_height_l = tss({
  line_height: `1.625`,
});

export const line_height_m = tss({
  line_height: `1.5`,
});

export const line_height_s = tss({
  line_height: `1.375`,
});

export const line_height_xs = tss({
  line_height: `1.25`,
});

export const line_height_xxs = tss({
  line_height: `1`,
});

export const line_height = tss({
  line_height: `1.375`,
});

export const no_margin = tss({
  margin: `0!important`,
});

export const no_margin_horizontal = tss({
  margin_left:  `0!important`,
  margin_right: `0!important`,
});

export const no_margin_vertical = tss({
  margin_bottom: `0!important`,
}, tssCommon__65);

export const no_margin_top = tss(tssCommon__65);

export const no_margin_right = tss({
  margin_right: `0!important`,
});

export const no_margin_bottom = tss({
  margin_bottom: `0!important`,
});

export const no_margin_left = tss({
  margin_left: `0!important`,
});

export const margin_vertical_1 = tss({
  margin_bottom: `1em`,
  margin_top:    `1em`,
});

export const margin_vertical_3_4 = tss({
  margin_bottom: `.75em`,
  margin_top:    `.75em`,
});

export const margin_vertical_1_2 = tss({
  margin_bottom: `.5em`,
  margin_top:    `.5em`,
});

export const margin_vertical_1_4 = tss({
  margin_bottom: `.25em`,
  margin_top:    `.25em`,
});

export const margin_auto = tss({
  margin: `auto`,
});

export const margin_horizontal_auto = tss({
  margin_left:  `auto`,
  margin_right: `auto`,
});

export const margin_vertical_auto = tss({
  margin_bottom: `auto`,
  margin_top:    `auto`,
});

export const margin_top_auto = tss({
  margin_top: `auto`,
});

export const margin_right_auto = tss({
  margin_right: `auto`,
});

export const margin_bottom_auto = tss({
  margin_bottom: `auto`,
});

export const margin_left_auto = tss({
  margin_left: `auto`,
});

export const margin_xxl = tss({
  margin: `4rem`,
});

export const margin_negative_xxl = tss({
  margin: `-4rem`,
});

export const margin_horizontal_xxl = tss({
  margin_left:  `4rem`,
  margin_right: `4rem`,
});

export const margin_vertical_xxl = tss({
  margin_bottom: `4rem`,
  margin_top:    `4rem`,
});

export const margin_top_xxl = tss({
  margin_top: `4rem`,
});

export const margin_bottom_xxl = tss({
  margin_bottom: `4rem`,
});

export const margin_left_xxl = tss({
  margin_left: `4rem`,
});

export const margin_right_xxl = tss({
  margin_right: `4rem`,
});

export const margin_xl = tss({
  margin: `3rem`,
});

export const margin_negative_xl = tss({
  margin: `-3rem`,
});

export const margin_horizontal_xl = tss({
  margin_left:  `3rem`,
  margin_right: `3rem`,
});

export const margin_vertical_xl = tss({
  margin_bottom: `3rem`,
  margin_top:    `3rem`,
});

export const margin_top_xl = tss({
  margin_top: `3rem`,
});

export const margin_bottom_xl = tss({
  margin_bottom: `3rem`,
});

export const margin_left_xl = tss({
  margin_left: `3rem`,
});

export const margin_right_xl = tss({
  margin_right: `3rem`,
});

export const margin_l = tss({
  margin: `2rem`,
});

export const margin_negative_l = tss({
  margin: `-2rem`,
});

export const margin_horizontal_l = tss({
  margin_left:  `2rem`,
  margin_right: `2rem`,
});

export const margin_vertical_l = tss({
  margin_bottom: `2rem`,
  margin_top:    `2rem`,
});

export const margin_top_l = tss({
  margin_top: `2rem`,
});

export const margin_bottom_l = tss({
  margin_bottom: `2rem`,
});

export const margin_left_l = tss({
  margin_left: `2rem`,
});

export const margin_right_l = tss({
  margin_right: `2rem`,
});

export const margin_m = tss({
  margin: `1.5rem`,
});

export const margin_negative_m = tss({
  margin: `-1.5rem`,
});

export const margin_horizontal_m = tss({
  margin_left:  `1.5rem`,
  margin_right: `1.5rem`,
});

export const margin_vertical_m = tss({
  margin_bottom: `1.5rem`,
  margin_top:    `1.5rem`,
});

export const margin_top_m = tss({
  margin_top: `1.5rem`,
});

export const margin_bottom_m = tss({
  margin_bottom: `1.5rem`,
});

export const margin_left_m = tss({
  margin_left: `1.5rem`,
});

export const margin_right_m = tss({
  margin_right: `1.5rem`,
});

export const margin_s = tss({
  margin: `1rem`,
});

export const margin_negative_s = tss({
  margin: `-1rem`,
});

export const margin_horizontal_s = tss({
  margin_left:  `1rem`,
  margin_right: `1rem`,
});

export const margin_vertical_s = tss({
  margin_bottom: `1rem`,
  margin_top:    `1rem`,
});

export const margin_top_s = tss({
  margin_top: `1rem`,
});

export const margin_bottom_s = tss({
  margin_bottom: `1rem`,
});

export const margin_left_s = tss({
  margin_left: `1rem`,
});

export const margin_right_s = tss({
  margin_right: `1rem`,
});

export const margin_xs = tss({
  margin: `.75rem`,
});

export const margin_negative_xs = tss({
  margin: `-.75rem`,
});

export const margin_horizontal_xs = tss({
  margin_left:  `.75rem`,
  margin_right: `.75rem`,
});

export const margin_vertical_xs = tss({
  margin_bottom: `.75rem`,
  margin_top:    `.75rem`,
});

export const margin_top_xs = tss({
  margin_top: `.75rem`,
});

export const margin_bottom_xs = tss({
  margin_bottom: `.75rem`,
});

export const margin_left_xs = tss({
  margin_left: `.75rem`,
});

export const margin_right_xs = tss({
  margin_right: `.75rem`,
});

export const margin_xxs = tss({
  margin: `.5rem`,
});

export const margin_negative_xxs = tss({
  margin: `-.5rem`,
});

export const margin_horizontal_xxs = tss({
  margin_left:  `.5rem`,
  margin_right: `.5rem`,
});

export const margin_vertical_xxs = tss({
  margin_bottom: `.5rem`,
  margin_top:    `.5rem`,
});

export const margin_top_xxs = tss({
  margin_top: `.5rem`,
});

export const margin_bottom_xxs = tss({
  margin_bottom: `.5rem`,
});

export const margin_left_xxs = tss({
  margin_left: `.5rem`,
});

export const margin_right_xxs = tss({
  margin_right: `.5rem`,
});

export const max_width_xxl = tss({
  max_width: `70rem`,
});

export const max_width_xl = tss({
  max_width: `60rem`,
});

export const max_width_l = tss({
  max_width: `50rem`,
});

export const max_width_m = tss({
  max_width: `40rem`,
});

export const max_width_s = tss({
  max_width: `30rem`,
});

export const max_width_xs = tss({
  max_width: `20rem`,
});

export const max_width_xxs = tss({
  max_width: `10rem`,
});

export const min_height_25vh = tss({
  min_height: `25vh`,
});

export const min_height_33vh = tss({
  min_height: `33vh`,
});

export const min_height_50vh = tss({
  min_height: `50vh`,
});

export const min_height_66vh = tss({
  min_height: `66vh`,
});

export const min_height_75vh = tss({
  min_height: `75vh`,
});

export const min_height_80vh = tss({
  min_height: `80vh`,
});

export const min_height_90vh = tss({
  min_height: `90vh`,
});

export const min_height_100vh = tss({
  min_height: `100vh`,
});

export const order_1 = tss(tssCommon__66);

export const order_first = tss(tssCommon__66);

export const order_2 = tss(tssCommon__67);

export const order_middle = tss(tssCommon__67);

export const order_3 = tss(tssCommon__68);

export const order_last = tss(tssCommon__68);

export const opacity_10 = tss({
  opacity: `.1`,
});

export const opacity_15 = tss({
  opacity: `.15`,
});

export const opacity_20 = tss({
  opacity: `.2`,
});

export const opacity_25 = tss({
  opacity: `.25`,
});

export const opacity_30 = tss({
  opacity: `.3`,
});

export const opacity_35 = tss({
  opacity: `.35`,
});

export const opacity_40 = tss({
  opacity: `.4`,
});

export const opacity_45 = tss({
  opacity: `.45`,
});

export const opacity_50 = tss({
  opacity: `.5`,
});

export const opacity_55 = tss({
  opacity: `.55`,
});

export const opacity_60 = tss({
  opacity: `.6`,
});

export const opacity_65 = tss({
  opacity: `.65`,
});

export const opacity_70 = tss({
  opacity: `.7`,
});

export const opacity_75 = tss({
  opacity: `.75`,
});

export const opacity_80 = tss({
  opacity: `.8`,
});

export const opacity_85 = tss({
  opacity: `.85`,
});

export const opacity_90 = tss({
  opacity: `.9`,
});

export const opacity_95 = tss({
  opacity: `.95`,
});

export const opacity_100 = tss({
  opacity: `1`,
});

export const overflow_auto = tss({
  overflow: `auto`,
});

export const overflow_hidden = tss({
  overflow: `hidden`,
});

export const overflow_visible = tss({
  overflow: `visible`,
});

export const overflow_scroll = tss({
  _webkit_overflow_scrolling: `touch`,
  overflow:                 `scroll`,
});

export const overflow_x_auto = tss({
  overflow_x: `auto`,
});

export const overflow_y_auto = tss({
  overflow_y: `auto`,
});

export const overflow_x_hidden = tss({
  overflow_x: `hidden`,
});

export const overflow_y_hidden = tss({
  overflow_y: `hidden`,
});

export const overflow_x_visible = tss({
  overflow_x: `visible`,
});

export const overflow_y_visible = tss({
  overflow_y: `visible`,
});

export const overflow_x_scroll = tss({
  _webkit_overflow_scrolling: `touch`,
  overflow_x:               `scroll`,
});

export const overflow_y_scroll = tss({
  _webkit_overflow_scrolling: `touch`,
  overflow_y:               `scroll`,
});

export const overflow_wrap_inherit = tss({
  word_wrap: `inherit`,
});

export const overflow_wrap_initial = tss({
  word_wrap: `normal`,
});

export const overflow_wrap_unset = tss({
  word_wrap: `unset`,
});

export const overflow_wrap_normal = tss({
  word_wrap: `normal`,
});

export const overflow_wrap_break_word = tss({
  word_wrap: `break-word`,
});

export const overflow_wrap_anywhere = tss({
  word_wrap: `anywhere`,
});

export const no_padding = tss({
  padding: `0!important`,
});

export const no_padding_horizontal = tss({
  padding_left:  `0!important`,
  padding_right: `0!important`,
});

export const no_padding_vertical = tss({
  padding_bottom: `0!important`,
}, tssCommon__69);

export const no_padding_top = tss(tssCommon__69);

export const no_padding_right = tss({
  padding_right: `0!important`,
});

export const no_padding_bottom = tss({
  padding_bottom: `0!important`,
});

export const no_padding_left = tss({
  padding_left: `0!important`,
});

export const padding_xxl = tss({
  padding: `4rem`,
});

export const padding_horizontal_xxl = tss({
  padding_left:  `4rem`,
  padding_right: `4rem`,
});

export const padding_vertical_xxl = tss({
  padding_bottom: `4rem`,
  padding_top:    `4rem`,
});

export const padding_top_xxl = tss({
  padding_top: `4rem`,
});

export const padding_bottom_xxl = tss({
  padding_bottom: `4rem`,
});

export const padding_left_xxl = tss({
  padding_left: `4rem`,
});

export const padding_right_xxl = tss({
  padding_right: `4rem`,
});

export const padding_xl = tss({
  padding: `3rem`,
});

export const padding_horizontal_xl = tss({
  padding_left:  `3rem`,
  padding_right: `3rem`,
});

export const padding_vertical_xl = tss({
  padding_bottom: `3rem`,
  padding_top:    `3rem`,
});

export const padding_top_xl = tss({
  padding_top: `3rem`,
});

export const padding_bottom_xl = tss({
  padding_bottom: `3rem`,
});

export const padding_left_xl = tss({
  padding_left: `3rem`,
});

export const padding_right_xl = tss({
  padding_right: `3rem`,
});

export const padding_l = tss({
  padding: `2rem`,
});

export const padding_horizontal_l = tss({
  padding_left:  `2rem`,
  padding_right: `2rem`,
});

export const padding_vertical_l = tss({
  padding_bottom: `2rem`,
  padding_top:    `2rem`,
});

export const padding_top_l = tss({
  padding_top: `2rem`,
});

export const padding_bottom_l = tss({
  padding_bottom: `2rem`,
});

export const padding_left_l = tss({
  padding_left: `2rem`,
});

export const padding_right_l = tss({
  padding_right: `2rem`,
});

export const padding_m = tss({
  padding: `1.5rem`,
});

export const padding_horizontal_m = tss({
  padding_left:  `1.5rem`,
  padding_right: `1.5rem`,
});

export const padding_vertical_m = tss({
  padding_bottom: `1.5rem`,
  padding_top:    `1.5rem`,
});

export const padding_top_m = tss({
  padding_top: `1.5rem`,
});

export const padding_bottom_m = tss({
  padding_bottom: `1.5rem`,
});

export const padding_left_m = tss({
  padding_left: `1.5rem`,
});

export const padding_right_m = tss({
  padding_right: `1.5rem`,
});

export const padding_s = tss({
  padding: `1rem`,
});

export const padding_horizontal_s = tss({
  padding_left:  `1rem`,
  padding_right: `1rem`,
});

export const padding_vertical_s = tss({
  padding_bottom: `1rem`,
  padding_top:    `1rem`,
});

export const padding_top_s = tss({
  padding_top: `1rem`,
});

export const padding_bottom_s = tss({
  padding_bottom: `1rem`,
});

export const padding_left_s = tss({
  padding_left: `1rem`,
});

export const padding_right_s = tss({
  padding_right: `1rem`,
});

export const padding_xs = tss({
  padding: `.75rem`,
});

export const padding_horizontal_xs = tss({
  padding_left:  `.75rem`,
  padding_right: `.75rem`,
});

export const padding_vertical_xs = tss({
  padding_bottom: `.75rem`,
  padding_top:    `.75rem`,
});

export const padding_top_xs = tss({
  padding_top: `.75rem`,
});

export const padding_bottom_xs = tss({
  padding_bottom: `.75rem`,
});

export const padding_left_xs = tss({
  padding_left: `.75rem`,
});

export const padding_right_xs = tss({
  padding_right: `.75rem`,
});

export const padding_xxs = tss({
  padding: `.5rem`,
});

export const padding_horizontal_xxs = tss({
  padding_left:  `.5rem`,
  padding_right: `.5rem`,
});

export const padding_vertical_xxs = tss({
  padding_bottom: `.5rem`,
  padding_top:    `.5rem`,
});

export const padding_top_xxs = tss({
  padding_top: `.5rem`,
});

export const padding_bottom_xxs = tss({
  padding_bottom: `.5rem`,
});

export const padding_left_xxs = tss({
  padding_left: `.5rem`,
});

export const padding_right_xxs = tss({
  padding_right: `.5rem`,
});

export const pointer_events_inherit = tss({
  pointer_events: `inherit`,
});

export const pointer_events_initial = tss({
  pointer_events: `auto`,
});

export const pointer_events_unset = tss({
  pointer_events: `unset`,
});

export const pointer_events_auto = tss({
  pointer_events: `auto`,
});

export const pointer_events_none = tss({
  pointer_events: `none`,
});

export const fixed = tss(tssCommon__70);

export const position_fixed = tss(tssCommon__70);

export const position_relative = tss(tssCommon__71);

export const relative = tss(tssCommon__71);

export const absolute = tss(tssCommon__72);

export const position_absolute = tss(tssCommon__72);

export const position_sitcky = tss(tssCommon__73);

export const sitcky = tss(tssCommon__73);

export const position_static = tss(tssCommon__74);

export const staticpos = tss(tssCommon__74);

export const position_top = tss({
  top: `0`,
});

export const position_top_left = tss({
  left: `0`,
  top:  `0`,
});

export const position_top_right = tss({
  right: `0`,
  top:   `0`,
});

export const position_right = tss({
  right: `0`,
});

export const position_bottom = tss({
  bottom: `0`,
});

export const position_bottom_left = tss({
  bottom: `0`,
  left:   `0`,
});

export const position_bottom_right = tss({
  bottom: `0`,
  right:  `0`,
});

export const position_left = tss({
  left: `0`,
});

export const space_xxl = tss({
  height: `4rem`,
  width:  `4rem`,
});

export const space_xl = tss({
  height: `3rem`,
  width:  `3rem`,
});

export const space_l = tss({
  height: `2rem`,
  width:  `2rem`,
});

export const space_m = tss({
  height: `1.5rem`,
  width:  `1.5rem`,
});

export const space_s = tss({
  height: `1rem`,
  width:  `1rem`,
});

export const space_xs = tss({
  height: `.75rem`,
  width:  `.75rem`,
});

export const space_xxs = tss({
  height: `.5rem`,
  width:  `.5rem`,
});

export const stroke_current_color = tss({
  SELECTOR: `=svg@`,
  stroke:   `currentColor`,
});

export const stroke_inherit = tss({
  SELECTOR: `=svg@`,
  stroke:   `inherit`,
});

export const stroke_white = tss({
  SELECTOR: `=svg@`,
  stroke:   `#fff`,
});

export const stroke_black = tss({
  SELECTOR: `=svg@`,
  stroke:   `#000`,
});

export const stroke_light = tss({
  SELECTOR: `=svg@`,
  stroke:   `#d5d7dd`,
});

export const stroke_light_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#f8f9fa`,
});

export const stroke_light_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#f2f3f5`,
});

export const stroke_light_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#e9ebee`,
});

export const stroke_light_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#e0e2e7`,
});

export const stroke_light_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#d9dbe0`,
});

export const stroke_light_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#d5d7dd`,
});

export const stroke_light_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#c8ccd4`,
});

export const stroke_light_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#b0b6c2`,
});

export const stroke_light_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#9199aa`,
});

export const stroke_light_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#6e798e`,
});

export const stroke_grey = tss({
  SELECTOR: `=svg@`,
  stroke:   `#5c6370`,
});

export const stroke_grey_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#c5cbd7`,
});

export const stroke_grey_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#adb5c4`,
});

export const stroke_grey_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#949dae`,
});

export const stroke_grey_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#7d8697`,
});

export const stroke_grey_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#697181`,
});

export const stroke_grey_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#5c6370`,
});

export const stroke_grey_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#555d6d`,
});

export const stroke_grey_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#4a5364`,
});

export const stroke_grey_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#3d4657`,
});

export const stroke_grey_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#2f3747`,
});

export const stroke_dark = tss({
  SELECTOR: `=svg@`,
  stroke:   `#2e3138`,
});

export const stroke_dark_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#b5bbc6`,
});

export const stroke_dark_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#989eab`,
});

export const stroke_dark_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#797f8c`,
});

export const stroke_dark_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#5b606b`,
});

export const stroke_dark_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#41454e`,
});

export const stroke_dark_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#2e3138`,
});

export const stroke_dark_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#2a2e37`,
});

export const stroke_dark_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#252932`,
});

export const stroke_dark_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#1f232c`,
});

export const stroke_dark_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#181c24`,
});

export const stroke_primary = tss({
  SELECTOR: `=svg@`,
  stroke:   `#195de6`,
});

export const stroke_primary_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#e1ebfe`,
});

export const stroke_primary_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#b6cdfb`,
});

export const stroke_primary_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#87acf7`,
});

export const stroke_primary_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#5589f1`,
});

export const stroke_primary_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#2e6deb`,
});

export const stroke_primary_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#195de6`,
});

export const stroke_primary_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#134fc6`,
});

export const stroke_primary_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#0d3ea0`,
});

export const stroke_primary_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#082e7a`,
});

export const stroke_primary_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#052056`,
});

export const stroke_secondary = tss({
  SELECTOR: `=svg@`,
  stroke:   `#7f19e6`,
});

export const stroke_secondary_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#f2e6fe`,
});

export const stroke_secondary_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#dfc2fc`,
});

export const stroke_secondary_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#bf87f7`,
});

export const stroke_secondary_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#a355f1`,
});

export const stroke_secondary_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#8c2eeb`,
});

export const stroke_secondary_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#7f19e6`,
});

export const stroke_secondary_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#6c13c6`,
});

export const stroke_secondary_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#570da0`,
});

export const stroke_secondary_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#41087a`,
});

export const stroke_secondary_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#2e0556`,
});

export const stroke_tertiary = tss({
  SELECTOR: `=svg@`,
  stroke:   `#e619a1`,
});

export const stroke_tertiary_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#fee6f6`,
});

export const stroke_tertiary_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#fcc2e9`,
});

export const stroke_tertiary_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#f787d1`,
});

export const stroke_tertiary_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#f155bd`,
});

export const stroke_tertiary_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#eb2eac`,
});

export const stroke_tertiary_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#e619a1`,
});

export const stroke_tertiary_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#c6138a`,
});

export const stroke_tertiary_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#a00d6f`,
});

export const stroke_tertiary_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#7a0854`,
});

export const stroke_tertiary_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#56053b`,
});

export const stroke_error = tss({
  SELECTOR: `=svg@`,
  stroke:   `#c00`,
});

export const stroke_error_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#fce3e3`,
});

export const stroke_error_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#f6bbbb`,
});

export const stroke_error_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#eb7979`,
});

export const stroke_error_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#df4242`,
});

export const stroke_error_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#d41717`,
});

export const stroke_error_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#c00`,
});

export const stroke_error_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#ad0000`,
});

export const stroke_error_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#8b0000`,
});

export const stroke_error_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#680000`,
});

export const stroke_error_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#490000`,
});

export const stroke_warning = tss({
  SELECTOR: `=svg@`,
  stroke:   `#f50`,
});

export const stroke_warning_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#ffeee5`,
});

export const stroke_warning_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#ffd4bf`,
});

export const stroke_warning_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#ffa97e`,
});

export const stroke_warning_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#ff8547`,
});

export const stroke_warning_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#ff661a`,
});

export const stroke_warning_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#f50`,
});

export const stroke_warning_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#d94800`,
});

export const stroke_warning_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#ad3a00`,
});

export const stroke_warning_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#822b00`,
});

export const stroke_warning_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#5b1e00`,
});

export const stroke_success = tss({
  SELECTOR: `=svg@`,
  stroke:   `#00b300`,
});

export const stroke_success_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#e3f9e3`,
});

export const stroke_success_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#bbf0bb`,
});

export const stroke_success_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#79de79`,
});

export const stroke_success_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#42cd42`,
});

export const stroke_success_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#17bd17`,
});

export const stroke_success_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#00b300`,
});

export const stroke_success_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#009800`,
});

export const stroke_success_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#007900`,
});

export const stroke_success_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#005b00`,
});

export const stroke_success_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#004000`,
});

export const stroke_info = tss({
  SELECTOR: `=svg@`,
  stroke:   `#08c`,
});

export const stroke_info_50 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#e3f4fc`,
});

export const stroke_info_100 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#bbe2f6`,
});

export const stroke_info_200 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#79c5eb`,
});

export const stroke_info_300 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#42abdf`,
});

export const stroke_info_400 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#1795d4`,
});

export const stroke_info_500 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#08c`,
});

export const stroke_info_600 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#0074ad`,
});

export const stroke_info_700 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#005c8b`,
});

export const stroke_info_800 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#004568`,
});

export const stroke_info_900 = tss({
  SELECTOR: `=svg@`,
  stroke:   `#003149`,
});

export const text_align_left = tss({
  text_align: `left`,
});

export const text_align_right = tss({
  text_align: `right`,
});

export const text_align_justify = tss({
  text_align: `justify`,
});

export const text_align_center = tss({
  text_align: `center`,
});

export const text_decoration_underline = tss({
  text_decoration: `underline`,
});

export const text_decoration_none = tss({
  text_decoration: `none`,
});

export const text_transform_none = tss({
  text_transform: `none`,
});

export const text_transform_capitalize = tss({
  text_transform: `capitalize`,
});

export const text_transform_uppercase = tss({
  text_transform: `uppercase`,
});

export const text_transform_lowercase = tss({
  text_transform: `lowercase`,
});

export const text_transform_full_width = tss({
  text_transform: `full-width`,
});

export const truncate = tss({
  display:       `block`,
  overflow:      `hidden`,
  text_overflow: `ellipsis`,
  white_space:   `nowrap`,
});

export const transition_fast = tss({
  _webkit_transition: `all .2s ease-in-out`,
  transition:         `all .2s ease-in-out`,
});

export const transition_medium = tss({
  _webkit_transition: `all .3s ease-in-out`,
  transition:         `all .3s ease-in-out`,
});

export const transition_slow = tss({
  _webkit_transition: `all .5s ease-in-out`,
  transition:         `all .5s ease-in-out`,
});

export const clearfix = tss({
  SELECTOR: [`=@:after`, `=@:before`],
  content:  `""`,
  display:  `table`,
}, {
  SELECTOR: `=@:after`,
  clear:    `both`,
}, {
  '*zoom': `1`,
});

export const cover = tss({
  bottom: `0`,
  height: `100%`,
  left:   `0`,
  right:  `0`,
  top:    `0`,
  width:  `100%`,
}, tssCommon__75);

export const center = tss(tssCommon__75, {
  _webkit_transform: `translate(-50%,-50%)`,
  left:              `50%`,
  top:               `50%`,
  transform:         `translate(-50%,-50%)`,
});

export const circle = tss({
  border_radius: `50%`,
});

export const full_height = tss({
  height: `100%`,
});

export const pointer = tss({
  cursor: `pointer`,
});

export const hide = tss({
  display: `none!important`,
});

export const show = tss({
  display: `block!important`,
});

export const visible = tss({
  visibility: `visible!important`,
});

export const hidden = tss({
  visibility: `hidden!important`,
});

export const show_print = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__8,
  display: `block!important`,
});

export const hide_print = tss({
  MEDIA:   tssMedia__8,
  display: `none!important`,
});

export const show_screen = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__9,
  display: `block!important`,
});

export const hide_screen = tss({
  MEDIA:   tssMedia__9,
  display: `none!important`,
});

export const hide_visually = tss({
  border:   `0`,
  clip:     `rect(0 0 0 0)`,
  height:   `1px`,
  margin:   `-1px`,
  overflow: `hidden`,
  padding:  `0`,
  position: `absolute`,
  width:    `1px`,
});

export const text_hide = tss({
  background_color: `transparent`,
  border:           `0`,
  color:            `transparent`,
  font:             `0/0 a`,
  text_shadow:      `none`,
});

export const hide_xxs = tss({
  MEDIA:   tssMedia__7,
  display: `none!important`,
});

export const hide_xs = tss({
  MEDIA:   tssMedia__6,
  display: `none!important`,
});

export const hide_xs_up = tss({
  MEDIA:   tssMedia__10,
  display: `none!important`,
});

export const hide_xs_down = tss({
  MEDIA:   tssMedia__11,
  display: `none!important`,
});

export const hide_s = tss({
  MEDIA:   tssMedia__5,
  display: `none!important`,
});

export const hide_s_up = tss({
  MEDIA:   tssMedia__12,
  display: `none!important`,
});

export const hide_s_down = tss({
  MEDIA:   tssMedia__13,
  display: `none!important`,
});

export const hide_m = tss({
  MEDIA:   tssMedia__4,
  display: `none!important`,
});

export const hide_m_up = tss({
  MEDIA:   tssMedia__14,
  display: `none!important`,
});

export const hide_m_down = tss({
  MEDIA:   tssMedia__15,
  display: `none!important`,
});

export const hide_l = tss({
  MEDIA:   tssMedia__3,
  display: `none!important`,
});

export const hide_l_up = tss({
  MEDIA:   tssMedia__16,
  display: `none!important`,
});

export const hide_l_down = tss({
  MEDIA:   tssMedia__17,
  display: `none!important`,
});

export const hide_xl = tss({
  MEDIA:   tssMedia__2,
  display: `none!important`,
});

export const show_xxs = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__7,
  display: `block!important`,
});

export const show_xs = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__6,
  display: `block!important`,
});

export const show_xs_up = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__10,
  display: `block!important`,
});

export const show_xs_down = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__11,
  display: `block!important`,
});

export const show_s = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__5,
  display: `block!important`,
});

export const show_s_up = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__12,
  display: `block!important`,
});

export const show_s_down = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__13,
  display: `block!important`,
});

export const show_m = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__4,
  display: `block!important`,
});

export const show_m_up = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__14,
  display: `block!important`,
});

export const show_m_down = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__15,
  display: `block!important`,
});

export const show_l = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__3,
  display: `block!important`,
});

export const show_l_up = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__16,
  display: `block!important`,
});

export const show_l_down = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__17,
  display: `block!important`,
});

export const show_xl = tss({
  display: `none!important`,
}, {
  MEDIA:   tssMedia__2,
  display: `block!important`,
});

export const width_100 = tss({
  width: `100%`,
});

export const z_index_low = tss({
  z_index: `9`,
});

export const z_index_medium = tss({
  z_index: `99`,
});

export const z_index_high = tss({
  z_index: `999`,
});

