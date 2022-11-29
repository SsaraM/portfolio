import React from 'react'
import styles from './cvsivu.module.scss'
import cvkuva from "../../images/sara.cv.jpg"
import { useModalContext } from '@rintsin/common-components'

type CvsivuProps = {

}

const Cvsivu: React.FC<CvsivuProps> = () => {

  const { modal } = useModalContext();

  const openModal = () => modal({
    content: (
      <div className={styles.items}>
        <img src={cvkuva} alt='CV kuva' height={'100px'} width='100px' />
        <a href={cvkuva} target='_blank' rel='noreferrer'>LATAA KUVA</a>
      </div>
    )
  })

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
      <span onClick={openModal}>Katso koko cv</span>
      </div>
    </div>
  )
}

export default Cvsivu
