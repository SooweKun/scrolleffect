import styles from './footer.module.css'
import {Contacts} from './contacts/cont'

export const Footer = (ChangeBackground) => {
    return (
        <div className={styles.footer}>
                <div className={styles.inf}>
                    <h1>Informations</h1>
                    <img src="/src/assets/key.svg" alt="" />
            </div>
                <button onClick={ChangeBackground.ChangeBackground}>Сменить тему</button>
                <Contacts/>
        </div>
    )
}