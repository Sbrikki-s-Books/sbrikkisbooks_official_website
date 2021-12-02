import React from 'react'
import MailTo from '../../atoms/mailTo/mailTo'
import * as styles from './contactUs.module.scss'

function ContactUs() {
    return (
        <div className={styles.contactUs} >
            <MailTo email="sbrikkisbooks@gmail.com" subject="I want to join!" body="Hi, I'm [insert name and surname]. I want to join to your Book Club!">
                Send us a mail!
            </MailTo>
        </div>
    )
}

export default ContactUs