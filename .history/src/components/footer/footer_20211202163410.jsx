import React, {useState} from 'react'
import ContactUs from '../contactUs/contactUs'
import * as styles from './footer.module.scss'

function Footer(props) {

    const [formOpened, setFormOpened] = useState(false);

    const openForm = () => {
        setFormOpened(true);
        props.setNotScrolling();
    }

    const closeForm = () => {
        setFormOpened(false);
        props.setScrolling();
    }

    return (
        <div className={styles.footer}>
            <p>
                Join us!
            </p>
            {formOpened ?
                <ContactUs />
                : null
            }
            
        </div>
    )
}

export default Footer
