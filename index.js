let en = require('../i18n/i18n_en');
let fr = require('../i18n/i18n_fr');

let _ = {
  load: (i18n, lang) => {
    console.log(lang);
    let data;
    switch (lang) {
      case 'en':
        data = en;
        break;
      case 'fr':
        data = fr;
        break;
      default:
        throw (new Error('unsuported language: ' + lang));
    }
    console.log(JSON.stringify(data).substring(0, 300) + '...');
    return { loadI18n: i18n.loadI18n, selectedLanguage : lang ,...data };
  }
};

export let i18n = {
  loadI18n: function (language) {
    console.log(language);
    i18n = _.load(i18n,language);
  }
};
i18n.loadI18n('en');



