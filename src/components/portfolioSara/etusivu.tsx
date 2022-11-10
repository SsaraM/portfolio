import React from 'react'
import styles from './etusivu.module.scss'

type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <div className={styles.background}>
          <h1> Sara Mustapha</h1>
        </div>
      </div>
      <h2> Portfolio </h2>
      <div className={styles.text}>
        <h3> Opiskelen ohjelmistokehittäjäksi Varian ammattiopistossa</h3>
      </div>
    </div>
  )
}

export default Etusivu
