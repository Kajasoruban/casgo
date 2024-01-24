// import logo from './logo.svg';
import './App.css';
import "./Assets/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import JobGiver from './pages/Login2';


function App() {
  return (
    <>
    
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/jobgiver" element={<JobGiver/>}/>
    </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
