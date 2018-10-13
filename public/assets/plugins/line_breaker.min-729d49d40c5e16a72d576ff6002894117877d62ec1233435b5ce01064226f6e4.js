/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return n===undefined&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{lineBreakerTags:["table","hr","form","dl","span.fr-video",".fr-embedly"],lineBreakerOffset:15,lineBreakerHorizontalOffset:10}),e.FE.PLUGINS.lineBreaker=function(t){function n(n,r){var a,o,i,s,f,l,p,u;if(null==n)f=(s=r.parent()).offset().top,a=(p=r.offset().top)-Math.min((p-f)/2,t.opts.lineBreakerOffset),i=s.outerWidth(),o=s.offset().left;else if(null==r)(l=(s=n.parent()).offset().top+s.outerHeight())<(u=n.offset().top+n.outerHeight())&&(l=(s=e(s).parent()).offset().top+s.outerHeight()),a=u+Math.min(Math.abs(l-u)/2,t.opts.lineBreakerOffset),i=s.outerWidth(),o=s.offset().left;else{s=n.parent();var d=n.offset().top+n.height(),v=r.offset().top;if(v<d)return!1;a=(d+v)/2,i=s.outerWidth(),o=s.offset().left}t.opts.iframe&&(o+=t.$iframe.offset().left-t.helpers.scrollLeft(),a+=t.$iframe.offset().top-t.helpers.scrollTop()),t.$box.append(g),g.css("top",a-t.win.pageYOffset),g.css("left",o-t.win.pageXOffset),g.css("width",i),g.data("tag1",n),g.data("tag2",r),g.addClass("fr-visible").data("instance",t)}function r(n){if(n){var r=e(n);if(0===t.$el.find(r).length)return null;if(n.nodeType!=Node.TEXT_NODE&&r.is(t.opts.lineBreakerTags.join(",")))return r;if(0<r.parents(t.opts.lineBreakerTags.join(",")).length)return n=r.parents(t.opts.lineBreakerTags.join(",")).get(0),0!==t.$el.find(n).length&&e(n).is(t.opts.lineBreakerTags.join(","))?e(n):null}return null}function a(n,r){var a=t.doc.elementFromPoint(n,r);return a&&!e(a).closest(".fr-line-breaker").length&&!t.node.isElement(a)&&a!=t.$wp.get(0)&&function(e){if("undefined"!=typeof e.inFroalaWrapper)return e.inFroalaWrapper;for(var n=e;e.parentNode&&e.parentNode!==t.$wp.get(0);)e=e.parentNode;return n.inFroalaWrapper=e.parentNode==t.$wp.get(0),n.inFroalaWrapper}(a)?a:null}function o(e,n,r){for(var o=r,i=null;o<=t.opts.lineBreakerOffset&&!i;)(i=a(e,n-o))||(i=a(e,n+o)),o+=r;return i}function i(e,n,r){for(var i=null,s=100;!i&&e>t.$box.offset().left&&e<t.$box.offset().left+t.$box.outerWidth()&&0<s;)(i=a(e,n))||(i=o(e,n,5)),"left"==r?e-=t.opts.lineBreakerHorizontalOffset:e+=t.opts.lineBreakerHorizontalOffset,s-=t.opts.lineBreakerHorizontalOffset;return i}function s(e){var a=c=null,s=null,f=t.doc.elementFromPoint(e.pageX-t.win.pageXOffset,e.pageY-t.win.pageYOffset);f&&("HTML"==f.tagName||"BODY"==f.tagName||t.node.isElement(f)||0<=(f.getAttribute("class")||"").indexOf("fr-line-breaker"))?((s=o(e.pageX-t.win.pageXOffset,e.pageY-t.win.pageYOffset,1))||(s=i(e.pageX-t.win.pageXOffset-t.opts.lineBreakerHorizontalOffset,e.pageY-t.win.pageYOffset,"left")),s||(s=i(e.pageX-t.win.pageXOffset+t.opts.lineBreakerHorizontalOffset,e.pageY-t.win.pageYOffset,"right")),a=r(s)):a=r(f),a?function(e,a){var o,i,s=e.offset().top,f=e.offset().top+e.outerHeight();if(Math.abs(f-a)<=t.opts.lineBreakerOffset||Math.abs(a-s)<=t.opts.lineBreakerOffset)if(Math.abs(f-a)<Math.abs(a-s)){for(var l=(i=e.get(0)).nextSibling;l&&l.nodeType==Node.TEXT_NODE&&0===l.textContent.length;)l=l.nextSibling;if(!l)return n(e,null);if(o=r(l))return n(e,o)}else{if(!(i=e.get(0)).previousSibling)return n(null,e);if(o=r(i.previousSibling))return n(o,e)}g.removeClass("fr-visible").removeData("instance")}(a,e.pageY):t.core.sameInstance(g)&&g.removeClass("fr-visible").removeData("instance")}function f(e){return!(g.hasClass("fr-visible")&&!t.core.sameInstance(g))&&(t.popups.areVisible()||t.el.querySelector(".fr-selected-cell")?(g.removeClass("fr-visible"),!0):void(!1!==v||t.edit.isDisabled()||(c&&clearTimeout(c),c=setTimeout(s,30,e))))}function l(){c&&clearTimeout(c),g.hasClass("fr-visible")&&g.removeClass("fr-visible").removeData("instance")}function p(){v=!0,l()}function u(){v=!1}function d(n){n.preventDefault();var r=g.data("instance")||t;g.removeClass("fr-visible").removeData("instance");var a=g.data("tag1"),o=g.data("tag2"),i=t.html.defaultTag();null==a?i&&"TD"!=o.parent().get(0).tagName&&0===o.parents(i).length?o.before("<"+i+">"+e.FE.MARKERS+"<br></"+i+">"):o.before(e.FE.MARKERS+"<br>"):i&&"TD"!=a.parent().get(0).tagName&&0===a.parents(i).length?a.after("<"+i+">"+e.FE.MARKERS+"<br></"+i+">"):a.after(e.FE.MARKERS+"<br>"),r.selection.restore()}var g,v,c;return{_init:function(){if(!t.$wp)return!1;t.shared.$line_breaker||(t.shared.$line_breaker=e('<div class="fr-line-breaker"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+t.language.translate("Break")+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="21" y="11" width="2" height="8"/><rect x="14" y="17" width="7" height="2"/><path d="M14.000,14.000 L14.000,22.013 L9.000,18.031 L14.000,14.000 Z"/></svg></a></div>')),g=t.shared.$line_breaker,t.events.on("shared.destroy",function(){g.html("").removeData().remove(),g=null},!0),t.events.on("destroy",function(){g.removeData("instance").removeClass("fr-visible").appendTo("body:first"),clearTimeout(c)},!0),t.events.$on(g,"mousemove",function(e){e.stopPropagation()},!0),t.events.bindClick(g,"a",d),v=!1,t.events.$on(t.$win,"mousemove",f),t.events.$on(e(t.win),"scroll",l),t.events.on("popups.show.table.edit",l),t.events.on("commands.after",l),t.events.$on(e(t.win),"mousedown",p),t.events.$on(e(t.win),"mouseup",u)}}}});