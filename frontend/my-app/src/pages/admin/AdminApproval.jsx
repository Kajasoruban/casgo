import React,{useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { NotApprovedAction} from '../../redux/actions/userAction';
import moment from 'moment'
import { Button, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function ChildModal({setOpen2}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen2(false);
  };
  const handleConfirm=()=>{
    setOpen2(false)
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
          <Button onClick={handleConfirm}variant="outlined"color="primary"sx={{mr:3}}>Confirm</Button>
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
    const handleOpen = () => setOpen2(true);
    const handleClose = () => setOpen2(false);

    useEffect(() => {
        dispatch(NotApprovedAction());
    }, []);


    const { jobgivers, loading } = useSelector(state => state.NotApproved);
    let data = [];
    data = (jobgivers !== undefined && jobgivers.length > 0) ? jobgivers : []


    

    const suspendUserById = (e, id) => {
      console.log(id);
  }
    
    

const columns= [
    { field: '_id', headerName: 'ID', width: 200 },
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
      field: 'updatedAt',
      headerName: 'UpdatedAt',
      type: 'number',
      width: 150,
      editable: false,
      renderCell: (params) => (
        moment(params.row.updatedAt).format('YYYY-MM-DD HH:MM:SS')
    )
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
              <Button variant="contained" onClick={handleOpen}>Verify</ Button>
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
          <Typography id="modal-modal-title" textAlign='center' variant="h6" component="h2">
            Job Giver
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.length!==0?data[0].nameOfOrganization:null}
          </Typography>
          <ChildModal setOpen2={setOpen2}/>
        </Box>
      </Modal>
    </div>
    
    <Box sx={{ height: 550, width: '100%' }}>
    <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
    <Link to='/register'><Button variant='contained' color="success" startIcon={<AddIcon />}> Create user</Button></Link>
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