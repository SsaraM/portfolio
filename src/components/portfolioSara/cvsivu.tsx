import React from 'react'
import styles from './cvsivu.module.scss'

type CvsivuProps = {

}

const Cvsivu: React.FC<CvsivuProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
      <h1>Koulutus</h1>
      <h2>Stadin ammattiopisto Tekstiili- ja vaatetusalan perustutkinto 2017</h2>
        </div>
        <div className={styles.right}>
      <h1>Työkokemus</h1>
        </div>
    </div>
  )
}

export default Cvsivu
