import '@/assets/style/App.css';
import Layout from '@/components/Layout';
import Router from '@/routes/Router';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Layout />
      <Router />
      <Footer />
    </>
  );
}

export default App;
