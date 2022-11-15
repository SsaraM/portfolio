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
      <a href="https://github.com/SsaraM?tab=repositories" target="_blank" rel="noreferrer"><AiFillGithub/></a>
      <Link to="example">Projektit</Link>
    </div>
  )
}

export default Navbar
