import '../styles/globals.css'
import styles from "../styles/Home.module.css"
import Sidebar from "../components/Sidebar"
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.mainContainer}>
    <Sidebar/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
