import React, { useEffect, useState } from 'react'
import { IRepo } from '../types/githubData'
import styles from './github.module.scss'

type GitHubLeftContentProps = {

}

const githubEndpoint = "https://api.github.com/users/SsaraM/repos"

const GitHubLeftContent: React.FC<GitHubLeftContentProps> = () => {
    const [githubData, setGithubData] = useState<IRepo[]>([])

    useEffect(() => {
      fetch(githubEndpoint)
        .then(x => x.json())
        .then(x => setGithubData(x))
    }, [])
    
    return (
        <div className={styles.l}>
            <h1>Projektit</h1>
            <div className={styles.items}>
                {
                    githubData && githubData.map(x => (
                        // <div className={styles.back}>
                        <div key={x.id} className={styles.item}>
                            <p>{x.name}</p>
                            <p>{x.description}</p>
                            <a href={x.html_url} target="_blank" rel="noreferrer">siirry</a>
                        </div>
                        // </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GitHubLeftContent
