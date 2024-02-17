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
import AdminAllUsers from './pages/admin/AdminAllUsers';
import Layout from './pages/global/Layout';
import JobsById from './pages/JobsById';
import AdminAllJobs from './pages/admin/AdminAllJobs';
import AppliedJobs from './pages/JobSeeker/AppliedJobs';
import JobPosted from './pages/JobGiver/JobPosted';
import Applicants from './pages/JobGiver/Applicants';


const AdminDashboardHOC = Layout(AdminDashBoard);
const UserDashboardHOC = Layout(Profile);
const AdminAllUsersHOC = Layout(AdminAllUsers);
const AdminAllJobsHOC = Layout(AdminAllJobs);
const AppliedJobsHOC = Layout(AppliedJobs);
const JobPostedHOC= Layout(JobPosted);
const ApplicantsHOC=Layout(Applicants);

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
    <Route path="/profile" element={<UserRoute><UserDashboardHOC/></UserRoute>}/>
    <Route path="/jobgiver" element={<JobGiver/>}/>
    <Route path="/jobgiver/jobPosted" element={<UserRoute><JobPostedHOC/></UserRoute>}/>
    <Route path="/jobgiver/jobPosted/:id/applicants" element={<UserRoute><ApplicantsHOC/></UserRoute>}/>
    <Route path="/jobseeker" element={<JobSeeker/>}/>
    <Route path="/jobseeker/appliedjobs" element={<UserRoute><AppliedJobsHOC/></UserRoute>}/>
    <Route path="/jobPost" element={<JobPost/>}/>
    <Route path="/admin/dashboard" element={<UserRoute><AdminDashboardHOC/></UserRoute>}/>
    <Route path="/admin/allusers" element={<UserRoute><AdminAllUsersHOC/></UserRoute>}/>
    <Route path="/admin/alljobs" element={<UserRoute><AdminAllJobsHOC/></UserRoute>}/>
    <Route path="/jobs" element={<Jobs/>}/>
    <Route path='/jobs/:id' element={<UserRoute><JobsById /></UserRoute>} />
    <Route path="*" element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>

    </ProSidebarProvider>

    </>
  );
}

export default App;
