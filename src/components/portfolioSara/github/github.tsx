import React from 'react'
import styles from './github.module.scss'
import GitHubLeftContent from './gitHubLeftContent'
import GitHubRightContent from './gitHubRightContent'

const MyGithubRepos: React.FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <GitHubLeftContent />
      </div>
      <div className={styles.contentRight}>
        <GitHubRightContent />
      </div>
    </div>
  )
}

export default MyGithubRepos