
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { jobSeekerSignUpAction } from '../redux/actions/userAction';

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
            <div className='container'>
            <form className='m-5'onSubmit={formik.handleSubmit} encType="multipart/form-data">

            <div className="form-group">
                <label htmlFor="age">age</label>

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

            <div className="form-group">
                <label htmlFor="gender">gender</label>

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

            <div className="form-group">
                <label htmlFor="address">address</label>

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

            <div className="form-group">
                <label htmlFor="contactNo">contactNo</label>

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

            <div className="form-group">
                <label htmlFor="image">image</label>

                <input
                type="file"
                className="form-control" 
                
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

            {/* <img className="img-fluid" src={image} alt="" /> */}
        
            
            <button type="submit" className="btn btn-primary">Go</button>
            
            </form>

            
            </div>
            
            <Footer/>
        </>
  );
}

export default JobSeeker;