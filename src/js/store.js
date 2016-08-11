import { createStore, applyMiddleware ,compose}  from 'redux';
import thunk                                     from 'redux-thunk'
import { syncHistoryWithStore}                   from 'react-router-redux';
import { browserHistory }                        from 'react-router';

// import the root reducer
import rootReducer             from './reducers';

const  enhancers = compose (
   window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer,{}, applyMiddleware(thunk),enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

//if(module.hot) {
//   module.hot.accept('./reducers/',() => {
//      const nextRootReducer = require('./reducers/index').default;
//      store.replaceReducer(nextRootReducer);
//   });
//}

export default store;