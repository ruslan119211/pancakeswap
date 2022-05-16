import React from 'react';
import Style from "./BaseCard.module.scss";
import {Button} from "@pancakeswap/uikit";
import {useNavigate} from 'react-router-dom';


const BaseCard = ({id, image, name, type, description, date, price, ...props}) => {

    const router = useNavigate();

    return (
        <div className={Style.item}>
            <div className={Style.about_block}>
                <img src={image} width="60" height="60"/>
                <div className={Style.text_block}>
                    {/*<p className={Style.type}>Salary {price}</p>*/}
                    <p className={Style.name}>{name}</p>
                    <p className={Style.type}>{type}, {description}</p>
                </div>
            </div>
            <div className={Style.navigation_block}>

                <Button onClick={() => router(`/Jobs/${id}`)} variant="text" scale="md">
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


