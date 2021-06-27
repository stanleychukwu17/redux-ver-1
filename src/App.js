import CakeContainer from "./components/CakeComp";
import CreamContainer from './components/CreamComp';
import ItemComp from './components/ItemComp';
import UserComp from './components/UserComp';

let jam = ['a', 'b', 'c'];
let ghana = ['d', 'e', 'f', 'g'];
let final = [...jam, ...ghana];

console.log(jam, ghana, final);


const App = (props) => {
    return (
        <div>
            <div className="holder"><CakeContainer /></div>
            <div className="holder"><CreamContainer /></div>
            <div className="holder"><ItemComp /></div>
            <div className="holder hld_user"><UserComp /></div>
        </div>
    );
}

export default App;
// export default App;