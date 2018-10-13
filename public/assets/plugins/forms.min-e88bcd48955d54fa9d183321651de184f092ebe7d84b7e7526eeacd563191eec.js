/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,o){return o===undefined&&(o="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(o)}:t(window.jQuery)}(function(t){t.extend(t.FE.POPUP_TEMPLATES,{"forms.edit":"[_BUTTONS_]","forms.update":"[_BUTTONS_][_TEXT_LAYER_]"}),t.extend(t.FE.DEFAULTS,{formEditButtons:["inputStyle","inputEdit"],formStyles:{"fr-rounded":"Rounded","fr-large":"Large"},formMultipleStyles:!0,formUpdateButtons:["inputBack","|"]}),t.FE.PLUGINS.forms=function(e){function o(o){o.preventDefault(),e.selection.clear(),t(this).data("mousedown",!0)}function n(e){t(this).data("mousedown")&&(e.stopPropagation(),t(this).removeData("mousedown"),i(d=this)),e.preventDefault()}function u(){e.$el.find("input, textarea, button").removeData("mousedown")}function s(){t(this).removeData("mousedown")}function r(){return d||null}function i(o){var n=e.popups.get("forms.edit");n||(n=function(){var t="";0<e.opts.formEditButtons.length&&(t='<div class="fr-buttons">'+e.button.buildList(e.opts.formEditButtons)+"</div>");var o={buttons:t},n=e.popups.create("forms.edit",o);return e.$wp&&e.events.$on(e.$wp,"scroll.link-edit",function(){r()&&e.popups.isVisible("forms.edit")&&i(r())}),n}());var u=t(d=o);e.popups.refresh("forms.edit"),e.popups.setContainer("forms.edit",e.$sc);var s=u.offset().left+u.outerWidth()/2,a=u.offset().top+u.outerHeight();e.popups.show("forms.edit",s,a,u.outerHeight())}function a(){var o=e.popups.get("forms.update"),n=r();if(n){var u=t(n);u.is("button")?o.find('input[type="text"][name="text"]').val(u.text()):o.find('input[type="text"][name="text"]').val(u.attr("placeholder"))}o.find('input[type="text"][name="text"]').trigger("change")}function p(){d=null}function f(t){if(t)return e.popups.onRefresh("forms.update",a),e.popups.onHide("forms.update",p),!0;var o="";1<=e.opts.formUpdateButtons.length&&(o='<div class="fr-buttons">'+e.button.buildList(e.opts.formUpdateButtons)+"</div>");var n="",u=0;n='<div class="fr-forms-text-layer fr-layer fr-active">',n+='<div class="fr-input-line"><input name="text" type="text" placeholder="Text" tabIndex="'+ ++u+'"></div>';var s={buttons:o,text_layer:n+='<div class="fr-action-buttons"><button class="fr-command fr-submit" data-cmd="updateInput" href="#" tabIndex="'+ ++u+'" type="button">'+e.language.translate("Update")+"</button></div></div>"};return e.popups.create("forms.update",s)}var d;return{_init:function(){e.events.$on(e.$el,e._mousedown,"input, textarea, button",o),e.events.$on(e.$el,e._mouseup,"input, textarea, button",n),e.events.$on(e.$el,"touchmove","input, textarea, button",s),e.events.$on(e.$el,e._mouseup,u),e.events.$on(e.$win,e._mouseup,u),f(!0),e.events.$on(e.$el,"submit","form",function(t){return t.preventDefault(),!1})},updateInput:function(){var o=e.popups.get("forms.update"),n=r();if(n){var u=t(n),s=o.find('input[type="text"][name="text"]').val()||"";s.length&&(u.is("button")?u.text(s):u.attr("placeholder",s)),e.popups.hide("forms.update"),i(n)}},getInput:r,applyStyle:function(o,n,u){void 0===n&&(n=e.opts.formStyles),void 0===u&&(u=e.opts.formMultipleStyles);var s=r();if(!s)return!1;if(!u){var i=Object.keys(n);i.splice(i.indexOf(o),1),t(s).removeClass(i.join(" "))}t(s).toggleClass(o)},showUpdatePopup:function(){var o=r();if(o){var n=t(o),u=e.popups.get("forms.update");u||(u=f()),e.popups.isVisible("forms.update")||e.popups.refresh("forms.update"),e.popups.setContainer("forms.update",e.$sc);var s=n.offset().left+n.outerWidth()/2,i=n.offset().top+n.outerHeight();e.popups.show("forms.update",s,i,n.outerHeight())}},showEditPopup:i,back:function(){e.events.disableBlur(),e.selection.restore(),e.events.enableBlur();var t=r();t&&e.$wp&&("BUTTON"==t.tagName&&e.selection.restore(),i(t))}}},t.FE.RegisterCommand("updateInput",{undo:!1,focus:!1,title:"Update",callback:function(){this.forms.updateInput()}}),t.FE.DefineIcon("inputStyle",{NAME:"magic"}),t.FE.RegisterCommand("inputStyle",{title:"Style",type:"dropdown",html:function(){var t='<ul class="fr-dropdown-list">',e=this.opts.formStyles;for(var o in e)e.hasOwnProperty(o)&&(t+='<li><a class="fr-command" tabIndex="-1" data-cmd="inputStyle" data-param1="'+o+'">'+this.language.translate(e[o])+"</a></li>");return t+"</ul>"},callback:function(t,e){var o=this.forms.getInput();o&&(this.forms.applyStyle(e),this.forms.showEditPopup(o))},refreshOnShow:function(e,o){var n=this.forms.getInput();if(n){var u=t(n);o.find(".fr-command").each(function(){var e=t(this).data("param1");t(this).toggleClass("fr-active",u.hasClass(e))})}}}),t.FE.DefineIcon("inputEdit",{NAME:"edit"}),t.FE.RegisterCommand("inputEdit",{title:"Edit Button",undo:!1,refreshAfterCallback:!1,callback:function(){this.forms.showUpdatePopup()}}),t.FE.DefineIcon("inputBack",{NAME:"arrow-left"}),t.FE.RegisterCommand("inputBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.forms.back()}}),t.FE.RegisterCommand("updateInput",{undo:!1,focus:!1,title:"Update",callback:function(){this.forms.updateInput()}})});