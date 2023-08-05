// import { useState } from 'react'
// import reactLogo from '@/assets/img/react.svg'
// import viteLogo from '/vite.svg'
// import '@/assets/style/App.css'
// import Radio from '@/components/Radio'
// import Checkbox from '@/components/Checkbox'
// import Button from '@/components/Button'

import Galery from '@/pages/Galery';

// function App() {
//   const [count, setCount] = useState(0)

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
  // const [count, setCount] = useState(0)

  return (
    <>
      <Galery/>
    </>
  )
}

export default App
