import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CakeComp from './components/CakeComp.js';

const App = () => {
  return (
    <div className="home">
      <div>Welcome back to react building </div>
      <div><CakeComp /></div>
    </div>
  );
}
 
ReactDOM.render(<App />, document.getElementById('root'));