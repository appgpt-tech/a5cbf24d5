// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"userId":"User Id","email":"Email","name":"Name","id":"id"}},"Cards":{"name":"Cards","fields":{"cardId":"Card Id","setId":"Set Id","cardName":"Card Name","serial":"Serial","type":"Type","rarity":"Rarity","condition":"Condition","imageUrl":"Image Url","id":"id"}},"Sets":{"name":"Sets","fields":{"setId":"Set Id","setName":"Set Name","releaseDate":"Release Date","totalCards":"Total Cards","id":"id"}},"Inventory":{"name":"Inventory","fields":{"userId":"User Id","cardId":"Card Id","recordedDate":"Recorded Date","id":"id"}},"Wishlist":{"name":"Wishlist","fields":{"userId":"User Id","cardId":"Card Id","insertedDate":"Inserted Date","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Users (fr)","fields":{"userId":"User Id (fr)","email":"Email (fr)","name":"Name (fr)","id":"id"}},"Cards":{"name":"Cards (fr)","fields":{"cardId":"Card Id (fr)","setId":"Set Id (fr)","cardName":"Card Name (fr)","serial":"Serial (fr)","type":"Type (fr)","rarity":"Rarity (fr)","condition":"Condition (fr)","imageUrl":"Image Url (fr)","id":"id"}},"Sets":{"name":"Sets (fr)","fields":{"setId":"Set Id (fr)","setName":"Set Name (fr)","releaseDate":"Release Date (fr)","totalCards":"Total Cards (fr)","id":"id"}},"Inventory":{"name":"Inventory (fr)","fields":{"userId":"User Id (fr)","cardId":"Card Id (fr)","recordedDate":"Recorded Date (fr)","id":"id"}},"Wishlist":{"name":"Wishlist (fr)","fields":{"userId":"User Id (fr)","cardId":"Card Id (fr)","insertedDate":"Inserted Date (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    