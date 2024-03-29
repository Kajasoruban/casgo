import React, { useEffect ,useState} from 'react'

import { Avatar, Box } from '@mui/material'
import LockClockOutlined from '@mui/icons-material/LockClockOutlined'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSignInAction } from "../redux/actions/userAction";



const validationSchema = yup.object({
  email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});


function LoginModel() {


    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useSelector(state => state.signIn);
  useEffect(() => {

      if (isAuthenticated) {
              if (userInfo.role === "admin") {
                  navigate('/');
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
              email: '',
              password: ''
          },
          validationSchema: validationSchema,
          onSubmit: (values, actions) => {
              //  alert(JSON.stringify(values, null, 2));
              dispatch(userSignInAction(values));
              actions.resetForm();
          }

      })

      const [show,setShow]=useState(false)



  return (
     
    <>
    

    <Box sx={{ height: '50vh', display: "flex", alignItems: "center", justifyContent: "center" }}>


    <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "25vw" }}>
            <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                <LockClockOutlined />
            </Avatar>
            <TextField sx={{ mb: 3 }}
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
            <TextField sx={{ mb: 0 }}
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

            <Button fullWidth variant="contained" type='submit' >Log In</Button>
        </Box>
        <Box sx={{mt:2}}>if you're not register <a href="/register">click here</a></Box>
        
        
    </Box>
    </Box>


    
 
    
    
    </>



   
    
  )
}

export default LoginModel