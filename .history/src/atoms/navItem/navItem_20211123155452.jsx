import React from 'react';
import * as styles from './navItem.module.scss';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <Link className={styles.item} to={props.path} onClick={props.onClick}>
            {props.text}
        </Link>
    );
}

export default NavItem
