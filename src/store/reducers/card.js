const initialState = {
    records: []
}


export default function card(state = initialState, action) {
    return {
        ...state,
        ...action.data
    }
}
