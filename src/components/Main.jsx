import styles from "./Main.module.css"

import CarsList from "./CarsList"
import Form from "./Form"
import License from "./License"

export default function Main() {
  return (
    <main className={styles.main}>
      <CarsList />
      <Form />
      <License />
    </main>
  )
}
