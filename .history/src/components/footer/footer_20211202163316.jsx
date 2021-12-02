import React, {useState} from 'react'
import ContactUs from '../contactUs/contactUs'
import * as styles from './footer.module.scss'

function Footer(props) {

    const [formOpened, setFormOpened] = useState(false);

    const openForm = () => {
        setFormOpened(true);
        
    }

    return (
        <div className={styles.footer}>
            <p>
                Join us!
            </p>
            <ContactUs />
        </div>
    )
}

export default Footer
