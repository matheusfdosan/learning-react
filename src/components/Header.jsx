import styles from "./Header.module.css"

export default function Header() {
  const navigation = ["Home", "Shop", "About", "Contact"]

  function navigate() {
    const lis = navigation.map((element) => {
      return (
        <li>
          <a className={styles.navItem} href="./">
            {element}
          </a>
        </li>
      )
    })

    return lis
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>exMachina</h1>

        <nav>
          <ul className={styles.nav}>{navigate()}</ul>
        </nav>
      </header>
    </>
  )
}
