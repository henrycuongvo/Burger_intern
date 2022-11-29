import { Route, Switch } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';
// import { Switch } from 'react-router-dom';

import './App.css';
import Order from 'pages/Order';
function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" element={<BurgerBuilder />}></Route>
                <Route path="/order" element={<Order />} />
            </Switch>
        </div>
    );
}

export default App;
