/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,a){return a===undefined&&(a="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(a)}:t(window.jQuery)}(function(i){i.extend(i.FE.DEFAULTS,{paragraphStyles:{"fr-text-gray":"Gray","fr-text-bordered":"Bordered","fr-text-spaced":"Spaced","fr-text-uppercase":"Uppercase"},paragraphMultipleStyles:!0}),i.FE.PLUGINS.paragraphStyle=function(o){return{_init:function(){},apply:function(e,a,t){void 0===a&&(a=o.opts.paragraphStyles),void 0===t&&(t=o.opts.paragraphMultipleStyles);var r="";t||((r=Object.keys(a)).splice(r.indexOf(e),1),r=r.join(" ")),o.selection.save(),o.html.wrap(!0,!0,!0,!0),o.selection.restore();var n=o.selection.blocks();o.selection.save();for(var s=i(n[0]).hasClass(e),l=0;l<n.length;l++)i(n[l]).removeClass(r).toggleClass(e,!s),i(n[l]).hasClass("fr-temp-div")&&i(n[l]).removeClass("fr-temp-div"),""===i(n[l]).attr("class")&&i(n[l]).removeAttr("class");o.html.unwrap(),o.selection.restore()},refreshOnShow:function(e,a){var t=o.selection.blocks();if(t.length){var r=i(t[0]);a.find(".fr-command").each(function(){var e=i(this).data("param1"),a=r.hasClass(e);i(this).toggleClass("fr-active",a).attr("aria-selected",a)})}}}},i.FE.RegisterCommand("paragraphStyle",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',a=this.opts.paragraphStyles;for(var t in a)a.hasOwnProperty(t)&&(e+='<li role="presentation"><a class="fr-command '+t+'" tabIndex="-1" role="option" data-cmd="paragraphStyle" data-param1="'+t+'" title="'+this.language.translate(a[t])+'">'+this.language.translate(a[t])+"</a></li>");return e+="</ul>"},title:"Paragraph Style",callback:function(e,a){this.paragraphStyle.apply(a)},refreshOnShow:function(e,a){this.paragraphStyle.refreshOnShow(e,a)},plugin:"paragraphStyle"}),i.FE.DefineIcon("paragraphStyle",{NAME:"magic"})});
