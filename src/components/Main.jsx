import styles from "./Main.module.css"

import CarsList from "./CarsList"
import Newsletter from "./Newsletter"
import License from "./License"
import Greeting from "./Greeting"

export default function Main() {
  return (
    <main className={styles.main}>
      <Greeting />
      <CarsList />
      <Newsletter />
      <License />
    </main>
  )
}
