import Carousel from 'react-bootstrap/Carousel';
import diamond from "./../../images/diamond_11.jpg"
import diamond2 from "./../../images/diamond_22.jpg"
import diamond3 from "./../../images/diamond_33.jpg"

import styles from "./Carousel.module.scss";

function UncontrolledExample() {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
      <img src={diamond} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={diamond2} alt='' />
      </Carousel.Item>
      <Carousel.Item>
      <img src={diamond3} alt='' />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;