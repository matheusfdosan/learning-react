export default function Greeting() {
  const styles = {
    textAlign: "center",
    margin: "30px 0",
  }

  function greeting() {
    const now = new Date()
    const hours = now.getHours()

    if (hours >= 0 && hours < 13) {
      return <h1 style={styles}>Good Morning</h1>
    } else if (hours >= 13 && hours <= 18) {
      return <h1 style={styles}>Good Afternoon</h1>
    } else {
      return <h1 style={styles}>Good Evening</h1>
    }
  }

  return <>{greeting()}</>
}
