import {BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home';
import Table from './pages/Table';
import Tasks from './pages/Tasks';
import RegisterForm from './pages/Register';
import LoginForm from './pages/Login';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/EduSync' element={<Home/>}/>
            <Route path='/Table' element={<Table/>}/>
            <Route path='/Tasks' element={<Tasks/>}/>
            <Route path='/Register' element={<RegisterForm/>}/>
            <Route path='/Login' element={<LoginForm/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
