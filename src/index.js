import {React} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'

const Jamb = () => {
  return (
    <Provider store={store}>
      
    </Provider>
  );
}
 
ReactDOM.render(<Jamb />, document.getElementById('root'));