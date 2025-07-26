import { BREAKPOINTS } from './constants';

/**
 * Check if screen size is mobile
 * @param {number} width - Current window width
 * @returns {boolean}
 */
export const isMobile = (width) => width < BREAKPOINTS.mobile;

/**
 * Check if screen size is tablet
 * @param {number} width - Current window width
 * @returns {boolean}
 */
export const isTablet = (width) => width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;

/**
 * Check if screen size is desktop
 * @param {number} width - Current window width
 * @returns {boolean}
 */
export const isDesktop = (width) => width >= BREAKPOINTS.desktop;

/**
 * Get responsive class name based on screen width
 * @param {number} width - Current window width
 * @returns {string}
 */
export const getResponsiveClass = (width) => {
  if (isMobile(width)) return 'mobile';
  if (isTablet(width)) return 'tablet';
  return 'desktop';
};

/**
 * Scroll to a specific element smoothly
 * @param {React.RefObject} ref - Reference to the target element
 */
export const scrollToElement = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Generate Google Maps static map URL
 * @param {Object} config - Map configuration
 * @param {number} width - Map width
 * @param {number} height - Map height
 * @param {number} zoom - Map zoom level
 * @returns {string}
 */
export const generateMapUrl = (config, width, height, zoom = 16) => {
  const { apiKey, mapId, location } = config;
  return `https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=${location}&scale=2&zoom=${zoom}&size=${width}x${height}&maptype=roadmap&format=png&key=${apiKey}&map_id=${mapId}`;
};