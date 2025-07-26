import { scrollToElement } from '../utils/helpers';

/**
 * Hook for scroll-related functionality
 * @param {React.RefObject} contactRef - Reference to contact section
 * @returns {Object} Scroll utilities
 */
const useScrollBehavior = (contactRef) => {
  const scrollToContact = () => {
    scrollToElement(contactRef);
  };

  return {
    scrollToContact,
    scrollToElement,
  };
};

export default useScrollBehavior;