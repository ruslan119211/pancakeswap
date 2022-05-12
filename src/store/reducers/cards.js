const initialState = {
    records: []
}


export default function cards(state = initialState, action) {
    return {
        ...state,
        ...action.data
    }
}
