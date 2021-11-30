import React from 'react'
import MailTo from '../../atoms/mailTo/mailTo'
import * as styles from './footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <MailTo email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
                Mail me!
            </MailTo>
        </div>
    )
}

export default Footer
