import React, {useState} from 'react'
import Hamburger from '../../atoms/hamburger/hamburger'
import MailTo from '../../atoms/mailTo/mailTo'
import * as styles from './contactUs.module.scss'

function ContactUs(props) {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    
    return (
        <div className={styles.contactUs} >
            <div className={styles.contactHero}>
                <div className={styles.hamWrapper}>
                    <Hamburger navBarOpen={props.formOpened} onClick={props.closeForm} />
                </div>
                <p>Insert name and surname and contact us!</p>
                <input type="text" onChange={e => console.log(e)} className={styles.nsInput} placeholder="Name" />
                <input type="text" onChange={e => setSurname(e)} className={styles.nsInput} placeholder="Surname"/>

                <MailTo email="sbrikkisbooks@gmail.com" subject="I want to join!" body={"Hi, I'm "+name+" "+surname+". I want to join to your Book Club!"}>
                    Send us a mail!
                </MailTo>
            </div>
            
        </div>
    )
}

export default ContactUs