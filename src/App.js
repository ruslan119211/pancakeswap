import React from "react";
import './index.css';
import Cards from "./templates/Cards";
import {dark} from "@pancakeswap/uikit";
import {ThemeProvider} from "styled-components";
import Layout from "./components/Layout/Layout";


function App() {

    return (
        <ThemeProvider theme={dark}>
            <Layout>
                <div className='container'>
                    <Cards/>
                </div>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
