import imageSplashScreen from '../../assets/splashScreemImage.svg'
import styles from './SplashScreen.module.css'

export function SplashScreen() {
    return(
        <div className={styles.cardSplash}>
            <img src={imageSplashScreen} alt="Imagem Splash Screen" />
        </div>
    )
}