import React from 'react';
import {icons} from '../../constants/icons'
import Style from './Header.module.scss'

const Header = () => {
    return (
        <header className={Style.header}>
            <div className="container">
                <a href="/" className={Style.logo}>
                    <img src={icons.mainLogoIcon} alt="logo"/>
                </a>

            </div>
        </header>
    );
};

export default Header;
