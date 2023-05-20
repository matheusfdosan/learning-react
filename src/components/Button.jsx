import { PropTypes } from "prop-types"
import styles from "./Button.module.css"

export default function Button(props) {
  return (
    <button onClick={props.event} type={props.type} className={styles.button}>
      {props.content}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  content: "Click me",
  event: null,
}

Button.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  event: PropTypes.func,
}
