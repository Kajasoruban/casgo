import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { ApprovalAction, NotApprovedAction} from '../../redux/actions/userAction';
import moment from 'moment'
import { Button, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "../../Assets/css/Approval.css"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function ChildModal({setOpen2,id}) {
  const dispatch=useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen2(false);
  };
  const handleConfirm=(id)=>{
    dispatch(ApprovalAction(id));
    setOpen2(false);
  }
  return (
    <React.Fragment>
      <Box textAlign='center'>
      <Button onClick={handleOpen} variant="contained">Verify</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style,height:150, width: 300 }}>
          <h2 id="child-modal-title">Are you sure</h2>
          {/* <p id="child-modal-description">
            Are you sure
          </p> */}
          <Box sx={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between' }}>
          <Button onClick={()=>handleConfirm(id)}variant="outlined"color="primary"sx={{mr:3}}>Confirm</Button>
          <Button onClick={handleClose}variant="outlined">Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function AdminApproval() {
    const dispatch = useDispatch();
    const [open2, setOpen2] = React.useState(false);
    const [user,setUser]= useState({image:{url:"https://res.cloudinary.com/dbczgzhd3/image/upload/v1708561726/jobgiver/j2yuscgn7ilbq8e1pez1.jpg"},userId:{name:"annonymous",email:"email"}});
    const handleOpen = (e,i) => {setOpen2(true);setUser(i)};
    const handleClose = () => setOpen2(false);

    useEffect(() => {
        dispatch(NotApprovedAction());
    }, []);




    const { jobgivers, loading } = useSelector(state => state.NotApproved);
    let data = [];
    data = (jobgivers !== undefined && jobgivers.length > 0) ? jobgivers : []


    

  
    
    

const columns= [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'userId',
      headerName: 'user',
      width: 125,
      editable: false,
      valueFormatter: ({ value }) => value.name 
    },
    {
      field: 'nameOfOrganization',
      headerName: 'Name',
      width: 125,
      editable: false,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 125,
      editable: false, 
    },
    {
        field: 'contactNo',
        headerName: 'ContactNo',
        width: 150,
        editable: false,
      },
   
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      type: 'number',
      width: 150,
      editable: false,
      renderCell: (params) => (
        moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
    )
    },
    {
      field: "Actions",
      width: 200,
      renderCell: (values) => (
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
              <Button variant="contained" onClick={(e)=>{handleOpen(e,values.row)}}>Verify</ Button>
              {/* < Button onClick={(e) => suspendUserById(e, values.row._id)} variant="contained" color="error">suspend</ Button> */}
          </Box>
      )
    }
  ];
  


  return (
    <>
    <div>AdminApproval</div>

    <div>
      
      <Modal
        open={open2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" textAlign='center' variant="h5" component="h2">
            Job Giver Details
          </Typography>
          <br/>
          
          <div className='containe row'id="modal-modal-description">
              <div className='col-6 '>
              <img src={user&&user.image.url} className='border border-2 rounded' style={{width:"300px",height:"300px"}}/>
              </div>
              <div className='col-6'>
          
               <table>
                <tbody>
                <tr>
                  <td><span className='lead'>Organization: </span></td>
                  <td> <span className='fw-bold ms-2'>{user&&user.nameOfOrganization}</span></td>
                </tr>
                <tr>
                  <td><span className='lead'>Address: </span></td>
                  <td><span className='fw-bold ps-2'> {user.address}</span></td>
                </tr>
                <tr>
                  <td><span className='lead'>ContactNo: </span></td>
                  <td><span className='fw-bold ps-2'> {user.contactNo}</span></td>
                </tr>
                <tr>
                  <td><span className='lead'>Name: </span></td>
                  <td><span className='fw-bold ps-2'> {user.userId.name}</span></td>
                </tr>
                <tr>
                  <td><span className='lead'>Email: </span></td>
                  <td><span className='fw-bold ps-2'> {user.userId.email}</span></td>
                </tr>
                </tbody>
               </table>
               {/* <p>{user&&user.image.url}</p> */}
              
              </div>
              
          </div>
          <br/>
          
          <ChildModal setOpen2={setOpen2} id={user._id}/>
        </Box>
      </Modal>
    </div>
    
    <Box sx={{ height: 550, width: '100%' }}>
    <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
    
                </Box>
      <DataGrid
       getRowId={(row) => row._id}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>


    </>
  )
}

export default AdminApproval;