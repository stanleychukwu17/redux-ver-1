import {connect} from 'react-redux';
import { buyCake } from '../redux/actions';

const CakeContainer = (props) => {
    return (
        <div>
            <div>cakes on shelf - {props.numCakes}</div>
            <button onClick={()=> {props.buyCake()}}>Buy cake</button>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {numCakes: state.numCakes}
}

let mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);