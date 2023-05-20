import styles from "./Main.module.css"

import CarsList from "./CarsList"
import Newsletter from "./Newsletter"
import License from "./License"

export default function Main() {
  return (
    <main className={styles.main}>
      <CarsList />
      <Newsletter />
      <License />
    </main>
  )
}
