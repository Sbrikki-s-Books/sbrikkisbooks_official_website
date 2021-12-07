import React, { useState, useEffect } from 'react'
import * as styles from './stats.module.scss'
import Separator from '../../atoms/separator/separator'
import LoadingBooks from '../../atoms/loadingBooks/loadingBooks'
import database from '../../atoms/firebase'
import { ref, get, child } from 'firebase/database'

const Stats = () => {

    const [data, setData] = useState({Sorry: "I'm loading"});

    const fetchData = async () => {
        let tmpArray = [];
        console.log(database);
        const dbRef = ref(database);
        get(child(dbRef, `meeting/`)).then((snapshot) => {
            if (snapshot.exists()) {
                tmpArray = JSON.stringify(snapshot.toJSON()).split(',');
                console.log(tmpArray)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={styles.tmp}>
            <h1>Sbrikki's Books SEO score</h1>
            <p>
                <strong>SEO</strong> is a very important thing <br />
                That's why I'm studying ways to <strong>improve</strong> it <br />
                See our <strong>score</strong> by clicking on the link below
            </p>
            <a className={styles.link} href="https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fmike-cheek.github.io%2Fsbrikkisbooks%2F&crawltype=1">
                SEOBILITY
            </a>
            <Separator />
            <div>
                <p>{JSON.stringify(data)}</p>
            </div>
            <LoadingBooks />
        </div>
    )
}

export default Stats
