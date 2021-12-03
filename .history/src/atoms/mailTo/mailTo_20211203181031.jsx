import React from 'react'
import * as styles from './mailTo.module.scss'

const MailTo = ({ email, subject = '', body = '', children, enabled }) => {
    let params = subject || body ? '?' : '';

    if (subject)
        params += `subject=${encodeURIComponent(subject)}`;
    if (body)
        params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return (
        <>
        <a href={`mailto:${email}${params}`} className={enabled? styles.mailto : styles.mailtoDisabled}>
            {children}
        </a>
        {
            enabled?
            null: <p className={styles.suggestion}>Fill in the fields above first</p>
        }
        </>
    );
}

export default MailTo
