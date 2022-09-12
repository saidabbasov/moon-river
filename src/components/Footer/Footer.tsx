import styles from "./Footer.module.scss";
import LogoLight from "../../images/LogoLight.png"
type Props = {}

const Footer = (props: Props) => {
  return <footer>
    <div className={styles.container}>
        <div className={styles.inner}>
        <div className={styles.innerTitle}>
          2022 © Said Eldarovich - Все права защищены.
          </div>
          <div className={styles.logo}>
            <img src={LogoLight} />
          </div>
        <div className={styles.follow}>
          <div>подпишитесь на новости</div>
          <div><input placeholder="Введите E-mail" /></div>
        </div>
        </div>
    </div>
  </footer>
}

export default Footer