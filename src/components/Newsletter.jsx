import { useState } from "react"
import styles from "./Newsletter.module.css"
import Button from "./Button"

export default function Newsletter() {
  const [registeredMessage, setMessage] = useState()

  function registered(event) {
    event.preventDefault()
    setMessage("You are subscribed to our newsletter!")
    event.target.reset()
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Subscribe to our newsletter</h2>

      <form method="post" className={styles.form} onSubmit={registered}>
        <div className={styles.mailField}>
          <label htmlFor="mail" className={styles.mailLabel}>
            E-mail:
          </label>
          <input
            type="email"
            id="mail"
            className={styles.mailInput}
            placeholder="Write your e-mail here"
            required
          />
        </div>

        <p className={styles.registeredMessage}>{registeredMessage}</p>
        
        <Button type="submit" content="Subscribe" />
      </form>
    </div>
  )
}
