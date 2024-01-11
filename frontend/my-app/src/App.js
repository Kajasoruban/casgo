// import logo from './logo.svg';
import './App.css';
import "./Assets/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
