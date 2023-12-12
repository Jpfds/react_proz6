import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Tela1 = () => (
  <div class="divconteudo">
    <h2>Tela 1</h2>
    <p>Filmes favoritos de 2023.</p>
    <img src='https://i.imgur.com/iZ00Vdn.jpg'/> 
  </div>
);

const Tela2 = () => (
  <div class="divconteudo">
    <h2>Tela 2</h2>
    <p>Filmes favoritos de 2022</p>
    <img src='https://i.imgur.com/gcDezWk.jpg'/>
  </div>
);

const RouteComponent = () => {
  return (
    <Router>
      <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/tela1">Tela 1</Link>
            </li>
            <li>
              <Link to="/tela2">Tela 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/tela1" Component={Tela1}>
          </Route>
          <Route path="/tela2" Component={Tela2}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default RouteComponent;