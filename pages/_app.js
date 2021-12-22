import '../styles/globals.css'
import styles from "../styles/Home.module.css"
// import Sidebar2 from '../components/Sidebar2'
import Overview from '../components/overview'
import Leaderboard from '../components/leaderboard'
import Watchlist from '../components/watchlist'
import TradeHistory from '../components/TradeHistory'
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Category/Pool Name</h1>
      <div className={styles.upperContainer}>
        <Overview />
      </div>
      <div className={styles.middleContainer}>
        <TradeHistory />
        <Leaderboard />
      </div>
      <div className={styles.lowerContainer}>
        <Watchlist />
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
