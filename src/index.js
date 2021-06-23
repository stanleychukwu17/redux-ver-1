import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CakeComp from './components/CakeComp.js';
import store from './redux/store';
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <div className="home">
        <div>Welcome back to react building </div>
        <div><CakeComp /></div>
      </div>
    </Provider>
  );
}
 
ReactDOM.render(<App />, document.getElementById('root'));