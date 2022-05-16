import React from 'react';
import {Route, Routes} from "react-router-dom";
import Card from "../templates/Card";
import Cards from "../templates/Cards";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Cards/>}/>
            <Route path='/Jobs/:id' element={<Card/>}/>
        </Routes>

    )
};

export default AppRouter;
