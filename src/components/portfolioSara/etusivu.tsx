import React from 'react'
import styles from './etusivu.module.scss'

type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
          <h1>Sara Mustapha</h1>
          {/* <h2>Ohjelmistokehityksen opiskelija</h2> */}
        <p>Opiskelen toista vuotta ohjelmistokehitystä Varian ammattiopistossa.</p>
        <div className={styles.item}>
          sara.mustapha26@gmail.com
        </div>
    </div>
  )
}

export default Etusivu
