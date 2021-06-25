import {useState} from 'react';

const ItemComp = () => {
    let [qty, setQty] = useState(1);

    return (
        <div>
            <div>Enter num of items to buy</div>
            <div>
                <select><option value="">Buy cake</option><option value="">Buy creaam</option></select>
                <input type="num" value={qty} />
                <button>Buy now</button>
            </div>
        </div>
    )
}
 
export default ItemComp;