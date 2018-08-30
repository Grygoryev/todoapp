import React from 'react';
import NavIcon from './NavIcon';
import FlowerIcon from "../../img/iFlower.svg"
import StadiumIcon from "../../img/iStadium.svg"
import SpoonIcon from "../../img/iSpoon.svg"
import CartIcon from "../../img/iCart.svg"

const Navbar = ({tabs, handleNavClick}) => {
    const navsList = tabs.map( tab => {
        return (
            <div className={tab.active ? "nav__item nav__item_active" : "nav__item"} 
                key={tab.id}
                onClick={() => handleNavClick(tab.id)}>
                <NavIcon icon={tab.icon} />
            </div> 
        )
    })

    return (
        <nav className="nav">
            {navsList}
        </nav>
    )
}

export default Navbar;