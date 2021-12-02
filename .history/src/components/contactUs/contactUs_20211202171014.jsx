import React, { useState, useEffect, useRef } from 'react'
import Hamburger from '../../atoms/hamburger/hamburger'
import MailTo from '../../atoms/mailTo/mailTo'
import * as styles from './contactUs.module.scss'
import { ReCaptcha } from 'react-recaptcha-google'

function ContactUs(props) {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();

    const captcha = useRef();

    useEffect(() => {
        if (captcha) {
            console.log("started, just a second...")
            captcha.reset();
            captcha.execute();
        }
    })

    const onLoadRecaptcha = () => {
        if (captcha) {
            captcha.reset();
            captcha.execute();
        }
    }

    const verifyCallback = (recaptchaToken) => {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
    }

    return (
        <div className={styles.contactUs} >
            <div className={styles.contactHero}>
                <div className={styles.hamWrapper}>
                    <Hamburger navBarOpen={props.formOpened} onClick={props.closeForm} />
                </div>
                <input type="text" onChange={e => setName(e)} className={styles.nsInput} placeholder="Name" />
                <input type="text" onChange={e => setSurname(e)} className={styles.nsInput} placeholder="Surname" />
                <ReCaptcha
                    ref={captcha}
                    size="invisible"
                    render="explicit"
                    sitekey="your_site_key"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                />
                <MailTo email="sbrikkisbooks@gmail.com" subject="I want to join!" body={"Hi, I'm " + name + " " + surname + ". I want to join to your Book Club!"}>
                    Send us a mail!
                </MailTo>
            </div>

        </div>
    )
}

export default ContactUs