import styles from './Logon.module.css'
import { SplashScreen } from './components/logon/SplashScreen'
import { Login } from './components/logon/Login'
export function Logon() {
    return (
        <div className={styles.logonContainer}>
            <SplashScreen />
            <Login />
        </div>
    )
}