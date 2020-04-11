import React, { Component } from 'react';
import Navbar from './containers/Navbar'

import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
// Routes
import Routes from './Routes';
const browserHistory = createBrowserHistory();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <PersistGate persistor={persistor}>
                        <Navbar />
                        <Routes />
                    </PersistGate>
                </Router>
            </Provider>
        );
    }
}