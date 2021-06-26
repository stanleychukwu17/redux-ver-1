import {useState} from 'react';
import {connect} from 'react-redux';
import {buyCake, buyCream} from '../redux/actions'

const ItemComp = (props) => {
    let [qty, setQty] = useState(1);
    let [item, setItem] = useState('cake');

    const buy_item = (wch, qty) => {
        if (wch === 'cake') { props.buyCake(qty); }
        else { props.buyCream(qty); }
    }

    return (
        <div>
            <div>Enter num of items to buy</div>
            <div>
                <select value={item} onChange={(e) => setItem(e.target.value)}>
                    <option value="cake">Buy cake</option><option value="cream">Buy creaam</option>
                </select>
                <input type="num" value={qty} onChange={(e) => setQty(e.target.value)} />
                <button onClick={buy_item.bind(this, item, qty)}>Buy {qty} {item} now</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        'buyCake':(qty) => dispatch(buyCake(qty)), 'buyCream':(qty) => dispatch(buyCream(qty)),
    }
}

export default connect(null, mapDispatchToProps)(ItemComp);