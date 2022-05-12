import axios from "axios";
import {GET_CARDS} from "../constants/constants";


export const getCards = () => (dispatch) => {
    return axios.get('https://api.airtable.com/v0/applzwODm2QwK5Cyg/tblqL8AIUAUgdpBoI?api_key=keyNuuYvht0pLnL5o')
        .then((response) => {
            dispatch({ type: GET_CARDS, data: response?.data });
        })
        .catch((error) => {
            console.log('error --> ', error);
            throw error;
        });
};
