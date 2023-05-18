import React from "react"
import PropTypes from "prop-types"

function CarItem({ brand, releaseYear }) {
  return (
    <li>
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
