import React from 'react'
import MailTo from '../../atoms/mailTo/mailTo'
import * as styles from './footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <p>
                Join us!
            </p>
            <MailTo email="sbrikkisbooks@gmail.com" subject="I want to join!" body="Hi, I'm [insert name and surname]. I want to join to your Book Club!">
                Send us a mail!
            </MailTo>
        </div>
    )
}

export default Footer
