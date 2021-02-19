import Verse from "./Verse";
import styles from "./VerseList.module.css"

const VerseList = props => {

    return (
        <ul className={styles.verseList}>
            {
                props.verses.map(v => <Verse verse={v} />)
            }
        </ul>
    )
}
export default VerseList
