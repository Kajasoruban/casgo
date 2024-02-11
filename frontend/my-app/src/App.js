// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import JobGiver from './pages/JobGiverRegister';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import JobSeeker from './pages/JobSeekerRegister';
import JobPost from './pages/JobPost';
import Jobs from './pages/Jobs';


function App() {
  return (
    <>
    
    <ToastContainer/>
    
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/jobgiver" element={<JobGiver/>}/>
    <Route path="/jobseeker" element={<JobSeeker/>}/>
    <Route path="/jobPost" element={<JobPost/>}/>
    <Route path="/jobs" element={<Jobs/>}/>
    <Route path="*" element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
