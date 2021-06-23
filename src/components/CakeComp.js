import {connect} from 'react-redux'

import {buyCake} from '../redux/cake/cakeAction'

const CakeComp = (props) => {
    return (
        <div>
            <div>Cakes we have now - {props.numCakes}</div>
            <div><button onClick={props.buyCake}>Buy cake</button></div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {numCakes: state.numCakes}
}

const mapDispatchToProps = (dispatch) => {
    return {buyCake: () => dispatch(buyCake())}
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComp);