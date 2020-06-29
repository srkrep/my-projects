import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, useHistory, useLocation } from 'react-router-dom';
import rootReducer from './appState/Reducers/';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import PageNotFound from './components/PageNotFound';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import Navbar from './components/Navbar';

import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
const middleware = [thunk];
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={CheckOut} />
                <Route path="/thankyou" component={ThankYou} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
