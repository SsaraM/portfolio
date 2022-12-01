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
            <a href='mai&#108;&#116;o&#58;sara&#46;mus&#116;&#97;%70h%6126%4&#48;gmai&#108;&#46;c&#111;m'>sa&#114;&#97;&#46;mustapha2&#54;&#64;gm&#97;&#105;l&#46;co&#109;</a>
            </footer>
          </Router>
        </div>
      </ModalContextProvider>
    </React.StrictMode>
  )
}

root.render(<Index />)

