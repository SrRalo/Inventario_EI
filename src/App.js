import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignForm from '../src/Components/SignForm/SignForm';
import Main from '../src/Components/MainScreen/Main';
import Crud from '../src/Components/CRUD/Crud';
import Search from '../src/Components/Busqueda/Search';
import Reports from '../src/Components/Reportes/Reportes';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignForm />} />
        <Route path="/main" element={<Main />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/search" element={<Search />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<SignForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;