import i18next from 'i18next';
import AsyncStorage from '@react-native-community/async-storage';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';
import en from './en/global.json';
import hy from './hy/global.json';
import ru from './ru/global.json';

let langRegionLocale = 'en_US';

if (Platform.OS === 'android') {
    langRegionLocale = NativeModules.I18nManager.localeIdentifier || 'en';
} else if (Platform.OS === 'ios') {
    langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || 'en';
}

let languageLocale = langRegionLocale.substring(0, 2);

if (languageLocale !== 'en') {
    languageLocale = 'en';
}

AsyncStorage.getItem('locale').then(locale => {
    const defaultLang = locale || languageLocale;

    i18next.use(initReactI18next).init({
        interpolation: {
            escapeValue: false,
        },
        lng: defaultLang,
        resources: {
            en: {
                translation: en,
            },
            ru: {
                translation: ru,
            },
            hy: {
                translation: hy,
            },
        },
    });
});

export default i18next;
