import React from 'react';
import * as styles from './navItem.module.scss';

const NavItem = (props) => {
    return (
        <a href={props.link}>
            {props.text}
        </a>
    );
}

export default NavItem
