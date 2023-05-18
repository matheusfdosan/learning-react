import styles from "./Form.module.css"
function registered(event) {
  event.preventDefault()
  console.log("You are subscribed to our newsletter!")
  event.target.reset()
}
export default function Form() {
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

        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>
    </div>
  )
}
