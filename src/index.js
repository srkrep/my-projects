import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import persistReducer from './appState/Reducers/';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import PageNotFound from './components/PageNotFound';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import Navbar from './components/Navbar';
import Payment from './components/Payment';

import { createBrowserHistory } from "history";
import PrivateRoute from './components/PrivateRoute';
import Auth from './components/Auth';


const customHistory = createBrowserHistory();
const middleware = [thunk];
const store = createStore(
    persistReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router history={customHistory}>
                <Navbar history={customHistory}/>
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <PrivateRoute path="/cart" exact component={Cart} auth={Auth.isAuthenticated}/>
                    <PrivateRoute path="/checkout" exact component={CheckOut} auth={Auth.isAuthenticated}/>
                    <PrivateRoute path="/payment"  exact component={Payment} auth={Auth.isAuthenticated} />
                    <Route path="/thankyou" component={ThankYou} />
                    <Redirect from="/signout" to="/" />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </PersistGate>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
