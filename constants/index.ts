import { bedTypes } from './bedsTypes';
import { branding } from './branding';
import { categories } from './categories';
import { contact } from './contact';
import { currencies } from './currencies';
import { flags } from './flags';
import { languageTag } from './languageTag';
import { locales } from './locales';
import { mimetypes } from './mimetypes';
import { orientation } from './orientation';
import { roles } from './roles';
import { social } from './social';
import { devSlogan } from './devSlogan';
import { profiles } from './profiles';

/**
 * Main configuration object containing all application constants and settings for HQNRD.
 *
 * @property {Object} LOCALES - Available locales/languages supported by the application
 * @property {Object} LOCALEFLAGS - Flag icons corresponding to each locale
 * @property {Object} LANGUAGETAG - Language tags for internationalization
 * @property {Object} BRANDING - Branding configuration including logos, colors, and brand assets
 * @property {Object} CONTACT - Contact information for the hotel
 * @property {Object} SOCIAL - Social media links and handles
 * @property {Object} CATEGORIES - Room and service categories
 * @property {Object} CURRENCIES - Supported currencies and exchange rates
 * @property {Object} ROLES - User roles and permissions
 * @property {Object} MIMETYPE - Supported MIME types for file uploads
 * @property {Object} ORIENTATION - Screen/image orientation settings
 * @property {Object} BEDTYPES - Available bed type configurations
 *
 * @constant
 */

export const HQNRD = {
  LOCALES: locales,
  LOCALEFLAGS: flags,
  LANGUAGETAG: languageTag,
  BRANDING: branding,
  CONTACT: contact,
  SOCIAL: social,
  CATEGORIES: categories,
  CURRENCIES: currencies,
  ROLES: roles,
  MIMETYPE: mimetypes,
  ORIENTATION: orientation,
  BEDTYPES: bedTypes,
  DEVSLOGAN: devSlogan,
  PROFILES: profiles,
};
