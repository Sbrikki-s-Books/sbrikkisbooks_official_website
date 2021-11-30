import React, { useEffect, useState } from 'react'
import * as styles from './bookAnimation.module.scss'

function BookAnimation() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch('https://tenor.com/bersX.gif')
            .then((response) => {
                if(response.ok)
                    return response.json();
                throw response;
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if(loading) return "Loading...";
    if (error) return "Error!";
    
    return (
        <>
        <img 
            src={data}
            alt="Sbrikki's Books Reading..." 
            className={styles.gif}
        />
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default BookAnimation
