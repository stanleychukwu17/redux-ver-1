import {connect} from 'react-redux';
import { buyCream } from '../redux/actions';

const CreamContainer = (props) => {
    return (
        <div>
            <div>Creams on shelf - {props.numCreams}</div>
            <button onClick={()=> {props.buyCream()}}>Buy cake</button>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {'numCreams':state.numCreams}
}

let mapDispatchToProps = (dispatch) => {
    return {
        buyCream : () => dispatch(buyCream())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CreamContainer);