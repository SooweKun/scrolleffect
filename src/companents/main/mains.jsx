import {useState} from "react";
import {Header} from "../header/header";
import styles from './main.module.css';
import {Footer} from "../footer/footer";

export const Mains = () => {
    let background = 'src/assets/4.jpg';
    let background2 = 'src/assets/22.jpg';
    const [Backgroundstatus, SetBackgroundstatus] = useState(true);
    function ChangeBackground() {
        SetBackgroundstatus(!Backgroundstatus);
    }
    return (
        <div className={styles.main} style={{backgroundImage: `url(${Backgroundstatus ? background2 : background})`}}>
            <div className={styles.razm}>
                <Header />
                <Footer
                    ChangeBackground={ChangeBackground}
                />
            </div>
        </div>
    )
}