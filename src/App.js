import CakeContainer from "./components/CakeComp";
import CreamContainer from './components/CreamComp';

const App = (props) => {
    return (
        <div>
            <div className="holder"><CakeContainer /></div>
            <div className="holder"><CreamContainer /></div>
        </div>
    );
}

export default App;
// export default App;