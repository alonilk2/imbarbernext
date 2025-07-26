import useResponsive from '../../hooks/useResponsive';
import { generateMapUrl } from '../../utils/helpers';
import { GOOGLE_MAPS_CONFIG, BREAKPOINTS } from '../../utils/constants';

/**
 * Responsive map component that adjusts size based on screen width
 */
const ResponsiveMap = ({ className = "", ...props }) => {
  const { width } = useResponsive();

  const getMapDimensions = () => {
    if (width < BREAKPOINTS.tablet) {
      return { width: 350, height: 400, zoom: 17 };
    } else if (width >= BREAKPOINTS.tablet && width <= BREAKPOINTS.desktop) {
      return { width: 150, height: 500, zoom: 16 };
    } else if (width >= BREAKPOINTS.desktop + 1 && width <= BREAKPOINTS.largeDesktop) {
      return { width: 250, height: 550, zoom: 16 };
    } else {
      return { width: 390, height: 800, zoom: 16 };
    }
  };

  const { width: mapWidth, height: mapHeight, zoom } = getMapDimensions();
  const mapUrl = generateMapUrl(GOOGLE_MAPS_CONFIG, mapWidth, mapHeight, zoom);

  return (
    <img
      width="100%"
      src={mapUrl}
      alt="Map"
      className={className}
      {...props}
    />
  );
};

export default ResponsiveMap;