import './App.css';
import ListClientesComponent from './components/ListClientesComponent.js';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddClienteComponent from './components/AddClienteComponent.js';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<ListClientesComponent />}></Route>
          <Route exact path='/add-cliente' element={<AddClienteComponent />}></Route>
          <Route exact path='/edit-cliente/:id' element={<AddClienteComponent />}></Route>
        </Routes> 
      </div>
      <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
