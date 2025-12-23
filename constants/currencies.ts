/**
 * Currency configuration object containing default and supported currencies.
 *
 * @property {string} default - The default currency code (DOP).
 * @property {Object} supported - Object containing supported currencies organized by locale.
 * @property {Object} supported.es - Spanish locale currency configuration (Dominican Peso).
 * @property {string} supported.es.symbol - Currency symbol for Dominican Peso (RD$).
 * @property {string} supported.es.name - Full name of the currency (Dominican Peso).
 * @property {string} supported.es.code - ISO 4217 currency code (DOP).
 * @property {Object} supported.en - English locale currency configuration (United States Dollar).
 * @property {string} supported.en.symbol - Currency symbol for US Dollar ($).
 * @property {string} supported.en.name - Full name of the currency (United States Dollar).
 * @property {string} supported.en.code - ISO 4217 currency code (USD).
 */

export const currencies = {
  default: 'DOP',
  supported: {
    es: {
      symbol: 'RD$',
      name: 'Dominican Peso',
      code: 'DOP',
    },
    en: {
      symbol: '$',
      name: 'United States Dollar',
      code: 'USD',
    },
  },
};
