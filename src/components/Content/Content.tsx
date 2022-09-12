import React from 'react'
import ring from "./../../images/ring.png";

import styles from "./Content.module.scss"

type Props = {}

const Content = (props: Props) => {
  return <section>
    <div className={styles.container}>
      <div className={styles.inner}>
      <div className={styles.titleItem}>HIGH JEWELRY</div>
        <div className={styles.titleImg}>
          <img src={ring} alt='' />
        </div>
      </div>
    </div>
  </section>
}


export default Content
