import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './en';
import cn from './cn';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: window.navigator.language,
  fallbackLocale: 'en',
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
