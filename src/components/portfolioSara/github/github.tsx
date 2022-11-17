import React from 'react'
// import { IRepo } from '../types/githubData'
import styles from './github.module.scss'
import GitHubLeftContent from './gitHubLeftContent'
import GitHubRightContent from './gitHubRightContent'
// const githubEndpoint = "https://api.github.com/users/SsaraM/repos"

const MyGithubRepos: React.FC = () => {

  // const [githubData, setGithubData] = useState<IRepo[]>([])

  // useEffect(() => {
  //   fetch(githubEndpoint)
  //     .then(x => x.json())
  //     .then(x => setGithubData(x))
  // }, [])

  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <GitHubLeftContent />
      </div>
      <div className={styles.contentRight}>
        <GitHubRightContent />
      </div>

      {/* <div className={styles.l}>
        <h1>Projektit</h1>
        <div style={{
          display: "flex",
          flexDirection: 'row',
          gap: '50px'
        }}>
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
      </div> */}
      {/* <GitHubLeftContent />
      <GitHubRightContent /> */}
      {/* <div className={styles.r}>
        <div className={styles.background}>
          <h2>Kokemus</h2>
          <p>
            Olen tehnyt pelejä C# kielellä Unity alustalla. Reactilla olen käyttänyt HTML, CSS ja JavaScript.
          </p>
          <h3>
            C# HTML CSS JavaScript
          </h3>
        </div>
      </div> */}
    </div>
  )
}

export default MyGithubRepos