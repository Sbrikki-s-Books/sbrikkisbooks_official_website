import React from 'react'
import NavItem from '../../atoms/navItem/navItem'

function Navigation() {
    return (
        <div>
            <NavItem text="Read" link="/read" />
            <NavItem text="Alcool" link="/alcool" />
            <NavItem text="Pfizer" link="/pfizer" />
        </div>
    )
}

export default Navigation
