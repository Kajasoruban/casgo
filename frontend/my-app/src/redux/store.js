import { legacy_createStore,combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { jobGiverReducerSignUp, jobSeekerReducerSignUp, userReducerLogout, userReducerProfile, userReducerSignIn, userReducerSignUp } from './reducers/userReducer';
import { jobPostReducer, loadJobReducer } from './reducers/jobReducer';



//combine reducers
const reducer = combineReducers({
    signIn: userReducerSignIn,
    signUp: userReducerSignUp,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    jobGiverSignUp:jobGiverReducerSignUp,
    jobSeekerSignUp:jobSeekerReducerSignUp,
    loadJobs: loadJobReducer,
    jobPost: jobPostReducer,
});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    userProfile:{
        userInfoExtra: localStorage.getItem('userInfoExtra') ? JSON.parse(localStorage.getItem('userInfoExtra')) : null
    }
};
const middleware = [thunk];
const store = legacy_createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;