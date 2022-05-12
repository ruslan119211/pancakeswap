import React, {useState, useEffect} from 'react';
import Style from './Cards.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../store/actions/cards";
import BaseCard from "../../components/BaseCard";
import {Input, SearchIcon, CardsLayout, Toggle, Slider} from "@pancakeswap/uikit";
import Select from "../../components/Select/Select";
import {arrType} from "../../constants/filter";


const Cards = () => {
    const cards = useSelector((state) => state?.rootReducer.cards.records);
    const [cardList, setCardList] = useState(cards);
    const [filterByName, setFilterByName] = useState('');
    const [filterToType, setFilterToType] = useState();
    const [filterToSalary, setFilterToSalary] = useState(355.000);
    const [isChecked, setIsChecked] = useState(false);


    const dispatch = useDispatch();
    const isCardList = !!cardList?.length;

    useEffect(() => {
        dispatch(getCards());
    }, []);

    useEffect(() => {
        setCardList(cards?.filter(customFilter))
    }, [cards, filterByName, filterToType, filterToSalary])

    const toggle = () => setIsChecked(!isChecked);
    const customFilter = (item) => {
        let isName = false;
        let isType = false;
        let isSalary = false;

        if (filterByName?.toLowerCase()?.length > 2) {
            isName = item?.fields?.Name?.toLowerCase().includes(filterByName?.toLowerCase())
        } else {
            isName = true;
        }

        if (item.fields['Job Type'] == filterToType || filterToType == 'Job type' || !filterToType) {
            isType = true;
        }

        if (filterToSalary?.length) {
            isSalary = item?.fields?.Salary > parseInt(filterToSalary, 10)
            console.log(item?.fields?.Salary)
        } else {
            isSalary = true;
        }

        // cards.filter( item => { return item?.fields?.Salary > parseInt(price, 10) }).map( hotel => {
        //     return <p key={hotel.name}>{ hotel.name } | { hotel.price } &euro; </p>
        // })

        return isName && isType && isSalary;

    }

    const handleSearch = (e) => {
        setFilterByName(e?.target?.value)
    };

    const handleSortType = (option) => {
        setFilterToType(option.value)
    }


    const handleSortSalary =(e)=>{
        setFilterToSalary( e.value );
        console.log(e.value )
    }

    return (
        <>
            <div className={Style.wrap_filter}>
                <div className={Style.search_wrap}>
                    <Input type="text" scale="lg" width="100%" onChange={handleSearch}
                           placeholder="Search for jobs..."/>
                    <SearchIcon/>
                </div>

                <CardsLayout>
                    <Select
                        options={arrType}
                        onOptionChange={handleSortType}
                    />
                    <div className={`${Style.wrap} `}>
                        $0/yr
                        <Slider
                            min={0}
                            max={1000}
                            onValueChanged={handleSortSalary}
                        />
                        ${filterToSalary}/yr
                    </div>
                    <div className={`${Style.wrap} `}>
                        <Toggle checked={isChecked} onChange={toggle} scale="sm"/>
                        <p>Option to pay in crypto</p>
                    </div>
                </CardsLayout>
            </div>
            <div className={Style.wrap_list}>
                {isCardList ? (
                    cardList.map((card) => {

                        const date = card.createdTime;
                        let currentDate = Date.parse(new Date());
                        let days = (currentDate - Date.parse(date)) / 86400000;

                        return (
                            <BaseCard
                                key={card.id}
                                image={card.fields['Main Image'][0].url}
                                name={card.fields.Name}
                                type={card.fields['Job Type']}
                                description={card.fields['Short Description']}
                                date={Math.round(days)}
                            />
                        )
                    })
                ) : (
                    <p className={Style.loading_text}>No results</p>
                )}
            </div>
        </>
    );
}
export default Cards
