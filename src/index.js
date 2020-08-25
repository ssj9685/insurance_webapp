import React from 'react';
import ReactDOM from 'react-dom';
import Insurance from './component/insurance/Insurance';
import './index.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import reducer from './reducer/reducer';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard'
import Panel from './component/panel/Panel'

const store = createStore(reducer);

const render = ()=>{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Route exact path="/" component={Insurance}/>
                <Route path="/panel" component={Panel}/>
                <Route path="/dashboard" component={Dashboard}/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );        
}

store.subscribe(render);
render();