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
import Cvsivu from './components/portfolioSara/cvsivu';
import Projektisivu from './components/portfolioSara/projektisivu';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/first' element={<Cvsivu />} />
          <Route path='/example' element={<Projektisivu />} />
        </Routes>
      </main>
      <header>
        <Navbar />
      </header>
    </BrowserRouter>
  </React.StrictMode>
)

