import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DocumentTitle from '@/routes/Title';
import '@/assets/style/index.css';

const Home = lazy(() => import('@/pages/Home'));
import Galery from '@/pages/Galery';

export default function Router() {
  return (
    <>
      <Suspense fallback={<main>Loading...</main>}>
        <Routes>
          <Route
            path="/"
            element={
              <DocumentTitle title="Selamat datang di Batique">
                <Home />
              </DocumentTitle>
            }
          />
          <Route
            path="/galery"
            element={
              <DocumentTitle title="Galery">
                <Galery />
              </DocumentTitle>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
