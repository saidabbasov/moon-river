import LogoMoonRiver from "./../../images/LogoMoonRiver.png"
import burgerMenu from "./../../images/burger-menu.png"
import styles from "./Header.module.scss"
import { Example } from "../Modal/Modal";

const Header = () => {
    return <header>
        <div className={styles.container}>
            <div className={styles.logo}><img src={LogoMoonRiver} alt='' /></div>
        <div  className={styles.menu_top}>  <Example/></div>
        <div className={styles.menuBurger}><img  src={burgerMenu} alt='' /></div>
        </div>
    </header>
}

export default Header;