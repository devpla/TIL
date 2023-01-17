"use strict";(self.webpackChunkTIL=self.webpackChunkTIL||[]).push([[6315,9514,9153],{4608:function(e,t,n){n.r(t);var c=n(7294),o=n(6125),l=n(4973);t.default=function(){return c.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},c.createElement("main",{className:"container margin-vert--xl"},c.createElement("div",{className:"row"},c.createElement("div",{className:"col col--6 col--offset-3"},c.createElement("h1",{className:"hero__title"},c.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),c.createElement("p",null,c.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),c.createElement("p",null,c.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},1214:function(e,t,n){n.d(t,{Z:function(){return d}});var c=n(7462),o=n(7294),l=n(3773),a=n(2389),r=n(6010),i=(0,o.memo)((function(e){var t=e.className,n=e.styles,c=e.icons,l=e.checked,a=e.disabled,i=e.onChange,d=(0,o.useState)(l),u=d[0],s=d[1],h=(0,o.useState)(!1),g=h[0],m=h[1],k=(0,o.useRef)(null);return o.createElement("div",{className:(0,r.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":g,"toggle--disabled":a}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=k.current)?void 0:e.click()}},o.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},c.unchecked),o.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},c.checked),o.createElement("input",{ref:k,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return s(!u)},onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=k.current)||t.click())}}))}));function d(e){var t=(0,l.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,d=t.lightIcon,u=t.lightIconStyle,s=(0,a.Z)();return o.createElement(i,(0,c.Z)({disabled:!s,styles:{unchecked:u,checked:r},icons:{unchecked:d,checked:n}},e))}i.displayName="ToggleMemo"}}]);