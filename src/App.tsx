import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <nav className='nav'>
            <ul className='nav nav-tabs'>
              <li className='nav-item'>
                <a className='nav-link'>
                  <Link to="/">Catálogo</Link>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' >
                  <Link to="/dados">Novo</Link>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
