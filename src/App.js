import React from "react";
import './index.css';
import Cards from "./templates/Cards";
import {dark} from "@pancakeswap/uikit";
import {ThemeProvider} from "styled-components";
import Layout from "./components/Layout/Layout";
import {
    BrowserRouter
} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ScrollToTop from "./components/ScrollToTop/scrolToTop";

function App() {

    return (
        <ThemeProvider theme={dark}>
            <BrowserRouter>
                <ScrollToTop />
                <Layout>
                    <div className='container'>
                        <AppRouter/>
                    </div>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
