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
      {
        githubData && githubData.map(x => (
            <div className={styles.border}>
          <div key={x.id} className={styles.item}>
            <p>{x.name}</p>
            <p>{x.description}</p>
            
          </div>
            </div>
        ))
      }
    </div>
  )
}

export default MyGithubRepos