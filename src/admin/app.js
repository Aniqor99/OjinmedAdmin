import NewLogo from './extensions/logo.png'
import Favicon from './extensions/favicon.ico'
const myColor = '#fff'
const selectColor = "#ef5aa1"
const config = {
  auth: {
    logo: NewLogo,
  },
  menu: {
    logo: NewLogo,
  },
  head: {
    favicon: Favicon,
  },
  tutorials: false,
  notifications: { release: false },
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'OJINMED',
      'app.components.LeftMenu.navbrand.workplace': 'Тавтай морил',
      'global.content-manager': 'Агуулга',
      'global.plugins.upload': 'Зураг нэмэх',
      'Media Library': 'Зураг',
      'Auth.form.welcome.title': 'Тавтай морил',
      'Auth.form.welcome.subtitle': 'Бүртгэлээрэй нэвтрээд ороорой',
      'Auth.form.button.login': 'Нэвтрэх',
      'Auth.link.forgot-password': 'Нууц үгээ мартсан уу?',
      'Auth.form.rememberMe.label': 'Намайг санах',
      'Password': 'Нууц үг',
      'global.password': 'Нууц үг',
      'global.plugins.email': 'Имэйл',
      'Auth.form.email.label': 'Имэйл'
    },
  },
};

// path: ./my-app/src/admin/app.js


const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
