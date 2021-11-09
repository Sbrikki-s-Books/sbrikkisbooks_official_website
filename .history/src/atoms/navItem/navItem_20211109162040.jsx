import React from 'react';
import * as styles from './navItem.module.scss';

const NavItem = (props) => {
    return (
        <p className={styles.item} onClick={props.onClick} >
            {props.text}
        </p>
    );
}

export default NavItem
