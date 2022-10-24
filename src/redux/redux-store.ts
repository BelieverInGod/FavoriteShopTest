import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import SortBarReducer from "./SortBarReducer";
import ProductsReducer from "./ProductsReducer";

export type TAppState = ReturnType<typeof reducers>;
export type TDispatch = ThunkDispatch<TAppState, Promise<void>, AnyAction>;
export type TStore = Store<TAppState, AnyAction> & { dispatch: TDispatch };
export type TGetState = () => TAppState;

let reducers = combineReducers({
    sortBar: SortBarReducer,
    products: ProductsReducer,
})

const store: TStore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store