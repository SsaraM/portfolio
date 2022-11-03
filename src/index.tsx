import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import styles from './index.module.scss'
import Navbar from './components/navbar/navbar';
import "./index.module.scss"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='/example' element={<SomeExampleComponent />} />
        <Route path='/first' element={<MyFirstComponent />} /> */}
      </Routes>
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>
)

