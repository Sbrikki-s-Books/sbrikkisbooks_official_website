import React from 'react'
import * as styles from './stats.module.scss'
import Separator from '../../atoms/separator/separator'
//import firebase from '../../atoms/firebase'

const Stats = () => {

    /*
    const [data, setData] = useState({});

    const fetchData = async () => {
        const db = firebase.firestore();
        const response = await db.collection('meeting');
        console.log(response);
    }

    useEffect(() => {
        fetchData();
    }, []) 
    */
    return (
        <div className={styles.tmp}>
            <h1>Sbrikki's Books SEO score</h1>
            <p>
                <strong>SEO</strong> is a very important thing <br/>
                That's why I'm studying ways to <strong>improve</strong> it <br/>
                See our <strong>score</strong> by clicking on the link below 
            </p>
            <a className={styles.link} href="https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fmike-cheek.github.io%2Fsbrikkisbooks_official_website%2F&crawltype=1">
                SEOBILITY
            </a>
            <Separator />
        </div>
    )
}

export default Stats
