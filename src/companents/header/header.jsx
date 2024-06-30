import styles from './header.module.css';
import {Navig} from './navigation/navig';
import {Search} from './search/search';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="src/assets/11.png" alt="" />
                <h1>DragonsLend</h1>
            </div>
            <Navig />
            <Search />
        </div>
    )
}