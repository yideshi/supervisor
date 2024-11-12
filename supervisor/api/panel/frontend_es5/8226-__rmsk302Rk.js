"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8226,8811],{98226:function(r,e,t){t.r(e),t.d(e,{REDIRECTS:function(){return g}});var o,i,a=t(62746),n=t(88962),s=t(33368),c=t(71650),l=t(82390),d=t(69205),u=t(70906),h=t(91808),v=t(34541),p=t(47838),f=t(54211),y=t(68144),m=t(79932),k=t(83849),b=t(15493),g=(t(48811),{supervisor:{redirect:"/hassio/dashboard"},supervisor_logs:{redirect:"/hassio/system"},supervisor_info:{redirect:"/hassio/system"},supervisor_snapshots:{redirect:"/hassio/backups"},supervisor_backups:{redirect:"/hassio/backups"},supervisor_store:{redirect:"/hassio/store"},supervisor_addons:{redirect:"/hassio/dashboard"},supervisor_addon:{redirect:"/hassio/addon",params:{addon:"string"},optional_params:{repository_url:"url"}},supervisor_ingress:{redirect:"/hassio/ingress",params:{addon:"string"}},supervisor_add_addon_repository:{redirect:"/hassio/store",params:{repository_url:"url"}}});(0,h.Z)([(0,m.Mo)("hassio-my-redirect")],(function(r,e){var t=function(e){(0,d.Z)(o,e);var t=(0,u.Z)(o);function o(){var e;(0,c.Z)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return e=t.call.apply(t,[this].concat(a)),r((0,l.Z)(e)),e}return(0,s.Z)(o)}(e);return{F:t,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_error",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,v.Z)((0,p.Z)(t.prototype),"connectedCallback",this).call(this);var r=this.route.path.substr(1),e=g[r];if(e){var i;try{i=this._createRedirectUrl(e)}catch(a){return void(this._error=this.supervisor.localize("my.error"))}(0,k.c)(i,{replace:!0})}else this._error=this.supervisor.localize("my.not_supported","link",(0,y.dy)(o||(o=(0,n.Z)(['<a target="_blank" rel="noreferrer noopener" href="https://my.home-assistant.io/faq.html#supported-pages"> '," </a>"])),this.supervisor.localize("my.faq_link")))}},{kind:"method",key:"render",value:function(){return this._error?(0,y.dy)(i||(i=(0,n.Z)(['<hass-error-screen .error="','"></hass-error-screen>'])),this._error):y.Ld}},{kind:"method",key:"_createRedirectUrl",value:function(r){var e=this._createRedirectParams(r);return"".concat(r.redirect).concat(e)}},{kind:"method",key:"_createRedirectParams",value:function(r){var e=this,t=(0,b.Q2)();if(!r.params&&!Object.keys(t).length)return"";var o={};return Object.entries(r.params||{}).forEach((function(r){var i=(0,a.Z)(r,2),n=i[0],s=i[1];if(!t[n]||!e._checkParamType(s,t[n]))throw Error();o[n]=t[n]})),Object.entries(r.optional_params||{}).forEach((function(r){var i=(0,a.Z)(r,2),n=i[0],s=i[1];if(t[n]){if(!e._checkParamType(s,t[n]))throw Error();o[n]=t[n]}})),"?".concat((0,b.ou)(o))}},{kind:"method",key:"_checkParamType",value:function(r,e){return"string"===r||"url"===r&&(e&&e===(0,f.N)(e))}}]}}),y.oi)},54211:function(r,e){e.N=void 0;var t=/^([^\w]*)(javascript|data|vbscript)/im,o=/&#(\w+)(^\w|;)?/g,i=/&(newline|tab);/gi,a=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,n=/^.+(:|&colon;)/gim,s=[".","/"];e.N=function(r){var e,c=(e=r||"",e.replace(o,(function(r,e){return String.fromCharCode(e)}))).replace(i,"").replace(a,"").trim();if(!c)return"about:blank";if(function(r){return s.indexOf(r[0])>-1}(c))return c;var l=c.match(n);if(!l)return c;var d=l[0];return t.test(d)?"about:blank":c}},15493:function(r,e,t){t.d(e,{Q2:function(){return a},io:function(){return n},ou:function(){return s}});var o=t(62746),i=t(40039),a=function(){var r,e={},t=new URLSearchParams(location.search),a=(0,i.Z)(t.entries());try{for(a.s();!(r=a.n()).done;){var n=(0,o.Z)(r.value,2),s=n[0],c=n[1];e[s]=c}}catch(l){a.e(l)}finally{a.f()}return e},n=function(r){return new URLSearchParams(window.location.search).get(r)},s=function(r){var e=new URLSearchParams;return Object.entries(r).forEach((function(r){var t=(0,o.Z)(r,2),i=t[0],a=t[1];e.append(i,a)})),e.toString()}},9381:function(r,e,t){var o,i,a,n,s=t(93359),c=t(88962),l=t(33368),d=t(71650),u=t(82390),h=t(69205),v=t(70906),p=t(91808),f=t(68144),y=t(79932),m=t(83448),k=t(47181),b=(t(5666),t(52039),{info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"});(0,p.Z)([(0,y.Mo)("ha-alert")],(function(r,e){var t=function(e){(0,h.Z)(o,e);var t=(0,v.Z)(o);function o(){var e;(0,d.Z)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return e=t.call.apply(t,[this].concat(a)),r((0,u.Z)(e)),e}return(0,l.Z)(o)}(e);return{F:t,d:[{kind:"field",decorators:[(0,y.Cb)()],key:"title",value:function(){return""}},{kind:"field",decorators:[(0,y.Cb)({attribute:"alert-type"})],key:"alertType",value:function(){return"info"}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"dismissable",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,f.dy)(o||(o=(0,c.Z)([' <div class="issue-type ','" role="alert"> <div class="icon ','"> <slot name="icon"> <ha-svg-icon .path="','"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ',' <slot></slot> </div> <div class="action"> <slot name="action"> '," </slot> </div> </div> </div> "])),(0,m.$)((0,s.Z)({},this.alertType,!0)),this.title?"":"no-title",b[this.alertType],this.title?(0,f.dy)(i||(i=(0,c.Z)(['<div class="title">',"</div>"])),this.title):"",this.dismissable?(0,f.dy)(a||(a=(0,c.Z)(['<ha-icon-button @click="','" label="Dismiss alert" .path="','"></ha-icon-button>'])),this._dismiss_clicked,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):"")}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,k.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:function(){return(0,f.iv)(n||(n=(0,c.Z)(['.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}'])))}}]}}),f.oi)},48811:function(r,e,t){t.r(e);var o,i,a,n,s,c=t(88962),l=t(33368),d=t(71650),u=t(82390),h=t(69205),v=t(70906),p=t(91808),f=(t(14271),t(68144)),y=t(79932);t(2315),t(93686),t(9381),(0,p.Z)([(0,y.Mo)("hass-error-screen")],(function(r,e){var t=function(e){(0,h.Z)(o,e);var t=(0,v.Z)(o);function o(){var e;(0,d.Z)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return e=t.call.apply(t,[this].concat(a)),r((0,u.Z)(e)),e}return(0,l.Z)(o)}(e);return{F:t,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"toolbar",value:function(){return!0}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"rootnav",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,y.Cb)()],key:"error",value:void 0},{kind:"method",key:"render",value:function(){var r,e;return(0,f.dy)(o||(o=(0,c.Z)([" ",' <div class="content"> <ha-alert alert-type="error">','</ha-alert> <slot> <mwc-button @click="','"> '," </mwc-button> </slot> </div> "])),this.toolbar?(0,f.dy)(i||(i=(0,c.Z)(['<div class="toolbar"> '," </div>"])),this.rootnav||null!==(r=history.state)&&void 0!==r&&r.root?(0,f.dy)(a||(a=(0,c.Z)([' <ha-menu-button .hass="','" .narrow="','"></ha-menu-button> '])),this.hass,this.narrow):(0,f.dy)(n||(n=(0,c.Z)([' <ha-icon-button-arrow-prev .hass="','" @click="','"></ha-icon-button-arrow-prev> '])),this.hass,this._handleBack)):"",this.error,this._handleBack,null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back"))}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,f.iv)(s||(s=(0,c.Z)([":host{display:block;height:100%;background-color:var(--primary-background-color)}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}ha-icon-button-arrow-prev{pointer-events:auto}.content{color:var(--primary-text-color);height:calc(100% - var(--header-height));display:flex;padding:16px;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}a{color:var(--primary-color)}ha-alert{margin-bottom:16px}"])))]}}]}}),f.oi)}}]);
//# sourceMappingURL=8226-__rmsk302Rk.js.map