import {AnyAction, Dispatch} from "redux";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_MORE_PRODUCT = 'SET_MORE_PRODUCT';
const SET_LIKE = 'SET_LIKE';

const initialState = {
    products: [
        {
            id: 0
        }
    ],
}

const ProductsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.products}
        case SET_MORE_PRODUCT:
            return {...state, products: [...state.products, ...action.products]}
        case SET_LIKE:
            return {
                ...state,
                products: state.products.map(item => {
                    if(item.id === action.id) {
                        return {
                            ...item,
                            like: action.like,
                        }
                    }
                    return item;
                })
            };

        default:
            return state
    }
}

export const setLike = (id: any, like:boolean) => ({type: SET_LIKE, id, like})
export const setProducts = (products: {}) => ({type: SET_PRODUCTS, products})
export const setMoreProducts = (products: {}) => ({type: SET_MORE_PRODUCT, products})

export default ProductsReducer