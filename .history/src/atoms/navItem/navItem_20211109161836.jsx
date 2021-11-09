import React from 'react';
import * as styles from './navItem.module.scss';

const NavItem = (props) => {
    return (
        <button className={styles.item} onClick={props.onClick} >
            {props.text}
        </button>
    );
}

export default NavItem
