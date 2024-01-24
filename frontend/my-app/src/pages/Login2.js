
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jobGiverReducerSignUp } from '../redux/reducers/userReducer';

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

  const formik = useFormik({
    initialValues: {
      nameOfOrganization: '',
      address: '',
      contactNo: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
        //  alert(JSON.stringify(values, null, 2));
        dispatch(jobGiverReducerSignUp(values));
        actions.resetForm();
    }

})
  



  return (
    <>
    <Navbar/>
    <div className='container'>
    <form className='my-5'onSubmit={formik.handleSubmit}>

    <div class="form-group">
        <label for="nameOfOrganization">nameOfOrganization</label>

        <input
          type="text"
          class="form-control" 
          placeholder="Enter nameOfOrganization"
          id="nameOfOrganization"
          name='nameOfOrganization'
          InputLabelProps={{
              shrink: true,
          }}
          value={formik.values.nameOfOrganization}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.nameOfOrganization && Boolean(formik.errors.nameOfOrganization)}
          helperText={formik.touched.nameOfOrganization && formik.errors.nameOfOrganization}
        />
 
    </div>

    <div class="form-group">
        <label for="address">address</label>

        <input
          type="text"
          class="form-control" 
          placeholder="Enter address"
          id="address"
          name='address'
          InputLabelProps={{
              shrink: true,
          }}
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
 
    </div>

    <div class="form-group">
        <label for="contactNo">contactNo</label>

        <input
          type="text"
          class="form-control" 
          placeholder="Enter contactNo"
          id="contactNo"
          name='contactNo'
          InputLabelProps={{
              shrink: true,
          }}
          value={formik.values.contactNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
          helperText={formik.touched.contactNo && formik.errors.contactNo}
        />
 
    </div>

    <div class="form-group">
        <label for="contactNo">contactNo</label>

        <input
          type="file"
          class="form-control" 
          placeholder="Enter contactNo"
          id="contactNo"
          name='contactNo'
          InputLabelProps={{
              shrink: true,
          }}
          value={formik.values.contactNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
          helperText={formik.touched.contactNo && formik.errors.contactNo}
        />
 
    </div>

    
   
    
    <button type="submit" class="btn btn-primary">Go</button>
    
    </form>

    
    </div>
    
    <Footer/>
  </>
  );
}

export default JobGiver;