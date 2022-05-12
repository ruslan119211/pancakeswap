import React from 'react';
import Style from './Filter.module.scss'
import {Input, Slider, CardsLayout, SearchIcon} from "@pancakeswap/uikit";


const Filter = () => {


    return (
        <div className={Style.wrap}>
            <div>
                <Input type="text" scale="lg" width="100%" placeholder="Search for jobs..."/>
                <SearchIcon />
            </div>

            {/*<CardsLayout>*/}
            {/*    <Slider  />*/}
            {/*    <Slider  />*/}
            {/*    <Slider  />*/}
            {/*</CardsLayout>*/}
        </div>
    );
};

export default Filter;
