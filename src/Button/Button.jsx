import styles from "./Button.module.css";

export default function Button() {

    const handleClick = (e) => e.target.textContent = "OUCH! 😵"

  return (
    <button className={styles.button} onDoubleClick={(e) => handleClick(e)}>
      Click Me 😀
    </button>
  );
}
