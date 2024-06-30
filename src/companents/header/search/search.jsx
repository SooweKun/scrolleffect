import styles from './search.module.css'

export const Search = () => {
    return (
        <div className={styles.search}>
            <p>Singh Up</p>
            <input type="text" placeholder="Search here ..." />
        </div>
    )
}