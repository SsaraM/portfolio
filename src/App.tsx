// App.tsx
import React from 'react'
import Etusivu from './components/portfolioSara/etusivu';
import styles from './app.module.scss'

const App: React.FC = () => {
  return (
    <div className= {styles.container}>
      <Etusivu />
    </div>
  )
}

export default App
