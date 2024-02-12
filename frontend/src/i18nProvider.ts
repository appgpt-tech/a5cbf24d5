// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"email":"Email","name":"Name","id":"id"}},"Cards":{"name":"Cards","fields":{"setname":"Setname","cardName":"Card Name","serial":"Serial","type":"Type","rarity":"Rarity","condition":"Condition","imageUrl":"Image Url","id":"id"}},"Sets":{"name":"Sets","fields":{"setId":"Set Id","setname":"Setname","releasedate":"Releasedate","totalcards":"Totalcards","id":"id"}},"Inventory":{"name":"Inventory","fields":{"userName":"User Name","cardName":"Card Name","recordedDate":"Recorded Date","id":"id"}},"Wishlist":{"name":"Wishlist","fields":{"userName":"User Name","cardName":"Card Name","insertedDate":"Inserted Date","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Users (fr)","fields":{"email":"Email (fr)","name":"Name (fr)","id":"id"}},"Cards":{"name":"Cards (fr)","fields":{"setname":"Setname (fr)","cardName":"Card Name (fr)","serial":"Serial (fr)","type":"Type (fr)","rarity":"Rarity (fr)","condition":"Condition (fr)","imageUrl":"Image Url (fr)","id":"id"}},"Sets":{"name":"Sets (fr)","fields":{"setId":"Set Id (fr)","setname":"Setname (fr)","releasedate":"Releasedate (fr)","totalcards":"Totalcards (fr)","id":"id"}},"Inventory":{"name":"Inventory (fr)","fields":{"userName":"User Name (fr)","cardName":"Card Name (fr)","recordedDate":"Recorded Date (fr)","id":"id"}},"Wishlist":{"name":"Wishlist (fr)","fields":{"userName":"User Name (fr)","cardName":"Card Name (fr)","insertedDate":"Inserted Date (fr)","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    