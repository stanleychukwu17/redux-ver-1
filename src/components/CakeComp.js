import {connect} from 'react-redux'
import {useEffect, useState} from 'react'

import {buyCake} from '../redux/cake/cakeAction'

const CakeComp = (props) => {
    let [john, setJohn] = useState(50);

    useEffect(() => {
        console.log('rendered')
    })

    return (
        <div>
            <div>Cakes we have now - {props.numCakes}</div>
            <div>John is now - {john}</div>
            <div><button onClick={props.buyCake}>Buy cake</button></div>
            <div><button onClick={() => setJohn(john - 1)}>reduce john</button></div>
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