import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
// import styles from './index.module.scss'
import Navbar from './components/navbar/navbar';
import "./index.module.scss"
import Cvsivu from './components/portfolioSara/cvsivu';
import MyGithubRepos from './components/portfolioSara/github/github';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      {/* <header>
        <Navbar />
      </header> */}
      {/* <main> */}
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Cv' element={<Cvsivu />} />
          <Route path='/Osaaminen' element={<MyGithubRepos />} />
        </Routes>
      {/* </main> */}
    </HashRouter>
  </React.StrictMode>
)

