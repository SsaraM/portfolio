import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import styles from "./index.module.scss"
import Cvsivu from './components/portfolioSara/cvsivu';
import MyGithubRepos from './components/portfolioSara/github/github';
import { ModalContextProvider } from '@rintsin/common-components'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Index: React.FC = () => {
  return (
    <React.StrictMode>
      <ModalContextProvider>
        <div className={styles.container}>
          <Router>
            <div className={styles.wrap}>
              <Navbar />
              <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Cv' element={<Cvsivu />} />
                <Route path='/Osaaminen' element={<MyGithubRepos />} />
              </Routes>
            </div>
            <footer>
              <p>
              sara.mustapha26@gmail.com
              </p>
            </footer>
          </Router>
        </div>
      </ModalContextProvider>
    </React.StrictMode>
  )
}

root.render(<Index />)

