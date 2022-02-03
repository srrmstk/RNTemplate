import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import { I18nManager } from 'react-native';
// import * as RNLocalize from 'react-native-localize';
import languagesList from './list';

// import ar from './ar.json'
// import bn from './bn.json'
// import cs from './cs.json'
// import de from './de.json'
import en from './en.json';
// import es from './es.json'
// import fr from './fr.json'
// import hi from './hi.json'
// import id from './id.json'
// import it from './it.json'
// import ja from './ja.json'
// import km from './km.json'
// import ko from './ko.json'
// import ms from './ms.json'
// import my from './my.json'
// import pt from './pt.json'
import ru from './ru.json';
// import th from './th.json'
// import tl from './tl.json'
// import tr from './tr.json'
// import uk from './uk.json'
// import uz from './uz.json'
// import zh from './zh.json'

const defaultLang = { langTag: 'en', isRTL: false };
const localesList = {
  // ar,
  // bn,
  // cs,
  // de,
  en,
  // es,
  // fr,
  // hi,
  // id,
  // it,
  // ja,
  // km,
  // ko,
  // ms,
  // my,
  // pt,
  ru,
  // th,
  // tl,
  // tr,
  // uk,
  // uz,
  // zh,
};

i18n.defaultLocale = defaultLang.langTag;
I18nManager.forceRTL(defaultLang.isRTL);

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

// export const getLocales = () => {
//   const locales = RNLocalize.getLocales();
//   if (Array.isArray(locales)) {
//     return languagesList[locales[0].languageCode] ? locales[0].languageCode : 'en';
//   }
//   return null;
// };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setLocale = (language) => {
  const { langTag, isRTL } = languagesList[language] || defaultLang;
  translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.translations = { [langTag]: localesList[langTag] };
  i18n.locale = langTag;
};
