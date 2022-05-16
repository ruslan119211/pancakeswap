import React from 'react';
import Style from './Layout.module.scss'
import Header from "../Header";
import Footer from "../Footer";

const Layout =({children}) =>{
    return(
        <div className={Style.main}>
            <Header />
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;
