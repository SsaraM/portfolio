import React from 'react'
import styles from './etusivu.module.scss'

type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.background}>
          <h1>Sara Mustapha</h1>
          <h2>Joku opiskelija</h2>
        <p>Olen toisen vuoden opiskelija Varian ammattiopistossa.</p>
        </div>
        <div className={styles.item}>
          sara.mustapha26@gmail.com
        </div>
    </div>
  )
}

export default Etusivu
