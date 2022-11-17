import React from 'react'
import styles from './cvsivu.module.scss'

type CvsivuProps = {

}

const Cvsivu: React.FC<CvsivuProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Koulutus</h1>
        <p>Stadin ammattiopisto Tekstiili- ja vaatetusalan perustutkinto 2017</p>
        <p>Vantaan ammattiopisto Ohjelmistokehittäjä 2021 -</p>
      </div>
      <div className={styles.right}>
        <h1>Työkokemus</h1>
        <p>Työharjoittelu koululla tulee tähän</p>
      </div>
    </div>
  )
}

export default Cvsivu
