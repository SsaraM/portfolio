import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
import { AiFillHome, AiFillGithub} from "react-icons/ai";

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <Link to="/"><AiFillHome/></Link> 
      <Link to="/first">CV</Link>
      <Link to="example"><AiFillGithub/></Link>
    </div>
  )
}

export default Navbar
