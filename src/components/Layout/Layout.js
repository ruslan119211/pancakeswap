import React from 'react';
import Style from './Layout.module.scss'

const Layout =({children}) =>{
    return(
        <div className={Style.main}>
            {/*<div>*/}
            {/*    <ToolBar/>*/}
            {/*    <Sides/>*/}
            {/*    <Backdrop/>*/}
            {/*</div>*/}
            <main>{children}</main>
        </div>
    )
}

export default Layout;
