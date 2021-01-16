import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(shoppingListItemReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('root')
);
//store value is then passed in as a prop to Provider
//to gain access to the store somewhere in our app, we use a second function provided by react-redux, connect. 
