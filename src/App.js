import CakeContainer from "./components/CakeComp";
import CreamContainer from './components/CreamComp';
import ItemComp from './components/ItemComp';

const App = (props) => {
    return (
        <div>
            <div className="holder"><CakeContainer /></div>
            <div className="holder"><CreamContainer /></div>
            <div className="holder"><ItemComp /></div>
        </div>
    );
}

export default App;
// export default App;