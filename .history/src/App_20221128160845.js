import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';
import { Swith } from 'react-router-dom';

import './App.css';
import Order from 'pages/Order';
function App() {
    return (
        <div className="App">
            <Swith>
                <Routes>
                    <Route path="/" element={<BurgerBuilder />}></Route>
                    <Route path="/order" element={<Order />} />
                </Routes>
            </Swith>
        </div>
    );
}

export default App;
