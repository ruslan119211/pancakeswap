import React, {useEffect, useState} from 'react';
import Style from './Card.module.scss'
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getCard} from "../../store/actions/card";
import {getCards} from "../../store/actions/cards";
import {Button} from "@pancakeswap/uikit";
import BaseCard from "../../components/BaseCard";
import {icons} from '../../constants/icons'

const Card = () => {

    const card = useSelector((state) => state?.rootReducer?.card);
    const cards = useSelector((state) => state?.rootReducer?.cards?.records);
    const [cardList, setCardList] = useState(cards);
    const params = useParams();
    const dispatch = useDispatch();
    const isCardList = !!cardList?.length;

    useEffect(() => {
        document.title = card?.fields?.Name
    }, [card]);

    useEffect(() => {
        dispatch(getCard(params.id));
    }, [card]);

    useEffect(() => {
        dispatch(getCards());
    }, []);

    useEffect(() => {
        setCardList(cards?.filter(customFilter))
    }, [card, cards])

    const customFilter = (item) => {
        let isType = false;

        if (item?.fields['Job Type'] == card?.fields?.['Job Type'] && item?.id !== card.id) {
            isType = true;
        }
        return isType;

    }
    return (
        <>
            <div className={Style.wrap}>
                <div className={Style.content}>
                    <h1>{card?.fields?.Name}</h1>
                    <div className={Style.about}>
                        <p>
                            <img src={icons.jobTypeIcon} alt={card?.fields?.['Job Type']}/>
                            {card?.fields?.['Job Type']}
                        </p>
                        <p>
                            <img src={icons.companyIcon} alt={card?.fields?.['Short Description']}/>
                            {card?.fields?.['Short Description']}
                        </p>
                    </div>
                    <div className={Style.description}>
                        <p dangerouslySetInnerHTML={{__html: card?.fields?.['Long Description'].replace(/\n/g, '<br>')}}/>
                    </div>
                </div>
                <div className={Style.side_bar}>
                    <div>
                        <img src={card?.fields?.['Main Image'][0].url} alt="{card?.fields?.Name}"/>
                        <div>
                            <p>PancakeSwap (10 Jobs)</p>
                            <a href="/">https://pancakeswap.finance/</a>
                        </div>
                    </div>
                    <Button variant="primary" scale="md" width="100%">
                        Apply Now
                    </Button>
                </div>

            </div>
            {isCardList ? (
                <div className={Style.relatedJobs}>
                    <h2>Related Jobs</h2>
                    <div className={Style.wrap_list}>
                        {
                            cardList.map((card) => {

                                const date = card.createdTime;
                                let currentDate = Date.parse(new Date());
                                let days = (currentDate - Date.parse(date)) / 86400000;

                                return (

                                    <BaseCard
                                        key={card?.id}
                                        image={card?.fields['Main Image'][0].url}
                                        name={card?.fields.Name}
                                        type={card?.fields['Job Type']}
                                        description={card?.fields['Short Description']}
                                        date={Math.round(days)}
                                        // price={card?.fields?.Salary}
                                        id={card?.id}
                                    />

                                )
                            })
                        }
                    </div>
                </div>
            ) : (<></>)}
        </>
    );
};

export default Card;
