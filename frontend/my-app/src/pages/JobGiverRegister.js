
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { jobGiverSignUpAction } from '../redux/actions/userAction';
import { useState } from 'react';

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

  const [image, setImage] = useState([]);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  



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
        
        console.log(values);
        dispatch(jobGiverSignUpAction(values));
        actions.resetForm();
    }

})
  



  return (
    <>
    <Navbar/>
    <div className='container'>
    <form className='my-5'onSubmit={formik.handleSubmit} encType="multipart/form-data">

    <div className="form-group">
        <label htmlFor="nameOfOrganization">nameOfOrganization</label>

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

    <img className="img-fluid" src={formik.values.image}  alt="" /> <br/>
   
    
    <button type="submit" className="btn btn-primary">Go</button>
    
    </form>

    
    </div>
    
    <Footer/>
  </>
  );
}

export default JobGiver;