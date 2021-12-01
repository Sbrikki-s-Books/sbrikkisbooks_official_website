import React from 'react'
import Book from '../../assets/book.svg'
import * as styles from './loadingBooks.module.scss'

function LoadingBooks() {
    return (
        <div className={styles.bookWrapper}>
            <img src={Book} className={styles.book1} alt={"Sbrikki 's Books loading..."} />
            <img src={Book} className={styles.book2} alt={"Sbrikki 's Books loading..."} />
            <img src={Book} className={styles.book3} alt={"Sbrikki 's Books loading..."} />
        </div>
    )
}

export default LoadingBooks
