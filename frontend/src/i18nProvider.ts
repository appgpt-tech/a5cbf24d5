// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"":"","id":"id"}},"Cards":{"name":"Cards","fields":{"":"","id":"id"}},"Sets":{"name":"Sets","fields":{"":"","id":"id"}},"Inventory":{"name":"Inventory","fields":{"":"","id":"id"}},"Wishlist":{"name":"Wishlist","fields":{"":"","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Users (fr)","fields":{"":" (fr)","id":"id"}},"Cards":{"name":"Cards (fr)","fields":{"":" (fr)","id":"id"}},"Sets":{"name":"Sets (fr)","fields":{"":" (fr)","id":"id"}},"Inventory":{"name":"Inventory (fr)","fields":{"":" (fr)","id":"id"}},"Wishlist":{"name":"Wishlist (fr)","fields":{"":" (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    