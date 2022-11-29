import React from 'react'
import styles from './etusivu.module.scss'

type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {
  return (
    <div className={styles.container}>
          <h1>Sara Mustapha</h1>
        <p>Opiskelen toista vuotta ohjelmistokehitystä Varian ammattiopistossa.</p>
        {/* <div className={styles.item}>
          <h2>sara.mustapha26@gmail.com</h2>
        </div> */}
    </div>
  )
}

export default Etusivu
