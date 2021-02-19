import styles from "./Verse.module.css"

const Verse = props => {

    const { text } = props.verse

    return (
        <li className={styles.verse}>
            {text}
        </li>
    )
}
export default Verse
