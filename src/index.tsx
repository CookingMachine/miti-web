import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import './styles/main'
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

const rootElement = document.getElementById('root');

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
, rootElement);