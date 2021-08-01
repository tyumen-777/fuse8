import React from "react";
import logo from '../../images/house.svg'
import './Header.css'

function Header() {
    return(
        <div className="header">
            <img src={logo} alt="Логотип" width={38}/>
            <p className="header__title">Агенство недвижимости</p>
        </div>
    )
}

export default Header;