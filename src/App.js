import {useEffect} from 'react';
import CakeComp from './components/CakeComp.js';
import {connect} from 'react-redux'

const App = (props) => {
    useEffect(() => {
        console.log('rendered from app')
    })

    return (
        <div className="home">
            <div>Welcome back to react building - {props.numCakes} </div>
            <div><CakeComp /></div>
        </div>
    );
}
  
const mapStateToProps = (state) => {
return {numCakes: state.numCakes}
}
export default connect(mapStateToProps)(App);
// export default App;