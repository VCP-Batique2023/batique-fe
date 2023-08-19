import '@/assets/style/App.css';
import Layout from '@/components/Layout';
import Router from '@/routes/Router';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Selamat Datang di Batique</h1>
//       <div className="card">
//         <Button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </Button>
//         <Radio name="gender" label="Male"/>
//         <Radio name="gender" label="Female"/>
//         <Checkbox name="confirmation" label="Privacy & Policy"/>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
function App() {
  const toastStyle = {
    style: {
      border: '1px solid #372b22',
      backgroundColor: '#f9f8f5',
      borderRadius: '8px',
      boxShadow: '0 6px 12px rgba(55, 43, 34, 0.1)',
      color: '#372b22',
    },
    success: {
      style: {
        border: '1px solid #19b33d',
        // boxShadow: '0 2px 10px rgba(25, 179, 61, 0.5)',
      },
      iconTheme: {
        primary: '#19b33d',
        secondary: '#f9f8f5',
      },
    },
    error: {
      style: {
        border: '1px solid #b31924',
        // boxShadow: '0 2px 10px rgba(179, 25, 36, 0.5)',
      },
      iconTheme: {
        primary: '#b31924',
        secondary: '#f9f8f5',
      },
    },
  };

  return (
    <>
    <div id="progressBar"/>
      <Toaster
        toastOptions={toastStyle}
        position="bottom-right"
        containerStyle={{
          bottom: 64
        }}
      />
      <Layout />
      <Router />
      <Footer />
    </>
  );
}

export default App;
