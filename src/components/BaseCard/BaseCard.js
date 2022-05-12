import React from 'react';
import Style from "./BaseCard.module.scss";
import {Button} from "@pancakeswap/uikit";

const BaseCard = ({image, name, type, description, date, ...props}) => {
    return (
        <div className={Style.item}>
            <div className={Style.about_block}>
                <img src={image} width="60" height="60"/>
                <div className={Style.text_block}>
                    <p className={Style.name}>{name}</p>
                    <p className={Style.type}>{type}, {description}</p>
                </div>

            </div>
            <div className={Style.navigation_block}>
                <Button variant="text" scale="md">
                    View Job
                </Button>
                <Button variant="primary" scale="md">
                    Apply Now
                </Button>
                <p className={Style.date}>{date} a day ago</p>
            </div>

        </div>
    );
};

export default BaseCard;


