import React,{useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { allUserAction } from '../../redux/actions/userAction';
import moment from 'moment'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

// const rows = [
//   { id: 1, email: 'Snow', name: 'Jon', age: 14 },
//   { id: 2, email: 'Lannister', name: 'Cersei', age: 31 },
//   { id: 3, email: 'Lannister', name: 'Jaime', age: 31 },
//   { id: 4, email: 'Stark', name: 'Arya', age: 11 },
//   { id: 5, email: 'Targaryen', name: 'Daenerys', age: null },
//   { id: 6, email: 'Melisandre', name: null, age: 150 },
//   { id: 7, email: 'Clifford', name: 'Ferrara', age: 44 },
//   { id: 8, email: 'Frances', name: 'Rossini', age: 36 },
//   { id: 9, email: 'Roxie', name: 'Harvey', age: 65 },
// ];

function AdminAllUsers() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUserAction());
    }, []);


    const { users, loading } = useSelector(state => state.allUsers);
    let data = [];
    data = (users !== undefined && users.length > 0) ? users : []


    console.log(users);  

    const deleteUserById = (e, id) => {
      console.log(id);
  }
    
    

const columns= [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'name',
      headerName: 'User Name',
      width: 150,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
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
              <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/user/${values.row._id}`}>Edit</Link></ Button>
              < Button onClick={(e) => deleteUserById(e, values.row._id)} variant="contained" color="error">Delete</ Button>
          </Box>
      )
    }
  ];
  



  return (
    <>
    <div>AllUsers</div>
    <Box sx={{ height: 500, width: '100%' }}>
    <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
    <Link to='/register'><Button variant='contained' color="success" startIcon={<AddIcon />}> Create user</Button></Link>
                </Box>
      <DataGrid
       getRowId={(row) => row._id}
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    
    
    </>
    
  )
}

export default AdminAllUsers