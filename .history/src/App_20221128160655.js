import { Switch } from 'antd';
import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';

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
