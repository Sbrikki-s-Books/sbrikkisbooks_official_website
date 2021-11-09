import React from 'react';
import * as styles from './navItem.module.scss';

const NavItem = (props) => {
    return (
        <div className={styles.item} onClick={props.onClick} >
            {props.text}
        </div>
    );
}

export default NavItem
