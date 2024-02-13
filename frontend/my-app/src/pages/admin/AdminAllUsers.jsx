import React,{useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { allUserAction } from '../../redux/actions/userAction';
import moment from 'moment'

const rows = [
  { id: 1, email: 'Snow', name: 'Jon', age: 14 },
  { id: 2, email: 'Lannister', name: 'Cersei', age: 31 },
  { id: 3, email: 'Lannister', name: 'Jaime', age: 31 },
  { id: 4, email: 'Stark', name: 'Arya', age: 11 },
  { id: 5, email: 'Targaryen', name: 'Daenerys', age: null },
  { id: 6, email: 'Melisandre', name: null, age: 150 },
  { id: 7, email: 'Clifford', name: 'Ferrara', age: 44 },
  { id: 8, email: 'Frances', name: 'Rossini', age: 36 },
  { id: 9, email: 'Roxie', name: 'Harvey', age: 65 },
];

function AdminAllUsers() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allUserAction());
    }, []);


    const { users, loading } = useSelector(state => state.allUsers);
    let data = [];
    data = (users !== undefined && users.length > 0) ? users : []


    console.log(users);  
    
    

const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
      field: 'name',
      headerName: 'User Name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'updatedAt',
      headerName: 'UpdatedAt',
      type: 'number',
      width: 200,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      type: 'number',
      width: 200,
      editable: true,
    },
  ];
  



  return (
    <>
    <div>AdminAllUsers</div>
    <Box sx={{ height: 400, width: '100%' }}>
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