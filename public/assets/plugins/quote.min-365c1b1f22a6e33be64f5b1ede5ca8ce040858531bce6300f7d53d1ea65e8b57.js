/*!
 * froala_editor v2.8.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return t===undefined&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t)}:n(window.jQuery)}(function(i){i.FE.PLUGINS.quote=function(o){function r(e){for(;e.parentNode&&e.parentNode!=o.el;)e=e.parentNode;return e}return{apply:function(e){o.selection.save(),o.html.wrap(!0,!0,!0,!0),o.selection.restore(),"increase"==e?function(){var e,t=o.selection.blocks();for(e=0;e<t.length;e++)t[e]=r(t[e]);o.selection.save();var n=i("<blockquote>");for(n.insertBefore(t[0]),e=0;e<t.length;e++)n.append(t[e]);o.html.unwrap(),o.selection.restore()}():"decrease"==e&&function(){var e,t=o.selection.blocks();for(e=0;e<t.length;e++)"BLOCKQUOTE"!=t[e].tagName&&(t[e]=i(t[e]).parentsUntil(o.$el,"BLOCKQUOTE").get(0));for(o.selection.save(),e=0;e<t.length;e++)t[e]&&i(t[e]).replaceWith(t[e].innerHTML);o.html.unwrap(),o.selection.restore()}()}}},i.FE.RegisterShortcut(i.FE.KEYCODE.SINGLE_QUOTE,"quote","increase","'"),i.FE.RegisterShortcut(i.FE.KEYCODE.SINGLE_QUOTE,"quote","decrease","'",!0),i.FE.RegisterCommand("quote",{title:"Quote",type:"dropdown",options:{increase:"Increase",decrease:"Decrease"},callback:function(e,t){this.quote.apply(t)},plugin:"quote"}),i.FE.DefineIcon("quote",{NAME:"quote-left"})});
