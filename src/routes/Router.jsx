import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DocumentTitle from '@/routes/Title';
import '@/assets/style/index.css';

const Home = lazy(() => import('@/pages/Home'));
const Artikel = lazy(() => import('@/pages/artikel'));

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
            path="/artikel"
            element={
              <DocumentTitle title="Artikel">
                <Artikel />
              </DocumentTitle>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
