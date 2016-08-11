import React       from 'react';
import { render}   from 'react-dom';

//Import Components
import App        from './components/App';

import mainPage       from './components/mainPage';
import Stock          from './components/stock';
import Products       from './components/products';

//import react router deps
import { Router, Route, IndexRoute, browserHistory }  from 'react-router';

import { Provider }        from 'react-redux';
import  store, { history } from './store';


const router = (
   <Provider store={store}>
     <Router history={history}>
       <Route path="/" component={App}>
          <IndexRoute component={mainPage}></IndexRoute>
          <Route path="/stock" component={Stock}></Route>
          <Route path="/products" component={Products}></Route>
       </Route>
     </Router>
   </Provider>

)

render(router,
   document.getElementById('app'))