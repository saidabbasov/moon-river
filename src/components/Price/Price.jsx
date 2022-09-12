import { FC } from "react"
import styles from "./Price.module.scss" 
import PriceCard from './PriceCard/PriceCard'

let contentCard = [
    {id:1, mobileName:'earrings', price:599},
    {id:2, mobileName:'earrings', price:599},
    {id:4, mobileName:'earrings', price:545},
    {id:5, mobileName:'earrings', price:545},
    {id:6, mobileName:'earrings', price:545},
    {id:7, mobileName:'earrings', price:545},
    {id:8, mobileName:'earrings', price:545},
    {id:9, mobileName:'earrings', price:545},
]

const Price:FC<PropsType> = ({id}) => {
    let contents = contentCard.map( (content, index) => <PriceCard key={index} id={content.id} mobileName={content.mobileName} price={content.price}  />)
  return (
    <div className={styles.content}>
       {contents}
    </div>
  )
}

export default Price;