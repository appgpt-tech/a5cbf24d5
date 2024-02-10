// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"userId":"User ID","email":"Email","name":"Name","id":"id"}},"Cards":{"name":"Cards","fields":{"cardId":"Card ID","setid":"Set ID","cardName":"Card Name","serial":"Serial","type":"Type","rarity":"Rarity","condition":"Condition","imageurl":"Image URL","id":"id"}},"Sets":{"name":"Sets","fields":{"setId":"Set ID","setname":"Set Name","releasedate":"Release Date","totalcards":"Total Cards","id":"id"}},"Inventory":{"name":"Inventory","fields":{"userId":"User ID","cardId":"Card ID","recordedDate":"Recorded Date","id":"id"}},"Wishlist":{"name":"Wishlist","fields":{"userId":"User ID","cardId":"Card ID","insertedDate":"Inserted Date","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Utilisateurs","fields":{"userId":"ID utilisateur","email":"Courriel","name":"Nom","id":"id"}},"Cards":{"name":"Cartes","fields":{"cardId":"ID de carte","setid":"ID de série","cardName":"Nom de la carte","serial":"Série","type":"Type","rarity":"Rareté","condition":"État","imageurl":"URL de l'image","id":"id"}},"Sets":{"name":"Séries","fields":{"setId":"ID de série","setname":"Nom de la série","releasedate":"Date de sortie","totalcards":"Total des cartes","id":"id"}},"Inventory":{"name":"Inventaire","fields":{"userId":"ID utilisateur","cardId":"ID de carte","recordedDate":"Date d'enregistrement","id":"id"}},"Wishlist":{"name":"Liste de souhaits","fields":{"userId":"ID utilisateur","cardId":"ID de carte","insertedDate":"Date d'insertion","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    