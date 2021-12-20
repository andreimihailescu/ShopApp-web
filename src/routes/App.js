import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Link to="/shopitems">ShopItems</Link>
            <Link to="/tool">Tool</Link>

            <Outlet />
        </div>
    );
}

export default App;
