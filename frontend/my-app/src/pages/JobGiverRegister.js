
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { jobGiverSignUpAction } from '../redux/actions/userAction';
import '../Assets/css/JobGiverRegister.css';
import GoogleMap from '../components/GoogleMap';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  nameOfOrganization: yup
      .string('Enter your nameOfOrganization')
      
      .required('nameOfOrganization is required'),
  
      address: yup
      .string('Enter your address')
      .required('address is required'),  

      contactNo: yup
      .string('Enter your contactNo')
      .min(10, 'contact no should be of minimum 10 characters length')
      .required('contactNo is required'),  

 
});

function JobGiver() {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo ,loading} = useSelector(state => state.signIn);
  



  const formik = useFormik({
    initialValues: {
      nameOfOrganization: '',
      address: '',
      contactNo: '',
      image:""
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
        //  alert(JSON.stringify(values, null, 2));
        // const data={...values,image:image}
        
        // console.log(values);
        dispatch(jobGiverSignUpAction(values));
        actions.resetForm();
        navigate('/');
       
        
    }

})
  



  return (
    <>
    <Navbar/>
    <div className='container jobgiver-reg border border-2 rounded-1 my-5'>
      
      <h1 className='display-6 text-center heading-1 fw-bold'>Job Giver Register</h1>
    <form className=''onSubmit={formik.handleSubmit} encType="multipart/form-data">
    
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
           
            // console.log(e.target.files[0]);
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () =>{
             console.log(reader.result);
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
        <label htmlFor="nameOfOrganization">Name Of Organization:</label>

        <input
          type="text"
          className="form-control" 
          placeholder="Enter nameOfOrganization"
          id="nameOfOrganization"
          name='nameOfOrganization'
          
          value={formik.values.nameOfOrganization}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // error={formik.touched.nameOfOrganization && Boolean(formik.errors.nameOfOrganization)}
          // helperText={formik.touched.nameOfOrganization && formik.errors.nameOfOrganization}
        />
 
    </div>

    <br/>

    <div className="form-group">
        <label htmlFor="address">Location:</label>

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

    {/* <GoogleMap/> */}
    
    <Footer/>
  </>
  );
}

export default JobGiver;