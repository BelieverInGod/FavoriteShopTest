import {AnyAction, Dispatch} from "redux";

const SET_CATEGORY = 'SET_CATEGORY'

const initialState = {
    categories: [],
}

const SortBarReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, categories: action.categories}
        default:
            return state
    }
}

export const setCategory = (categories: any) => ({type: SET_CATEGORY, categories})
export default SortBarReducer