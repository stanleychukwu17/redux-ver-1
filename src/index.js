import {React} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import {Provider} from 'react-redux'

const Jamb = () => {
  return (
    <div>
      <App />
    </div>
  );
}
 
ReactDOM.render(<Jamb />, document.getElementById('root'));