import { useEffect } from 'react';
import nProgress from 'nprogress';
import '@/assets/style/LoadingBar.css';

export default function LoadingBar() {
  useEffect(() => {
    nProgress.configure({
      parent: 'nav',
      showSpinner: false,
      minimum: 0.15,
    });
    nProgress.start();
    return () => {
      nProgress.done();
    };
  });

  return null;
}
