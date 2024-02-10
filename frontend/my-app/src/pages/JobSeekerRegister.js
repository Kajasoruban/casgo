
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { jobSeekerSignUpAction } from '../redux/actions/userAction';
import '../Assets/css/JobGiverRegister.css';


const validationSchema = yup.object({
      age: yup
      .string('Enter your age')
      
      .required('age is required'),

      gender: yup
      .string('Enter your gender')
      
      .required('gender is required'),
  
      address: yup
      .string('Enter your address')
      .required('address is required'),  

      contactNo: yup
      .string('Enter your contactNo')
      .min(10, 'contact no should be of minimum 10 characters length')
      .required('contactNo is required'),  

 
});

function JobSeeker() {

//   const [image, setImage] = useState([]);
  const dispatch = useDispatch();
  const { userInfo ,loading} = useSelector(state => state.signIn);
  // const navigate = useNavigate();

  



  const formik = useFormik({
    initialValues: {
      age: '',
      gender:"",
      address: '',
      contactNo: '',
      image:""
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
        //  alert(JSON.stringify(values, null, 2));
        // const data={...values,image:image}
        
        console.log(values);
        dispatch(jobSeekerSignUpAction(values));
        actions.resetForm();
    }

})
  



  return (
            <>
            <Navbar/>
            <div className='container jobgiver-reg border border-2 rounded-1 my-5'>
            <form className='m-5'onSubmit={formik.handleSubmit} encType="multipart/form-data">
            
            <h1 className='display-6 text-center heading-1 fw-bold'>Job Seeker Register</h1>
            
            <div className='row align-items-center'>
                <div className='col-2'>
                    <img className="img-fluid" src={!formik.values.image?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU":formik.values.image} style={{width:'10rem',borderRadius:'50%'}} alt="" /> 
                </div>
                <div className="col-10">

        

                    

                        <input
                        type="file"
                        className="" 
                        
                        id="image"
                        name='image'
                        onChange={(e)=>{
                        
                            console.log(e.target.files[0]);
                            const reader = new FileReader();
                            reader.readAsDataURL(e.target.files[0]);
                            reader.onloadend = () =>{
                            console.log();
                            formik.setFieldValue("image",reader.result);
                        
                    }
                        }}
                        // value={formik.values.image}
                        // onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // error={formik.touched.image && Boolean(formik.errors.image)}
                        // helperText={formik.touched.image && formik.errors.image}
                        />
                
                    

                 </div>
            </div>

            <br/>

            <div className="row">
            <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" value={!userInfo?'':userInfo.email} readOnly id="inputEmail4" placeholder="Email"/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">User Name</label>
                <input type="text" className="form-control" id="inputPassword4" value={!userInfo?'':userInfo.name} readOnly placeholder="Password"/>
            </div>
            </div>

            <br/>

            <div className="form-group">
                <label htmlFor="age">Age:</label>

                <input
                type="text"
                className="form-control" 
                placeholder="Enter age"
                id="age"
                name='age'
                
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // error={formik.touched.age && Boolean(formik.errors.age)}
                // helperText={formik.touched.age && formik.errors.age}
                />
        
            </div>

            <br/>


            <div className="form-group">
                <label htmlFor="gender">Gender:</label>

                <input
                type="text"
                className="form-control" 
                placeholder="Enter your gender"
                id="gender"
                name='gender'
                
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // error={formik.touched.gender && Boolean(formik.errors.gender)}
                // helperText={formik.touched.gender && formik.errors.gender}
                />
        
            </div>


            <br/>

            <div className="form-group">
                <label htmlFor="address">location:</label>

                <input
                type="text"
                className="form-control" 
                placeholder="Enter address"
                id="address"
                name='address'
                
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // error={formik.touched.address && Boolean(formik.errors.address)}
                // helperText={formik.touched.address && formik.errors.address}
                />
        
            </div>


            <br/>

            <div className="form-group">
                <label htmlFor="contactNo">Contact No:</label>

                <input
                type="text"
                className="form-control" 
                placeholder="Enter contactNo"
                id="contactNo"
                name='contactNo'
                
                value={formik.values.contactNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
                // helperText={formik.touched.contactNo && formik.errors.contactNo}
                />
        
            </div>

            <br/>

           

           
        
            
            <div className='go'>
            <button type="submit" className="btn btn-warning py-2 px-5 fs-5 mx-5">Go</button>
            </div>
            
            </form>

            
            </div>
            
            <Footer/>
        </>
  );
}

export default JobSeeker;