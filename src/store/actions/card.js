import axios from "axios";
import {GET_CARD} from "../constants/constants";


export const getCard = (id) => (dispatch) => {
    return axios.get(`https://api.airtable.com/v0/applzwODm2QwK5Cyg/Jobs/${id}?api_key=keyNuuYvht0pLnL5o`)
        .then((response) => {
            dispatch({ type: GET_CARD, data: response?.data });
        })
        .catch((error) => {
            console.log('error --> ', error);
            throw error;
        });
};
