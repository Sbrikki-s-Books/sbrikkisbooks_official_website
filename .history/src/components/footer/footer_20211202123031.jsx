import React from 'react'
import ContactUs from '../contactUs/contactUs'
import * as styles from './footer.module.scss'

function Footer() {
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
