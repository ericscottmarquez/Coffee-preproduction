/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return n===undefined&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{charCounterMax:-1,charCounterCount:!0}),e.FE.PLUGINS.charCounter=function(t){function n(){return(t.el.textContent||"").replace(/\u200B/g,"").length}function r(r){if(t.opts.charCounterMax<0)return!0;if(n()<t.opts.charCounterMax)return!0;var o=r.which;return!(!t.keys.ctrlKey(r)&&t.keys.isCharacter(o)||o===e.FE.KEYCODE.IME)||(r.preventDefault(),r.stopPropagation(),t.events.trigger("charCounter.exceeded"),!1)}function o(r){return t.opts.charCounterMax<0?r:e("<div>").html(r).text().length+n()<=t.opts.charCounterMax?r:(t.events.trigger("charCounter.exceeded"),"")}function u(){if(t.opts.charCounterCount){var e=n()+(0<t.opts.charCounterMax?"/"+t.opts.charCounterMax:"");a.text(e),t.opts.toolbarBottom&&a.css("margin-bottom",t.$tb.outerHeight(!0));var r=t.$wp.get(0).offsetWidth-t.$wp.get(0).clientWidth;0<=r&&("rtl"==t.opts.direction?a.css("margin-left",r):a.css("margin-right",r))}}var a;return{_init:function(){return!!t.$wp&&!!t.opts.charCounterCount&&((a=e('<span class="fr-counter"></span>')).css("bottom",t.$wp.css("border-bottom-width")),t.$box.append(a),t.events.on("keydown",r,!0),t.events.on("paste.afterCleanup",o),t.events.on("keyup contentChanged input",function(){t.events.trigger("charCounter.update")}),t.events.on("charCounter.update",u),t.events.trigger("charCounter.update"),void t.events.on("destroy",function(){e(t.o_win).off("resize.char"+t.id),a.removeData().remove(),a=null}))},count:n}}});