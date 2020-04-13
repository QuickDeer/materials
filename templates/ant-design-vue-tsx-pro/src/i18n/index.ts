import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './en';
import cn from './cn';
import defaultLanguage from '@/i18n/default';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: window.navigator.language,
  fallbackLocale: defaultLanguage,
  messages: {en, cn},
  silentTranslationWarn: true
})

const translate = (key: string) => {
  if (!key) {
    return '';
  }
  return i18n.t(key);
};

export { i18n, translate };
