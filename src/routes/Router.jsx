import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DocumentTitle from '@/routes/Title';
import '@/assets/style/index.css';

const Home = lazy(() => import('@/pages/Home'));
const Galery = lazy(() => import('@/pages/Galery'));
const Artikel = lazy(() => import('@/pages/artikel'));
const DetailArtikel = lazy(() => import('@/pages/detailartikel'));
import PrivateRoute from '@/routes/PrivateRoute';
import artikel from '@/pages/artikel';

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
              <PrivateRoute
                element={
                  <DocumentTitle title="Galery">
                    <Galery />
                  </DocumentTitle>
                }
              />
            }
          />
          <Route
            path="/artikel"
            element={
              <DocumentTitle title="Artikel">
              <Artikel />
              </DocumentTitle>
            }
          />
          <Route
            path={`/artikel/:index`}
            element={
              <DocumentTitle title="detail Artikel">
              <DetailArtikel />
              </DocumentTitle>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

