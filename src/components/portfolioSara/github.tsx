import React, { useEffect, useState } from 'react'
import { IRepo } from './types/githubData'
import styles from './github.module.scss'
const githubEndpoint = "https://api.github.com/users/SsaraM/repos"

const MyGithubRepos: React.FC = () => {

  const [githubData, setGithubData] = useState<IRepo[]>([])

  useEffect(() => {
    fetch(githubEndpoint)
      .then(x => x.json())
      .then(x => setGithubData(x))
  }, [])

  return (
    <div className={styles.container}>
      
      {/* <h3>Projektit</h3> */}
      {
        githubData && githubData.map(x => (
            <div className={styles.border}>
          <div key={x.id} className={styles.item}>
            <p>{x.name}</p>
            <p>{x.description}</p>
            <a href={x.html_url} target="_blank" rel="noreferrer">siirry</a>
          </div>
            </div>
        ))
      }
      <div className={styles.info}>
        <div className={styles.background}>
          <h1>Kokemus</h1>
        <p>
          Olen tehnyt pelejä C# kielellä Unity alustalla. Reactilla olen käyttänyt HTML, CSS ja JavaScript.
        </p>
        <h2>
          C# HTML CSS JavaScript
        </h2>
        </div>
      </div>
    </div>
  )
}

export default MyGithubRepos