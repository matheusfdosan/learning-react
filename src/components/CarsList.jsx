import CarItem from "./CarItem"
import Button from "./Button"
import styles from "./CarList.module.css"
import React, { useState } from "react"

export default function CarsList() {
  const [cars, setCars] = useState()

  function moreCars(event) {
    event.target.remove()

    return (
      <>
        <CarItem brand="Jeep" releaseYear={1992} />
        <CarItem brand="Ferrari" releaseYear={1973} />
        <CarItem brand="Toyota" releaseYear={2002} />
      </>
    )
  }

  return (
    <>
      <h2 className={styles.carsListTitle}>Our car list</h2>

      <ul className={styles.listWrapper}>
        <CarItem brand="Ford" releaseYear={1989} />
        <CarItem brand="Jeep" releaseYear={2003} />
        <CarItem brand="Honda" releaseYear={1985} />
        <CarItem />
        {cars}
      </ul>

      <Button event={(event) => setCars(moreCars(event))} content={"See more"} />
    </>
  )
}
