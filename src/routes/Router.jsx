import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DocumentTitle from '@/routes/Title';
import LoadingBar from '@/components/LoadingBar';
import '@/assets/style/index.css';

const NotFound = lazy(() => import('@/pages/NotFound'))
const Home = lazy(() => import('@/pages/Home'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const SignIn = lazy(() => import('@/pages/SignIn'));
const Galery = lazy(() => import('@/pages/Galery'));

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
            path="/daftar"
            element={
              <DocumentTitle title="Daftar Akun - Batique">
                <SignUp />
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
