// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ProSidebarProvider } from 'react-pro-sidebar';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import JobGiver from './pages/JobGiverRegister';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import JobSeeker from './pages/JobSeekerRegister';
import JobPost from './pages/JobPost';
import Jobs from './pages/Jobs';
import UserRoute from './components/UserRoutes';
import SideBar from '../src/pages/global/SideBar'
import AdminDashBoard from './pages/admin/AdminDashBoard';
import Layout from './pages/global/Layout';


const AdminDashboardHOC = Layout(AdminDashBoard);
const UserDashboardHOC = Layout(Profile);

function App() {
  return (
    <>
    
    <ToastContainer/>

    <ProSidebarProvider>

    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/profile" element={<UserRoute><Profile/></UserRoute>}/>
    <Route path="/jobgiver" element={<JobGiver/>}/>
    <Route path="/jobseeker" element={<JobSeeker/>}/>
    <Route path="/jobPost" element={<JobPost/>}/>
    <Route path="/dashboard" element={<AdminDashboardHOC/>}/>
    <Route path="/jobs" element={<UserRoute><Jobs/></UserRoute>}/>
    <Route path="*" element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>

    </ProSidebarProvider>

    </>
  );
}

export default App;
