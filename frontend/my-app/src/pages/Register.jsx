import { Avatar, Box } from '@mui/material'

import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { userSignUpAction } from '../redux/actions/userAction'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';


const validationSchema = yup.object({
    name: yup
        .string('Enter your Name')
        .min(3, 'First Name should be of minimum 3 characters length')
        .required('Name is required'),
    // lastName: yup
    //     .string('Enter your Last Name')
    //     .min(3, 'Last Name should be of minimum 3 characters length')
    //     .required('Last Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});



const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useSelector(state => state.signUp);
  useEffect(() => {

      if (isAuthenticated) {
              if (userInfo.role === "admin") {
                  navigate('/auth');
              } else {
                  navigate('/');
              }
          }

          // if (isAuthenticated) {
          //     navigate('/user/dashboard');
          // }
      }, [isAuthenticated])


    const formik = useFormik({
        initialValues: {
            name:"",
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(userSignUpAction(values));
            actions.resetForm();
        }

    })

    const [show,setShow]=useState(false)

    return (
        <>
            <Navbar />
            <Box sx={{ minHeight: 'calc(100vh - 140px)', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "30vw" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockOpenIcon />
                        </Avatar>
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="name"
                            label="User Name"
                            name='name'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="User Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        {/* <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name='lastName'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        /> */}
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            sx={{
                                mb: 0,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary'
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type={show?"text":"password"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        /><Box sx={{mr:10}}>
                        <input 
                        type="checkbox"
                        onClick={()=>setShow(!show)}
                        />
                        Show password</Box>

                        <Button fullWidth variant="contained" type='submit' >Register</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Register