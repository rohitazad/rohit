import  {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './Reducers/index';
import reduxImmutableStateInariant from "redux-immutable-state-invariant";

export default function configureStore (initialState){
    const composenEnhancers = 
       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools only single time 

       return createStore(
            rootReducer,
            initialState,
            composenEnhancers(applyMiddleware(reduxImmutableStateInariant()))
       );
}
