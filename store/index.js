export const state = () => ({
    locales: ['en', 'ca', 'fr', 'es'],
    locale: 'ca'
  })
  
  export const mutations = {
    SET_LANG (state, locale) {
      if (state.locales.includes(locale)) {
        state.locale = locale
      }
    }
  }
  