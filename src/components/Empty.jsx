import styles from './Empty.module.css';
import noResults from '../noresults.gif';

export function Empty() {
    return (
        <div className={styles.empty}>
            <h2 className={styles.h2}>No Results</h2>
            <img className={styles.imgR} src={noResults} alt="No Results" />
        </div>
    )
}
