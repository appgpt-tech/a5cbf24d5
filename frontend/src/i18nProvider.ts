// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"userName":"User Name","email":"Email","id":"id"}},"Cards":{"name":"Cards","fields":{"cardName":"Card Name","serial":"Serial","type":"Type","rarity":"Rarity","condition":"Condition","imageUrl":"Image Url","set":"Set","id":"id"}},"Sets":{"name":"Sets","fields":{"setName":"Set Name","releaseDate":"Release Date","totalCards":"Total Cards","id":"id"}},"Inventory":{"name":"Inventory","fields":{"user":"User","card":"Card","dateAdded":"Date Added","id":"id"}},"Wishlist":{"name":"Wishlist","fields":{"user":"User","card":"Card","dateInserted":"Date Inserted","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Users (fr)","fields":{"userName":"User Name (fr)","email":"Email (fr)","id":"id"}},"Cards":{"name":"Cards (fr)","fields":{"cardName":"Card Name (fr)","serial":"Serial (fr)","type":"Type (fr)","rarity":"Rarity (fr)","condition":"Condition (fr)","imageUrl":"Image Url (fr)","set":"Set (fr)","id":"id"}},"Sets":{"name":"Sets (fr)","fields":{"setName":"Set Name (fr)","releaseDate":"Release Date (fr)","totalCards":"Total Cards (fr)","id":"id"}},"Inventory":{"name":"Inventory (fr)","fields":{"user":"User (fr)","card":"Card (fr)","dateAdded":"Date Added (fr)","id":"id"}},"Wishlist":{"name":"Wishlist (fr)","fields":{"user":"User (fr)","card":"Card (fr)","dateInserted":"Date Inserted (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    