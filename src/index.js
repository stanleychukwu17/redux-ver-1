import {React} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import {Provider} from 'react-redux'
import store from './redux/store';

const Jamb = () => {
  return (
    <div className="home">
      <App />
    </div>
  );
}
 
ReactDOM.render(<Jamb />, document.getElementById('root'));