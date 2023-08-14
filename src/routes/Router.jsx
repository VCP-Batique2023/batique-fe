import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DocumentTitle from '@/routes/Title';
import LoadingBar from '@/components/LoadingBar';
import '@/assets/style/index.css';

const NotFound = lazy(() => import('@/pages/NotFound'));
const Home = lazy(() => import('@/pages/Home'));
const Artikel = lazy(() => import('@/pages/artikel'));
const DetailArtikel = lazy(() => import('@/pages/detailartikel'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const SignIn = lazy(() => import('@/pages/SignIn'));
const Feeds = lazy(() => import('@/pages/Feeds'));

import PrivateRoute from '@/routes/PrivateRoute';

export default function Router() {
  return (
    <>
      <Suspense
        fallback={
          <main>
            <LoadingBar />
          </main>
        }
      >
        <Routes>
          <Route
            exact
            path="/"
            element={
              <DocumentTitle title="Selamat datang - Batique">
                <Home />
              </DocumentTitle>
            }
          />
          <Route
            exact
            path="/artikel"
            element={
              <DocumentTitle title="Batique - Artikel">
                <Artikel />
              </DocumentTitle>
            }
          />
          <Route
            path="/daftar"
            element={
              <DocumentTitle title="Daftar Akun - Batique">
                <SignUp />
              </DocumentTitle>
            }
          />
          <Route
            path={`/artikel/:index`}
            element={
              <DocumentTitle title="Batique - Artikel">
                <DetailArtikel />
              </DocumentTitle>
            }
          />
          <Route
            path="/masuk"
            element={
              <DocumentTitle title="Masuk - Batique">
                <SignIn />
              </DocumentTitle>
            }
          />
          <Route
            path="/feeds"
            element={
              <PrivateRoute
                element={
                  <DocumentTitle title="Feeds">
                    <Feeds />
                  </DocumentTitle>
                }
              />
            }
          />
          <Route
            path="*"
            element={
              <DocumentTitle title="Halaman tidak ada - Batique">
                <NotFound />
              </DocumentTitle>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
