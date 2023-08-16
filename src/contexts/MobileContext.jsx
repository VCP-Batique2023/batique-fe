import {
  useContext,
  createContext,
  useSyncExternalStore,
  useCallback,
} from 'react';

const MobileContext = createContext();

function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener('change', callback);
      return () => {
        matchMedia.removeEventListener('change', callback);
      };
    },
    [query]
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error('useMediaQuery is a client-only hook');
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useMobile() {
  return useContext(MobileContext);
}

export function MobileProvider({ children }) {
  const isMobile = useMediaQuery('only screen and (max-width : 575px)');
  const isTablet = useMediaQuery(
    'only screen and (min-width : 576px) and (max-width : 991px)'
  );
  const isDesktop = useMediaQuery(
    'only screen and (min-width : 992px) and (max-width : 1399px)'
  );
  const isLargeDesktop = useMediaQuery('only screen and (min-width: 1400px)');

  const value = {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };

  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
}
