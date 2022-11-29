import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';
// import { Switch } from 'react-router-dom';

import './App.css';
import Login from 'pages/Login';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<BurgerBuilder />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;
