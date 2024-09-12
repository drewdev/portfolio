import React from 'react';
import Home from './pages/home/home';
import Navbar from './pages/navbar/navbar';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Home />
            {/* Puedes agregar más secciones o componentes aquí */}
        </div>
    );
};

export default App;
