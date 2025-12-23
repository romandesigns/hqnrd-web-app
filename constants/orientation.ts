/**
 * Configuration constants for image orientation and manipulation.
 *
 * @constant
 * @type {Object}
 * @property {Object} ZOOM - Zoom configuration settings
 * @property {number} ZOOM.ZOOMRATIO - The increment/decrement ratio for zoom operations (0.25 = 25% per step)
 * @property {number} ZOOM.ZOOMMAX - Maximum allowed zoom level (1.5 = 150%)
 * @property {number} ZOOM.ZOOMMIN - Minimum allowed zoom level (0.5 = 50%)
 * @property {Object} ROTATION - Rotation configuration settings
 * @property {number} ROTATION.RATIO - The increment/decrement ratio for rotation operations (0.25 = 25% per step)
 */

export const orientation = {
  ZOOM: {
    ZOOMRATIO: 0.25,
    ZOOMMAX: 1.5,
    ZOOMMIN: 0.5,
  },
  ROTATION: {
    RATIO: 0.25,
  },
};
