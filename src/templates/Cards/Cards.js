import React, {useState, useEffect, useMemo} from 'react';
import Style from './Cards.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../store/actions/cards";
import BaseCard from "../../components/BaseCard";
import {Input, SearchIcon, CardsLayout, Toggle, Button, CloseIcon, useModal} from "@pancakeswap/uikit";
import Select from "../../components/Select/Select";
import {arrType} from "../../constants/filter";
import {withStyles} from "@material-ui/core";
import Slider from '@material-ui/core/Slider';
import {PrettoSlider} from "../../components/Slider/Slider";
import {icons} from "../../constants/icons";

const Cards = () => {
    const cards = useSelector((state) => state?.rootReducer.cards.records);
    const [cardList, setCardList] = useState(cards);
    const [filterByName, setFilterByName] = useState("");
    const [filterToType, setFilterToType] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [filterToSalary, setFilterToSalary] = useState();

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


        if (item?.fields?.Salary < filterToSalary) {
            isSalary = true;
        }

        return isName && isType && isSalary;

    }

    const handleSearch = (e) => {
        setFilterByName(e?.target?.value)
    };

    const handleSortType = (option) => {
        setFilterToType(option.value)
    }


    const maxSliderValue = useMemo(() => {
        const salaries = cards.map((card) => card?.fields?.Salary || 0)

        if (!salaries.length) return 0
        return Math.max(...salaries)
    }, [cards]);


    useEffect(() => {
        setFilterToSalary(maxSliderValue)
    }, [maxSliderValue])

    const handleSortSalary = (event, value) => {
        setFilterToSalary(value);
    }

    const handleClear = () => {
        setFilterByName('');

        setFilterToType(null);
        setFilterToSalary(maxSliderValue);

    }
    return (
        <>
            <div className={Style.head}>
                <h1>
                    Let’s find a PancakeSwap Job for you
                    <img src={icons.bunnyIcon} alt="ico"/>
                </h1>
                <p>Discover 562+ remote PancakeSwap Jobs around the world at companies working on blockchain, smart contract, DeFi, NFT, crypto etc.</p>
            </div>
            <div className={Style.wrap_filter}>
                <div className={Style.search_wrap}>
                    <Input type="text" scale="lg" width="100%" value={filterByName} onChange={handleSearch}
                           placeholder="Search for jobs..."/>
                    <SearchIcon/>
                </div>

                <CardsLayout>
                    <Select
                        options={arrType}
                        placeHolderText="Job type"
                        defaultOptionIndex={0}
                        onOptionChange={handleSortType}
                    />
                    <div className={`${Style.wrap} `}>
                        $0/yr
                        <PrettoSlider
                            key={maxSliderValue}
                            aria-label="pretto slider"
                            value={filterToSalary}
                            defaultValue={maxSliderValue}
                            min={0}
                            step={10000}
                            max={maxSliderValue}
                            onChange={handleSortSalary}
                        />
                        ${filterToSalary}/yr
                    </div>
                    {/*<div className={`${Style.wrap} `}>*/}
                    {/*    <Toggle checked={isChecked} onChange={toggle} scale="sm"/>*/}
                    {/*    <p>Option to pay in crypto</p>*/}
                    {/*</div>*/}
                    <div className={`${Style.wrap} `}>
                        <Button scale="sm" onClick={handleClear} startIcon={<CloseIcon/>}>Clear filter</Button>
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
                                        // price={card.fields.Salary}
                                        id={card.id}
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
