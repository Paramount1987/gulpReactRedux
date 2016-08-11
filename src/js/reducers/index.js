import { combineReducers }            from 'redux';
import { routerReducer }              from 'react-router-redux';
import product                        from './product';
import filter                         from './filter';

const rootReducer = combineReducers({ product, filter, routing: routerReducer});

export default rootReducer;