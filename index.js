let en = require('../i18n/i18n_en');
let fr = require('../i18n/i18n_fr');

export let i18n = {
  loadI18n: function (language) {
    console.log(language);
    i18n.selectedLanguage = language;
    switch (language) {
      case 'en':
        i18n = en;
        break;
      case 'fr':
        i18n = fr;
        break;
      default:
        throw (new Error('unsuported language: ' + language));
    }
    console.log(JSON.stringify(i18n).substring(0, 300) + '...');
  }
};

i18n.loadI18n('en');



