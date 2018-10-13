/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,i){return i===undefined&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(i)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{wordDeniedTags:[],wordDeniedAttrs:[],wordAllowedStyleProps:["font-family","font-size","background","color","width","text-align","vertical-align","background-color","padding","margin","height","margin-top","margin-left","margin-right","margin-bottom","text-decoration","font-weight","font-style","text-indent"],wordPasteModal:!0,wordPasteKeepFormatting:!0}),e.FE.PLUGINS.wordPaste=function(t){function i(i){var o=t.opts.wordAllowedStyleProps;i||(t.opts.wordAllowedStyleProps=[]),0===m.indexOf("<colgroup>")&&(m="<table>"+m+"</table>"),m=function(i,o){0<=i.indexOf("<html")&&(i=i.replace(/[.\s\S\w\W<>]*(<html[^>]*>[.\s\S\w\W<>]*<\/html>)[.\s\S\w\W<>]*/i,"$1")),function(e){for(var t=e.split("v:shape"),i=1;i<t.length;i++){var r=t[i],n=r.split(' id="')[1];if(n&&1<n.length){n=n.split('"')[0];var l=r.split(' o:spid="')[1];l&&1<l.length&&(l=l.split('"')[0],b[n]=l)}}}(i);var d=(new DOMParser).parseFromString(i,"text/html"),f=d.head,c=d.body,m=function(e){var t={},i=e.getElementsByTagName("style");if(i.length){var r=i[0].innerHTML.match(/[\S ]+\s+{[\s\S]+?}/gi);if(r)for(var n=0;n<r.length;n++){var l=r[n],a=l.replace(/([\S ]+\s+){[\s\S]+?}/gi,"$1"),s=l.replace(/[\S ]+\s+{([\s\S]+?)}/gi,"$1");a=a.replace(/^[\s]|[\s]$/gm,""),s=s.replace(/^[\s]|[\s]$/gm,""),a=a.replace(/\n|\r|\n\r/g,""),s=s.replace(/\n|\r|\n\r/g,"");for(var o=a.split(", "),d=0;d<o.length;d++)t[o[d]]=s}}return t}(f);n(c,function(t){if(t.nodeType==Node.TEXT_NODE&&/\n|\u00a0|\r/.test(t.data)){if(!/\S| /.test(t.data))return t.data==e.FE.UNICODE_NBSP?(t.data="\u200b",!0):1==t.data.length&&10==t.data.charCodeAt(0)?(t.data=" ",!0):(r(t),!1);t.data=t.data.replace(/\n|\r/gi," ")}return!0}),n(c,function(i){return i.nodeType!=Node.ELEMENT_NODE||"V:IMAGEDATA"!=i.tagName&&"IMG"!=i.tagName||function(i,r){if(r){var n;if("IMG"==i.tagName){var l=i.getAttribute("src");if(!l||-1==l.indexOf("file://"))return;if(0===l.indexOf("file://")&&t.helpers.isURL(i.getAttribute("alt")))return i.setAttribute("src",i.getAttribute("alt"));(n=b[i.getAttribute("v:shapes")])||(n=i.getAttribute("v:shapes"))}else n=i.parentNode.getAttribute("o:spid");if(i.removeAttribute("height"),n){var a;v={},u(a=r,"i","\\shppict"),u(a,"s","\\shp{");var s=v[n.substring(7)];if(s){var o=function(){for(var e=s.image_hex.match(/[0-9a-f]{2}/gi),t=[],i=0;i<e.length;i++)t.push(String.fromCharCode(parseInt(e[i],16)));var r=t.join("");return btoa(r)}(),d="data:"+s.image_type+";base64,"+o;"IMG"===i.tagName?(i.src=d,i.setAttribute("data-fr-image-pasted",!0)):e(i.parentNode).before('<img data-fr-image-pasted="true" src="'+d+'" style="'+i.parentNode.getAttribute("style")+'">').remove()}}}}(i,o),!0});for(var h=c.querySelectorAll("ul > ul, ul > ol, ol > ul, ol > ol"),E=h.length-1;0<=E;E--)h[E].previousElementSibling&&"LI"===h[E].previousElementSibling.tagName&&h[E].previousElementSibling.appendChild(h[E]);n(c,function(e){if(e.nodeType==Node.TEXT_NODE)return e.data=e.data.replace(/<br>(\n|\r)/gi,"<br>"),!1;if(e.nodeType==Node.ELEMENT_NODE){if(l(e)){var t=e.parentNode,i=e.previousSibling,n=function d(e,t){var i=/[0-9a-zA-Z]./gi,n=!1;e.firstElementChild&&e.firstElementChild.firstElementChild&&e.firstElementChild.firstElementChild.firstChild&&!(n=n||i.test(e.firstElementChild.firstElementChild.firstChild.data||""))&&e.firstElementChild.firstElementChild.firstElementChild&&e.firstElementChild.firstElementChild.firstElementChild.firstChild&&(n=n||i.test(e.firstElementChild.firstElementChild.firstElementChild.firstChild.data||""));var o=n?"ol":"ul",g=a(e),f="<"+o+"><li>"+s(e,t),u=e.nextElementSibling,p=e.parentNode;for(r(e),e=null;u&&l(u);){var c=u.previousElementSibling,m=a(u);if(g<m)f+=d(u,t).outerHTML;else{if(m<g)break;f+="</li><li>"+s(u,t)}if(g=m,u.previousElementSibling||u.nextElementSibling||u.parentNode){var h=u;u=u.nextElementSibling,r(h),h=null}else u=c?c.nextElementSibling:p.firstElementChild}f+="</li></"+o+">";var v=document.createElement("div");return v.innerHTML=f,v.firstElementChild}(e,m),o=null;return(o=i?i.nextSibling:t.firstChild)?t.insertBefore(n,o):t.appendChild(n),!1}return p(e,m)}return e.nodeType!=Node.COMMENT_NODE||(r(e),!1)}),n(c,function(e){if(e.nodeType==Node.ELEMENT_NODE){var t=e.tagName;if(!e.innerHTML&&-1==["BR","IMG"].indexOf(t)){for(var i=e.parentNode;i&&(r(e),!(e=i).innerHTML);)i=e.parentNode;return!1}!function(e){var t=e.getAttribute("style");if(t){(t=g(t))&&";"!=t.slice(-1)&&(t+=";");var i=t.match(/(^|\S+?):.+?;{1,1}/gi);if(i){for(var r={},l=0;l<i.length;l++){var a=i[l].split(":");2==a.length&&("text-align"==a[0]&&"SPAN"==e.tagName||(r[a[0]]=a[1]))}var s="";for(var o in r)if(r.hasOwnProperty(o)){if("font-size"==o&&"pt;"==r[o].slice(-3)){var d=null;try{d=parseFloat(r[o].slice(0,-3),10)}catch(n){}d&&(d=Math.round(1.33*d),r[o]=d+"px;")}s+=o+":"+r[o]}s&&e.setAttribute("style",s)}}}(e)}return!0});var A=c.outerHTML,y=t.opts.htmlAllowedStyleProps;return t.opts.htmlAllowedStyleProps=t.opts.wordAllowedStyleProps,A=t.clean.html(A,t.opts.wordDeniedTags,t.opts.wordDeniedAttrs,!1),t.opts.htmlAllowedStyleProps=y,A}(m=m.replace(/<span[\n\r ]*style='mso-spacerun:yes'>([\r\n\u00a0 ]*)<\/span>/g,function(e,t){for(var i="",r=0;r++<t.length;)i+="&nbsp;";return i}),t.paste.getRtfClipboard());var d=t.doc.createElement("DIV");d.innerHTML=m,t.html.cleanBlankSpaces(d),m=d.innerHTML,m=(m=t.paste.cleanEmptyTagsAndDivs(m)).replace(/\u200b/g,""),t.modals.hide(h),t.paste.clean(m,!0,!0),t.opts.wordAllowedStyleProps=o}function r(e){e.parentNode&&e.parentNode.removeChild(e)}function n(e,t){if(t(e))for(var i=e.firstChild;i;){var r=i,l=i.previousSibling;i=i.nextSibling,n(r,t),r.previousSibling||r.nextSibling||r.parentNode||!i||l==i.previousSibling||!i.parentNode?r.previousSibling||r.nextSibling||r.parentNode||!i||i.previousSibling||i.nextSibling||i.parentNode||(l?i=l.nextSibling?l.nextSibling.nextSibling:null:e.firstChild&&(i=e.firstChild.nextSibling)):i=l?l.nextSibling:e.firstChild}}function l(e){if(!e.getAttribute("style")||!/mso-list:[\s]*l/gi.test(e.getAttribute("style").replace(/\n/gi,"")))return!1;try{if(!e.querySelector('[style="mso-list:Ignore"]'))return!1}catch(i){return!1}return!0}function a(e){return e.getAttribute("style").replace(/\n/gi,"").replace(/.*level([0-9]+?).*/gi,"$1")}function s(e,t){var i=e.cloneNode(!0);if(-1!=["H1","H2","H3","H4","H5","H6"].indexOf(e.tagName)){var r=document.createElement(e.tagName.toLowerCase());r.setAttribute("style",e.getAttribute("style")),r.innerHTML=i.innerHTML,i.innerHTML=r.outerHTML}n(i,function(e){return e.nodeType==Node.ELEMENT_NODE&&("mso-list:Ignore"==e.getAttribute("style")&&e.parentNode.removeChild(e),p(e,t)),!0});var l=i.innerHTML;return l.replace(/<!--[\s\S]*?-->/gi,"")}function o(e,t){for(var i=document.createElement(t),r=0;r<e.attributes.length;r++){var n=e.attributes[r].name;i.setAttribute(n,e.getAttribute(n))}return i.innerHTML=e.innerHTML,e.parentNode.replaceChild(i,e),i}function d(e){var t=e.getAttribute("align");t&&(e.style["text-align"]=t,e.removeAttribute("align"))}function g(e){return e.replace(/\n|\r|\n\r|&quot;/g,"")}function f(e,t,i){if(t){var r=e.getAttribute("style");r&&";"!=r.slice(-1)&&(r+=";"),t&&";"!=t.slice(-1)&&(t+=";"),t=t.replace(/\n/gi,"");var n=null;n=i?(r||"")+t:t+(r||""),e.setAttribute("style",n)}}function u(e,t,i){for(var r=e.split(i),n=1;n<r.length;n++){var l=r[n];if(1<(l=l.split("shplid")).length){l=l[1];for(var a="",s=0;s<l.length&&"\\"!=l[s]&&"{"!=l[s]&&" "!=l[s]&&"\r"!=l[s]&&"\n"!=l[s];)a+=l[s],s++;var o=l.split("bliptag");if(o&&o.length<2)continue;var d=null;if(-1!=o[0].indexOf("pngblip")?d="image/png":-1!=o[0].indexOf("jpegblip")&&(d="image/jpeg"),!d)continue;var g,f=o[1].split("}");if(f&&f.length<2)continue;if(2<f.length&&-1!=f[0].indexOf("blipuid"))g=f[1].split(" ");else{if((g=f[0].split(" "))&&g.length<2)continue;g.shift()}var u=g.join("");v[t+a]={image_hex:u,image_type:d}}}}function p(i,n){var a=i.tagName,s=a.toLowerCase();if(i.firstElementChild&&("I"==i.firstElementChild.tagName?o(i.firstElementChild,"em"):"B"==i.firstElementChild.tagName&&o(i.firstElementChild,"strong")),-1!=["SCRIPT","APPLET","EMBED","NOFRAMES","NOSCRIPT"].indexOf(a))return r(i),!1;var u=-1,p=["META","LINK","XML","ST1:","O:","W:","FONT"];for(u=0;u<p.length;u++)if(-1!=a.indexOf(p[u]))return i.innerHTML&&(i.outerHTML=i.innerHTML),r(i),!1;if("TD"!=a){var c=i.getAttribute("class");if(n&&c){var m=(c=g(c)).split(" ");for(u=0;u<m.length;u++){var h=[],v="."+m[u];h.push(v),v=s+v,h.push(v);for(var b=0;b<h.length;b++)n[h[b]]&&f(i,n[h[b]])}i.removeAttribute("class")}n&&n[s]&&f(i,n[s])}if(-1!=["P","H1","H2","H3","H4","H5","H6","PRE"].indexOf(a)){var E=i.getAttribute("class");if(E&&(n&&n[a.toLowerCase()+"."+E]&&f(i,n[a.toLowerCase()+"."+E]),-1!=E.toLowerCase().indexOf("mso"))){var A=g(E);(A=A.replace(/[0-9a-z-_]*mso[0-9a-z-_]*/gi,""))?i.setAttribute("class",A):i.removeAttribute("class")}var y=i.getAttribute("style");if(y){var C=y.match(/text-align:.+?[; "]{1,1}/gi);C&&C[C.length-1].replace(/(text-align:.+?[; "]{1,1})/gi,"$1")}d(i)}if("TR"==a&&function(i,n){t.node.clearAttributes(i);for(var a=i.firstElementChild,s=0,o=!1,u=null;a;){a.firstElementChild&&-1!=a.firstElementChild.tagName.indexOf("W:")&&(a.innerHTML=a.firstElementChild.innerHTML),(u=a.getAttribute("width"))||o||(o=!0),s+=parseInt(u,10),(!a.firstChild||a.firstChild&&a.firstChild.data==e.FE.UNICODE_NBSP)&&(a.firstChild&&r(a.firstChild),a.innerHTML="<br>");for(var p=a.firstElementChild,c=1==a.children.length;p;)"P"!=p.tagName||l(p)||c&&d(p),p=p.nextElementSibling;if(n){var m=a.getAttribute("class");if(m){var h=(m=g(m)).match(/xl[0-9]+/gi);if(h){var v="."+h[0];n[v]&&f(a,n[v])}}n.td&&f(a,n.td)}var b=a.getAttribute("style");b&&(b=g(b))&&";"!=b.slice(-1)&&(b+=";");var E=a.getAttribute("valign");if(!E&&b){var A=b.match(/vertical-align:.+?[; "]{1,1}/gi);A&&(E=A[A.length-1].replace(/vertical-align:(.+?)[; "]{1,1}/gi,"$1"))}var y=null;if(b){var C=b.match(/text-align:.+?[; "]{1,1}/gi);C&&(y=C[C.length-1].replace(/text-align:(.+?)[; "]{1,1}/gi,"$1")),"general"==y&&(y=null)}var w=null;if(b){var N=b.match(/background:.+?[; "]{1,1}/gi);N&&(w=N[N.length-1].replace(/background:(.+?)[; "]{1,1}/gi,"$1"))}var x=a.getAttribute("colspan"),S=a.getAttribute("rowspan");x&&a.setAttribute("colspan",x),S&&a.setAttribute("rowspan",S),E&&(a.style["vertical-align"]=E),y&&(a.style["text-align"]=y),w&&(a.style["background-color"]=w),u&&a.setAttribute("width",u),a=a.nextElementSibling}for(a=i.firstElementChild;a;)u=a.getAttribute("width"),o?a.removeAttribute("width"):a.setAttribute("width",100*parseInt(u,10)/s+"%"),a=a.nextElementSibling}(i,n),"A"!=a||i.attributes.getNamedItem("href")||i.attributes.getNamedItem("name")||!i.innerHTML||(i.outerHTML=i.innerHTML),"TD"!=a&&"TH"!=a||i.innerHTML||(i.innerHTML="<br>"),"TABLE"==a&&(i.style.width="100%"),i.getAttribute("lang")&&i.removeAttribute("lang"),i.getAttribute("style")&&-1!=i.getAttribute("style").toLowerCase().indexOf("mso")){var w=g(i.getAttribute("style"));(w=w.replace(/[0-9a-z-_]*mso[0-9a-z-_]*:.+?(;{1,1}|$)/gi,""))?i.setAttribute("style",w):i.removeAttribute("style")}return!0}var c,m,h="word_paste",v=null,b={};return{_init:function(){t.events.on("paste.wordPaste",function(r){return m=r,t.opts.wordPasteModal?function(){if(!c){var i='<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.95 73.23" style="height: 25px; vertical-align: text-bottom; margin-right: 5px; display: inline-block"><defs><style>.a{fill:#2a5699;}.b{fill:#fff;}</style></defs><path class="a" d="M615.15,827.22h5.09V834c9.11.05,18.21-.09,27.32.05a2.93,2.93,0,0,1,3.29,3.25c.14,16.77,0,33.56.09,50.33-.09,1.72.17,3.63-.83,5.15-1.24.89-2.85.78-4.3.84-8.52,0-17,0-25.56,0v6.81h-5.32c-13-2.37-26-4.54-38.94-6.81q0-29.8,0-59.59c13.05-2.28,26.11-4.5,39.17-6.83Z" transform="translate(-575.97 -827.22)"/><path class="b" d="M620.24,836.59h28.1v54.49h-28.1v-6.81h22.14v-3.41H620.24v-4.26h22.14V873.2H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24V846h22.14v-3.41H620.24Zm-26.67,15c1.62-.09,3.24-.16,4.85-.25,1.13,5.75,2.29,11.49,3.52,17.21,1-5.91,2-11.8,3.06-17.7,1.7-.06,3.41-.15,5.1-.26-1.92,8.25-3.61,16.57-5.71,24.77-1.42.74-3.55,0-5.24.09-1.13-5.64-2.45-11.24-3.47-16.9-1,5.5-2.29,10.95-3.43,16.42q-2.45-.13-4.92-.3c-1.41-7.49-3.07-14.93-4.39-22.44l4.38-.18c.88,5.42,1.87,10.82,2.64,16.25,1.2-5.57,2.43-11.14,3.62-16.71Z" transform="translate(-575.97 -827.22)"/></svg> '+t.language.translate("Word Paste Detected")+"</h4>",r=(a='<div class="fr-word-paste-modal" style="padding: 20px 20px 10px 20px;">',a+='<p style="text-align: left;">'+t.language.translate("The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?")+"</p>",a+='<div style="text-align: right; margin-top: 50px;"><button class="fr-remove-word fr-command">'+t.language.translate("Clean")+'</button> <button class="fr-keep-word fr-command">'+t.language.translate("Keep")+"</button></div>",a+="</div>"),n=t.modals.create(h,i,r),l=n.$body;c=n.$modal,n.$modal.addClass("fr-middle"),t.events.bindClick(l,"button.fr-remove-word",function(){(c.data("instance")||t).wordPaste.clean()}),t.events.bindClick(l,"button.fr-keep-word",function(){(c.data("instance")||t).wordPaste.clean(!0)}),t.events.$on(e(t.o_win),"resize",function(){t.modals.resize(h)})}var a;t.modals.show(h),t.modals.resize(h)}():i(t.opts.wordPasteKeepFormatting),!1})},clean:i}}});