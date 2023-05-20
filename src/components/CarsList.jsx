import CarItem from "./CarItem"
import styles from "./CarList.module.css"

export default function CarsList() {
  return (
    <>
      <h2 className={styles.carsListTitle}>Our car list</h2>

      <ul className={styles.listWrapper}>
        <CarItem brand="Ford" releaseYear={1989} />
        <CarItem brand="Jeep" releaseYear={1993} />
        <CarItem brand="Honda" releaseYear={1985} />
        <CarItem />
      </ul>
    </>
  )
}
