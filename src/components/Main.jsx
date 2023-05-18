import React from "react"
import styles from "./Main.module.css"

import CarsList from "./CarsList"

function Main() {
  return (
    <main className={styles.main}>
      <CarsList />
    </main>
  )
}

export default Main
