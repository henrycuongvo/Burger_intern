import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';
// import { Switch } from 'react-router-dom';

import './App.css';
import Order from 'pages/Order';
import NotFound from 'layouts/NotFound';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<BurgerBuilder />}></Route>
            </Routes>
        </div>
    );
}

export default App;
