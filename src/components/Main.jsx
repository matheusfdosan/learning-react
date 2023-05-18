import styles from "./Main.module.css"

import CarsList from "./CarsList"
import Form from "./Form"

export default function Main() {
  return (
    <main className={styles.main}>
      <Form />
      <CarsList />
    </main>
  )
}
