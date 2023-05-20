import { useState } from "react"
import styles from "./License.module.css"


const PortugueseLicense = "A empresa em si é uma empresa muito bem sucedida. Ser repelido, por assim dizer, e fugir, não há grande exercício; portanto, a culpa impede os prazeres das dívidas, e o mesmo é seguido por apenas dor e odeia ser rejeitado. Ele criticou os tempos."

const EnglishLicense = "The company itself is a very successful company. To be repelled, as it were, and flees, there is no great exercise; therefore guilt hinders the pleasures of debts, and the like is followed by just pain, and hates being rejected. He criticized the times."

let isEnglish = true

export default function License() {
  const [license, setLicense] = useState(EnglishLicense)

  function traduzir() {
    if (isEnglish === true) {
      setLicense(PortugueseLicense)
      isEnglish = false
    } else {
      setLicense(EnglishLicense)
      isEnglish = true
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Company License</h1>
      <p className={styles.license}>{license}</p>
      <button onClick={traduzir} className={styles.translateBtn}>Traduzir</button>
    </div>
  )
}
