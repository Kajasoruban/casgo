import React,{useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { NotApprovedAction, allUserAction } from '../../redux/actions/userAction';
import moment from 'moment'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminApproval() {
    const dispatch = useDispatch();

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
              <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/user/${values.row._id}`}>Verify</Link></ Button>
              < Button onClick={(e) => suspendUserById(e, values.row._id)} variant="contained" color="error">suspend</ Button>
          </Box>
      )
    }
  ];

  return (
    <>
    <div>AdminApproval</div>

    <Box sx={{ height: 550, width: '100%' }}>
    <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
    <Link to='/register'><Button variant='contained' color="success" startIcon={<AddIcon />}> Create user</Button></Link>
                </Box>
      <DataGrid
       getRowId={(row) => row._id}
        rows={jobgivers}
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

export default AdminApproval