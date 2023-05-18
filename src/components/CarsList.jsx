import React from "react"

import CarItem from "./CarItem"

export default function CarsList() {
  return (
    <>
      <ul>
        <CarItem brand="Ford" releaseYear={1989} />
        <CarItem brand="Jeep" releaseYear={1993} />
        <CarItem brand="Honda" releaseYear={1985} />
        <CarItem/>
      </ul>
    </>
  )
}
