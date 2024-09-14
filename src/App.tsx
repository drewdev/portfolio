import React from 'react';
import Home from './pages/home/home';
import Navbar from './pages/navbar/navbar';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
