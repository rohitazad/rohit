import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/Css/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './Redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux';


const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
