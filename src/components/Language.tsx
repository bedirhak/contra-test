import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-selector">
      <button
        className={`language-button ${i18n.language === 'tr' ? 'active' : ''}`}
        onClick={() => i18n.changeLanguage('tr')}
        title="Türkçe"
      >
        TR
      </button>
      <button
        className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => i18n.changeLanguage('en')}
        title="English"
      >
        EN
      </button>
      {/* <button
        className={`language-button ${i18n.language === 'ru' ? 'active' : ''}`}
        onClick={() => i18n.changeLanguage('ru')}
        title="Русский"
      >
        RU
      </button> */}
      <button
        className={`language-button ${i18n.language === 'zh' ? 'active' : ''}`}
        onClick={() => i18n.changeLanguage('zh')}
        title="简体中文 (Simplified Chinese)"
      >
        简
      </button>
      <button
        className={`language-button ${i18n.language === 'zh-HK' ? 'active' : ''}`}
        onClick={() => i18n.changeLanguage('zh-HK')}
        title="繁體中文 (Hong Kong Chinese)"
      >
        繁
      </button>
    </div>
  );
};

export default Language;