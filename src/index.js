import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import {connect} from 'react-redux';

const mockReducer = (state={}, action) => {
    return state;
}

let store = createStore(mockReducer);

//TODO: connect(mapStateToProps(), mapDispatchToProps()) the state of Quiz component to redux store, and create corresponding actions/reducers

const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(
    <Root />
, document.getElementById('root'));

registerServiceWorker();
