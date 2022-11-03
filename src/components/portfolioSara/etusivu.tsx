import React from 'react'
import styles from './etusivu.module.scss'

type EtusivuProps = {

}

const Etusivu: React.FC<EtusivuProps> = () => {
  return (
    <div className= {styles.container}>
      <h1> Sara Mustapha</h1>
      <h2> Portfolio </h2>
      <div className= {styles.text}>
      <h3> Opiskelen ohjelmistokehittäjäksi Varian ammattiopistossa</h3>
      </div>
    </div>
  )
}

export default Etusivu
