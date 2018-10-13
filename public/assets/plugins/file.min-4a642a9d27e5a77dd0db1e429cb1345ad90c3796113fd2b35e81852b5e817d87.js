/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,i){return i===undefined&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(i)}:e(window.jQuery)}(function(e){e.extend(e.FE.POPUP_TEMPLATES,{"file.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_PROGRESS_BAR_]"}),e.extend(e.FE.DEFAULTS,{fileUpload:!0,fileUploadURL:null,fileUploadParam:"file",fileUploadParams:{},fileUploadToS3:!1,fileUploadMethod:"POST",fileMaxSize:10485760,fileAllowedTypes:["*"],fileInsertButtons:["fileBack","|"],fileUseSelectedText:!1}),e.FE.PLUGINS.file=function(t){function i(){var e=t.popups.get("file.insert");e||(e=c()),e.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),e.find(".fr-file-progress-bar-layer").addClass("fr-active"),e.find(".fr-buttons").hide(),o(t.language.translate("Uploading"),0)}function r(e){var i=t.popups.get("file.insert");i&&(i.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),i.find(".fr-file-progress-bar-layer").removeClass("fr-active"),i.find(".fr-buttons").show(),e&&(t.events.focus(),t.popups.hide("file.insert")))}function o(e,i){var r=t.popups.get("file.insert");if(r){var o=r.find(".fr-file-progress-bar-layer");o.find("h3").text(e+(i?" "+i+"%":"")),o.removeClass("fr-error"),i?(o.find("div").removeClass("fr-indeterminate"),o.find("div > span").css("width",i+"%")):o.find("div").addClass("fr-indeterminate")}}function n(e,i,r){t.edit.on(),t.events.focus(!0),t.selection.restore(),t.opts.fileUseSelectedText&&t.selection.text().length&&(i=t.selection.text()),t.html.insert('<a href="'+e+'" target="_blank" id="fr-inserted-file" class="fr-file">'+i+"</a>");var o=t.$el.find("#fr-inserted-file");o.removeAttr("id"),t.popups.hide("file.insert"),t.undo.saveStep(),h(),t.events.trigger("file.inserted",[o,r])}function a(i){var r=this.status,o=this.response,a=this.responseXML,s=this.responseText;try{if(t.opts.fileUploadToS3)if(201==r){var l=function(i){try{var r=e(i).find("Location").text(),o=e(i).find("Key").text();return!1===t.events.trigger("file.uploadedToS3",[r,o,i],!0)?(t.edit.on(),!1):r}catch(a){return f(w,i),!1}}(a);l&&n(l,i,o||a)}else f(w,o||a);else if(200<=r&&r<300){var p=function(e){try{if(!1===t.events.trigger("file.uploaded",[e],!0))return t.edit.on(),!1;var i=JSON.parse(e);return i.link?i:(f(y,e),!1)}catch(o){return f(w,e),!1}}(s);p&&n(p.link,i,o||s)}else f(U,o||s)}catch(u){f(w,o||s)}}function s(){f(w,this.response||this.responseText||this.responseXML)}function l(e){if(e.lengthComputable){var i=e.loaded/e.total*100|0;o(t.language.translate("Uploading"),i)}}function f(e,r){t.edit.on(),function(e){i();var r=t.popups.get("file.insert").find(".fr-file-progress-bar-layer");r.addClass("fr-error");var o=r.find("h3");o.text(e),t.events.disableBlur(),o.focus()}(t.language.translate("Something went wrong. Please try again.")),t.events.trigger("file.error",[{code:e,message:E[e]},r])}function p(){t.edit.on(),r(!0)}function d(e){if(void 0!==e&&0<e.length){if(!1===t.events.trigger("file.beforeUpload",[e]))return!1;var r,o=e[0];if((null===t.opts.fileUploadURL||t.opts.fileUploadURL==b)&&!t.opts.fileUploadToS3)return v=o,(g=new FileReader).addEventListener("load",function(){for(var e=g.result,i=atob(g.result.split(",")[1]),r=[],o=0;o<i.length;o++)r.push(i.charCodeAt(o));e=window.URL.createObjectURL(new Blob([new Uint8Array(r)],{type:v.type})),t.file.insert(e,v.name,null)},!1),i(),g.readAsDataURL(v),!1;if(o.size>t.opts.fileMaxSize)return f(S),!1;if(t.opts.fileAllowedTypes.indexOf("*")<0&&t.opts.fileAllowedTypes.indexOf(o.type.replace(/file\//g,""))<0)return f(C),!1;if(t.drag_support.formdata&&(r=t.drag_support.formdata?new FormData:null),r){var n;if(!1!==t.opts.fileUploadToS3)for(n in r.append("key",t.opts.fileUploadToS3.keyStart+(new Date).getTime()+"-"+(o.name||"untitled")),r.append("success_action_status","201"),r.append("X-Requested-With","xhr"),r.append("Content-Type",o.type),t.opts.fileUploadToS3.params)t.opts.fileUploadToS3.params.hasOwnProperty(n)&&r.append(n,t.opts.fileUploadToS3.params[n]);for(n in t.opts.fileUploadParams)t.opts.fileUploadParams.hasOwnProperty(n)&&r.append(n,t.opts.fileUploadParams[n]);r.append(t.opts.fileUploadParam,o);var d=t.opts.fileUploadURL;t.opts.fileUploadToS3&&(d=t.opts.fileUploadToS3.uploadURL?t.opts.fileUploadToS3.uploadURL:"https://"+t.opts.fileUploadToS3.region+".amazonaws.com/"+t.opts.fileUploadToS3.bucket);var u=t.core.getXHR(d,t.opts.fileUploadMethod);u.onload=function(){a.call(u,o.name)},u.onerror=s,u.upload.onprogress=l,u.onabort=p,i();var c=t.popups.get("file.insert");c&&c.off("abortUpload").on("abortUpload",function(){4!=u.readyState&&u.abort()}),u.send(r)}}var v,g}function u(){r()}function c(i){if(i)return t.popups.onHide("file.insert",u),!0;var r;t.opts.fileUpload||t.opts.fileInsertButtons.splice(t.opts.fileInsertButtons.indexOf("fileUpload"),1),r='<div class="fr-buttons">'+t.button.buildList(t.opts.fileInsertButtons)+"</div>";var o="";t.opts.fileUpload&&(o='<div class="fr-file-upload-layer fr-layer fr-active" id="fr-file-upload-layer-'+t.id+'"><strong>'+t.language.translate("Drop file")+"</strong><br>("+t.language.translate("or click")+')<div class="fr-form"><input type="file" name="'+t.opts.fileUploadParam+'" accept="'+(0<=t.opts.fileAllowedTypes.indexOf("*")?"/":"")+t.opts.fileAllowedTypes.join(", ").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-file-upload-layer-'+t.id+'" role="button"></div></div>');var n,a={buttons:r,upload_layer:o,progress_bar:'<div class="fr-file-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="fileDismissError" tabIndex="2" role="button">OK</button></div></div>'},s=t.popups.create("file.insert",a);return n=s,t.events.$on(n,"dragover dragenter",".fr-file-upload-layer",function(){return e(this).addClass("fr-drop"),!1},!0),t.events.$on(n,"dragleave dragend",".fr-file-upload-layer",function(){return e(this).removeClass("fr-drop"),!1},!0),t.events.$on(n,"drop",".fr-file-upload-layer",function(i){i.preventDefault(),i.stopPropagation(),e(this).removeClass("fr-drop");var r=i.originalEvent.dataTransfer;r&&r.files&&(n.data("instance")||t).file.upload(r.files)},!0),t.helpers.isIOS()&&t.events.$on(n,"touchstart",'.fr-file-upload-layer input[type="file"]',function(){e(this).trigger("click")}),t.events.$on(n,"change",'.fr-file-upload-layer input[type="file"]',function(){if(this.files){var i=n.data("instance")||t;i.events.disableBlur(),n.find("input:focus").blur(),i.events.enableBlur(),i.file.upload(this.files)}e(this).val("")},!0),s}function v(e){t.node.hasClass(e,"fr-file")}function g(r){var o=r.originalEvent.dataTransfer;if(o&&o.files&&o.files.length){var n=o.files[0];if(n&&"undefined"!=typeof n.type){if(n.type.indexOf("image")<0){if(!t.opts.fileUpload)return r.preventDefault(),r.stopPropagation(),!1;t.markers.remove(),t.markers.insertAtPoint(r.originalEvent),t.$el.find(".fr-marker").replaceWith(e.FE.MARKERS),t.popups.hideAll();var a=t.popups.get("file.insert");return a||(a=c()),t.popups.setContainer("file.insert",t.$sc),t.popups.show("file.insert",r.originalEvent.pageX,r.originalEvent.pageY),i(),d(o.files),r.preventDefault(),r.stopPropagation(),!1}}else n.type.indexOf("image")<0&&(r.preventDefault(),r.stopPropagation())}}function h(){var e,i=Array.prototype.slice.call(t.el.querySelectorAll("a.fr-file")),r=[];for(e=0;e<i.length;e++)r.push(i[e].getAttribute("href"));if(m)for(e=0;e<m.length;e++)r.indexOf(m[e].getAttribute("href"))<0&&t.events.trigger("file.unlink",[m[e]]);m=i}var m,b="https://i.froala.com/upload",y=2,U=3,w=4,S=5,C=6,E={1:"File cannot be loaded from the passed link."};return E[y]="No link in upload response.",E[U]="Error during file upload.",E[w]="Parsing response failed.",E[S]="File is too large.",E[C]="File file type is invalid.",E[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",{_init:function(){t.events.on("drop",g),t.events.$on(t.$win,"keydown",function(i){var r=i.which,o=t.popups.get("file.insert");o&&r==e.FE.KEYCODE.ESC&&o.trigger("abortUpload")}),t.events.on("destroy",function(){var e=t.popups.get("file.insert");e&&e.trigger("abortUpload")}),t.events.on("link.beforeRemove",v),t.$wp&&(h(),t.events.on("contentChanged",h)),c(!0)},showInsertPopup:function(){var e=t.$tb.find('.fr-command[data-cmd="insertFile"]'),i=t.popups.get("file.insert");if(i||(i=c()),r(),!i.hasClass("fr-active"))if(t.popups.refresh("file.insert"),t.popups.setContainer("file.insert",t.$tb),e.is(":visible")){var o=e.offset().left+e.outerWidth()/2,n=e.offset().top+(t.opts.toolbarBottom?10:e.outerHeight()-10);t.popups.show("file.insert",o,n,e.outerHeight())}else t.position.forSelection(i),t.popups.show("file.insert")},upload:d,insert:n,back:function(){t.events.disableBlur(),t.selection.restore(),t.events.enableBlur(),t.popups.hide("file.insert"),t.toolbar.showInline()},hideProgressBar:r}},e.FE.DefineIcon("insertFile",{NAME:"file-o",FA5NAME:"file"}),e.FE.RegisterCommand("insertFile",{title:"Upload File",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("file.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("file.insert")):this.file.showInsertPopup()},plugin:"file"}),e.FE.DefineIcon("fileBack",{NAME:"arrow-left"}),e.FE.RegisterCommand("fileBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.file.back()},refresh:function(e){this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),e.FE.RegisterCommand("fileDismissError",{title:"OK",callback:function(){this.file.hideProgressBar(!0)}})});