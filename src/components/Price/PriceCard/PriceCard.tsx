import React, { FC } from 'react'
import styles from "./PriceCard.module.scss"
import diamond from "./../../../images/diamond_22.jpg"

type PropsType = {
  mobileName: string
  price : number
}

const PriceCard:FC<PropsType> = ({mobileName, price}) => {
  return <div className={styles.contentCard}>
    <div className={styles.container}>
        <div>
        <img className={styles.priceDiamond} src={diamond} alt='' />
        </div>
        <div className={styles.mobileName}>{mobileName}</div>
        <div className={styles.contentSale}>
          <div>{price} $</div>
        </div>
    </div>
  </div>
}

export default PriceCard