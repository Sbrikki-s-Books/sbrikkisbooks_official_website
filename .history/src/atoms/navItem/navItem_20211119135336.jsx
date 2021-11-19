import React from 'react';
import * as styles from './navItem.module.scss';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <div className={styles.item} >
            <Link to={props.path}>
                {props.text}
            </Link>
        </div>
        
    );
}

export default NavItem
