import React from 'react'
import styles from './projektisivu.module.scss'

type ProjektisivuProps = {

}

const Projektisivu: React.FC<ProjektisivuProps> = () => {
  return (
    <div className= {styles.container}>
      Projektisivu
    </div>
  )
}

export default Projektisivu
