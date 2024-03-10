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
import JobGiverRoutes from './components/JobGiverRoutes';
import AdminApproval from './pages/admin/AdminApproval';
import Pricing from './pages/JobGiver/Pricing';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import PaymentHistory from './pages/JobGiver/PaymentHistory';
import GiverDashBoard from './pages/JobGiver/GiverDashBoard';
import Notifications from './pages/Notifications';


const AdminDashboardHOC = Layout(AdminDashBoard);
const UserDashboardHOC = Layout(Profile);
const AdminAllUsersHOC = Layout(AdminAllUsers);
const AdminAllJobsHOC = Layout(AdminAllJobs);
const AppliedJobsHOC = Layout(AppliedJobs);
const JobPostedHOC= Layout(JobPosted);
const ApplicantsHOC=Layout(Applicants);
const AdminApprovalHOC=Layout(AdminApproval);

const PaymentHistoryHOC=Layout(PaymentHistory);
const GiverDashBoardHOC=Layout(GiverDashBoard);

const NotificationsHOC=Layout(Notifications);

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
    <Route path="/jobs" element={<Jobs/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/notifications" element={<UserRoute><NotificationsHOC/></UserRoute>}/>
    <Route path="/cancel" element={<Cancel/>}/>
    <Route path='/jobs/:id' element={<JobsById />} />
    <Route path="*" element={<NotFound/>}/>

    <Route path="/jobgiver" element={<JobGiver/>}/>
    <Route path="/jobgiver/jobPosted" element={<UserRoute><JobPostedHOC/></UserRoute>}/>
    <Route path="/jobgiver/jobPosted/:id/applicants" element={<UserRoute><ApplicantsHOC/></UserRoute>}/>
    <Route path="/jobgiver/paymentHistory" element={<JobGiverRoutes><PaymentHistoryHOC/></JobGiverRoutes>}/>
    <Route path="/jobgiver/dashboard" element={<JobGiverRoutes><GiverDashBoardHOC/></JobGiverRoutes>}/>
    <Route path="/jobPost" element={<JobGiverRoutes><JobPost/></JobGiverRoutes>}/>
    <Route path="/pricing" element={<JobGiverRoutes><Pricing/></JobGiverRoutes>}/>


    <Route path="/jobseeker" element={<JobSeeker/>}/>
    <Route path="/jobseeker/appliedjobs" element={<UserRoute><AppliedJobsHOC/></UserRoute>}/>
  
    
    <Route path="/admin/dashboard" element={<UserRoute><AdminDashboardHOC/></UserRoute>}/>
    <Route path="/admin/allusers" element={<UserRoute><AdminAllUsersHOC/></UserRoute>}/>
    <Route path="/admin/alljobs" element={<UserRoute><AdminAllJobsHOC/></UserRoute>}/>
    <Route path="/admin/approval" element={<UserRoute><AdminApprovalHOC/></UserRoute>}/>

    

    </Routes>
    </BrowserRouter>

    </ProSidebarProvider>

    </>
  );
}

export default App;
