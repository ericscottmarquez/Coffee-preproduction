/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(n,t){return t===undefined&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(n)),e(t)}:e(window.jQuery)}(function(e){e.FE.URLRegEx="(^| |\\u00A0)("+e.FE.LinkRegEx+"|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}\\.[a-z0-9+-_]{1,}))$",e.FE.PLUGINS.url=function(n){function t(e,t,r){for(var o="";r.length&&"."==r[r.length-1];)o+=".",r=r.substring(0,r.length-1);var i=r;if(n.opts.linkConvertEmailAddress)n.helpers.isEmail(i)&&!/^mailto:.*/i.test(i)&&(i="mailto:"+i);else if(n.helpers.isEmail(i))return t+r;return/^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(i)||(i="//"+i),(t||"")+"<a"+(n.opts.linkAlwaysBlank?' target="_blank"':"")+(a?' rel="'+a+'"':"")+' data-fr-linked="true" href="'+i+'">'+r.replace(/&amp;/g,"&").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</a>"+o}function r(){return new RegExp(e.FE.URLRegEx,"gi")}function o(e){return n.opts.linkAlwaysNoFollow&&(a="nofollow"),n.opts.linkAlwaysBlank&&(n.opts.linkNoOpener&&(a?a+=" noopener":a="noopener"),n.opts.linkNoReferrer&&(a?a+=" noreferrer":a="noreferrer")),e.replace(r(),t)}function i(e){var n=e.split(" ");return n[n.length-1]}function l(){var t=n.selection.ranges(0),l=t.startContainer;if(!l||l.nodeType!==Node.TEXT_NODE||t.startOffset!==(l.textContent||"").length)return!1;if(function p(e){return!!e&&("A"===e.tagName||!(!e.parentNode||e.parentNode==n.el)&&p(e.parentNode))}(l))return!1;if(r().test(i(l.textContent))){e(l).before(o(l.textContent));var a=e(l.parentNode).find("a[data-fr-linked]");a.removeAttr("data-fr-linked"),l.parentNode.removeChild(l),n.events.trigger("url.linked",[a.get(0)])}else if(l.textContent.split(" ").length<=2&&l.previousSibling&&"A"===l.previousSibling.tagName){var s=l.previousSibling.innerText+l.textContent;r().test(i(s))&&(e(l.previousSibling).replaceWith(o(s)),l.parentNode.removeChild(l))}}var a=null;return{_init:function(){n.events.on("keypress",function(e){!n.selection.isCollapsed()||"."!=e.key&&")"!=e.key&&"("!=e.key||l()},!0),n.events.on("keydown",function(t){var r=t.which;!n.selection.isCollapsed()||r!=e.FE.KEYCODE.ENTER&&r!=e.FE.KEYCODE.SPACE||l()},!0),n.events.on("paste.beforeCleanup",function(e){if(n.helpers.isURL(e)){var t=null;return n.opts.linkAlwaysBlank&&(n.opts.linkNoOpener&&(t?t+=" noopener":t="noopener"),n.opts.linkNoReferrer&&(t?t+=" noreferrer":t="noreferrer")),"<a"+(n.opts.linkAlwaysBlank?' target="_blank"':"")+(t?' rel="'+t+'"':"")+' href="'+e+'" >'+e+"</a>"}})}}}});