import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducer = {
  persons: []
}

const store = createStore(reducer);

ReactDOM.render(<Provider/><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
