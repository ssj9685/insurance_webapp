import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './index.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import reducer from './reducer/reducer';

const store = createStore(reducer);

const render = ()=>{
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );        
}

store.subscribe(render);
render();