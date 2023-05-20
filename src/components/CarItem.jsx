import PropTypes from "prop-types"
import styles from "./CarItem.module.css"

function CarItem({ brand, releaseYear }) {
  return (
    <li className={styles.carItem}>
      <span>{brand}</span>
      <span>{releaseYear}</span>
    </li>
  )
}

CarItem.defaultProps = {
  brand: "No car brand",
  releaseYear: 0,
}

CarItem.propTypes = {
  brand: PropTypes.string,
  releaseYear: PropTypes.number,
}

export default CarItem
