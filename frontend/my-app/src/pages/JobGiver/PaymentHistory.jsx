import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'bootstrap';
import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PaymentHistory() {

    const {paymentHistory} =useSelector(state => state.paymentHistory);
    let data = [];
    data = (paymentHistory !== undefined && paymentHistory.length > 0) ? paymentHistory : []

    console.log(data);

    const columns= [
        { field: '_id', headerName: 'ID', width: 220 },
        {
          field: 'paymentId',
          headerName: 'User Name',
          width: 150,
          editable: false,
        //   valueFormatter: ({ value }) => value.paymentId.customerId 
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
            moment(params.row.paymentId.EndingTime).format('YYYY-MM-DD HH:MM:SS')
        )
        },
        {
          field: 'createdAt',
          headerName: 'CreatedAt',
          type: 'number',
          width: 150,
          editable: false,
          renderCell: (params) => (
            moment(params.row.paymentId.startingTime).format('YYYY-MM-DD HH:MM:SS')
        )
        },
        {
          field: "Actions",
          width: 200,
        //   renderCell: (values) => (
        //       <Box sx={{ display: "flex", justifyContent: "space-between", width: "170px" }}>
        //           <Button variant="contained"><Link style={{ color: "white", textDecoration: "none" }} to={`/admin/edit/user/${values.row._id}`}>Edit</Link></ Button>
        //           {/* < Button onClick={(e) => suspendUserById(e, values.row._id)} variant="contained" color="error">suspend</ Button> */}
        //       </Box>
        //   )
        }
      ];


  return (
    <>
    <div>PaymentHistory</div>

    <Box sx={{ height: 650, width: '100%' }}>
    <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>

                </Box>
      <DataGrid
       getRowId={(row) => row.paymentId._id}
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

export default PaymentHistory