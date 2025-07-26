import useWindowSize from './useWindowSize';
import { isMobile, isTablet, isDesktop, getResponsiveClass } from '../utils/helpers';

/**
 * Hook for responsive design utilities
 * @returns {Object} Responsive utilities
 */
const useResponsive = () => {
  const { width, height } = useWindowSize();

  return {
    width,
    height,
    isMobile: isMobile(width),
    isTablet: isTablet(width),
    isDesktop: isDesktop(width),
    responsiveClass: getResponsiveClass(width),
  };
};

export default useResponsive;