import React from 'react';
import styles from './styles/header.module.css';
import { currentDay, currentMonth, currentDate, currentYear, currentTime} from './Get Date/Date';

const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.title}>
                <p>Todo App ni Nixon</p>
            </div>
            <div className={styles.day}>
                <p className={styles.time}>{currentTime}</p>
                <h1>{currentDay}</h1>
            </div>
            <div className={styles.date}>
            <p>{currentMonth} {currentDate}, {currentYear}</p>
            </div>
        </div>
    )
}

export default Header
