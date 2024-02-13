import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { jobLoadAction } from '../../redux/actions/jobAction';
import { Link } from 'react-router-dom';
import moment from 'moment';

function AdminAllJobs() {

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobLoadAction())
    }, []);

    const { jobs,  loading } = useSelector(state => state.loadJobs);
    let data = [];
    data = (jobs !== undefined && jobs.length > 0) ? jobs : []
    

     console.log(jobs);
    const columns= [
        { field: '_id', headerName: 'ID', width: 200 },
        {
          field: 'nameOfOrganization',
          headerName: 'Organization',
          width: 100,
          editable: false,
        },
        {
          field: 'title',
          headerName: 'Title',
          width: 150,
          editable: false,
        },
        {
          field: 'salary',
          headerName: 'Salary',
          type: 'number',
          width: 100,
          editable: false,
          renderCell: (values => (
            "Rs." + values.row.salary
        ))
         
        },
        {
            field: 'ageLimit',
            headerName: 'Age',
            width: 60,
            editable: true,
           
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
            field: 'closingTime',
            headerName: 'Closing',
            width: 60,
            editable: true,
           
          },
        {
          field: "Actions",
          width: 200,
          renderCell: (values) => (
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
                  <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/user/${values.row._id}`}>Edit</Link></ Button>
                  < Button  variant="contained" color="error">Delete</ Button>
              </Box>
          )
        }
      ];


  return (
    <>
    <div>AdminAllJobs</div>

    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
       getRowId={(row) => row._id}
        rows={data}
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

export default AdminAllJobs