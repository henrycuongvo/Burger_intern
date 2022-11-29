import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';
import { Switch } from 'react-router-dom';

import './App.css';
import Order from 'pages/Order';
function App() {
    return (
        <div className="App">
            <Switch>
                <Routes>
                    <Route path="/" element={<BurgerBuilder />}></Route>
                    <Route path="/order" element={<Order />} />
                </Routes>
            </Switch>
        </div>
    );
}

export default App;
