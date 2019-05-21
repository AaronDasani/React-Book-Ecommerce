import {createStore, compose, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import ProductListReducer from './Reducers/ProductListReducer';
import CartReducer from './Reducers/CartReducer';
import createSagaMiddleware from 'redux-saga';
import {watchModalClose} from './saga';


const saga_Middleware=createSagaMiddleware();

const rootReducer=combineReducers({
    productListR:ProductListReducer,
    cartR:CartReducer
})

const middleware=[thunk,saga_Middleware];

const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    )

)
saga_Middleware.run(watchModalClose);


export default store;