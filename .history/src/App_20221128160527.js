import { Switch } from 'antd';
import { Route, Routes } from 'react-router';
import BurgerBuilder from 'pages/BurgerBuilder';

import './App.css';
function App() {
    return (
        <div className="App">
            {/* <Switch> */}
            <Route path="/" element={<BurgerBuilder />}></Route>
            {/* </Switch> */}
        </div>
    );
}

export default App;
