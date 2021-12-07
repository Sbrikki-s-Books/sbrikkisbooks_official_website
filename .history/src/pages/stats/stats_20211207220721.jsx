import React, { useState, useEffect } from 'react'
import * as styles from './stats.module.scss'
import Separator from '../../atoms/separator/separator'
import LoadingBooks from '../../atoms/loadingBooks/loadingBooks'

import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const Stats = () => {
    const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.getApp();

    //const [data, setData] = useState({});

    const fetchData = async () => {
        console.log(JSON.stringify(db));
    }

    useEffect(() => {
        fetchData();
    }, []) 
    
    return (
        <div className={styles.tmp}>
            <h1>Sbrikki's Books SEO score</h1>
            <p>
                <strong>SEO</strong> is a very important thing <br/>
                That's why I'm studying ways to <strong>improve</strong> it <br/>
                See our <strong>score</strong> by clicking on the link below 
            </p>
            <a className={styles.link} href="https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fmike-cheek.github.io%2Fsbrikkisbooks%2F&crawltype=1">
                SEOBILITY
            </a>
            <Separator />
            <LoadingBooks />
        </div>
    )
}

export default Stats
