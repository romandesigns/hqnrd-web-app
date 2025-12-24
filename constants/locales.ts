import { languageTag } from "./languageTag";

/**
 * Array of locale codes extracted from language tags.
 * Each language tag is split by hyphen and only the first part (language code) is retained.
 *
 * @example
 * If languageTag contains ['en-US', 'es-ES'], locales will be ['en', 'es']
 */

export const locales = languageTag.map((l) => l.split("-")[0]);
