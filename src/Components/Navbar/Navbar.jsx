import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
return (
    <nav className='navbar'>
      <a href="#">
        <img
          className='logo-link'
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6f2a7a497c173bef046bcf02d4e4f2e1eaa87849764b895623dd135fbd267?"
        />
      </a>

      <ul className='menu'>
      <li>
          <Link to="/main" className='menu-link'>Dashboard</Link>
        </li>
        <li>
          <Link to="/crud" className='menu-link'>CRUD</Link>
        </li>
        <li>
          <Link to="/search" className='menu-link'>Buscar</Link>
        </li>
        <li>
          <Link to="/reports" className='menu-link'>Reportes</Link>
        </li>
        <li>
          <Link to="/login" className='menu-link'>Cerrar sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;