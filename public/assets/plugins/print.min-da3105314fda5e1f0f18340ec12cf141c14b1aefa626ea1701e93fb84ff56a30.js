/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return t===undefined&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t)}:n(window.jQuery)}(function(e){e.FE.PLUGINS.print=function(i){return{run:function(){var e=i.$el.html(),t=null;i.shared.print_iframe?t=i.shared.print_iframe:((t=document.createElement("iframe")).name="fr-print",t.style.position="fixed",t.style.top="0",t.style.left="-9999px",t.style.height="100%",t.style.width="0",t.style.overflow="hidden",t.style["z-index"]="2147483647",t.style.tabIndex="-1",document.body.appendChild(t),t.onload=function(){setTimeout(function(){i.events.disableBlur(),window.frames["fr-print"].focus(),window.frames["fr-print"].print(),i.$win.get(0).focus(),i.events.disableBlur(),i.events.focus()},0)},i.events.on("shared.destroy",function(){t.remove()}),i.shared.print_iframe=t);var n=t.contentWindow;n.document.open(),n.document.write("<!DOCTYPE html><html><head><title>"+document.title+"</title>"),Array.prototype.forEach.call(document.querySelectorAll("style"),function(e){e=e.cloneNode(!0),n.document.write(e.outerHTML)});var r=document.querySelectorAll("link[rel=stylesheet]");Array.prototype.forEach.call(r,function(e){var t=document.createElement("link");t.rel=e.rel,t.href=e.href,t.media="print",t.type="text/css",t.media="all",n.document.write(t.outerHTML)}),n.document.write('</head><body style="text-align: '+("rtl"==i.opts.direction?"right":"left")+"; direction: "+i.opts.direction+';"><div class="fr-view">'),n.document.write(e),n.document.write("</div></body></html>"),n.document.close()}}},e.FE.DefineIcon("print",{NAME:"print"}),e.FE.RegisterCommand("print",{title:"Print",undo:!1,focus:!1,plugin:"print",callback:function(){this.print.run()}})});