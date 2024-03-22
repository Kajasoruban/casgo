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
    
 

    const columns= [
        {
          field: 'paymentId',
          headerName: 'CustomerId',
          width: 200,
          editable: false,
          valueFormatter: ({ value }) => value.customerId 
        },
        {
          field: 'Package',
          headerName: 'Package',
          width: 100,
          editable: false,
          renderCell: (params) => (
            params.row.paymentId.duration=="30"?"Premium":"Starter"
        )
        },
        {
          field: 'Duration',
          headerName: 'Duration',
          width: 80,
          editable: false,
          renderCell: (params) => (
            params.row.paymentId.duration
        )
        },
        {
          field: 'Started',
          headerName: 'Started',
          type: 'number',
          width: 200,
          editable: false,
          renderCell: (params) => (
            params.row.paymentId.startingTime
        )
        },
        {
          field: 'Expiry',
          headerName: 'Expiry',
          type: 'number',
          width: 200,
          editable: false,
          renderCell: (params) => (
            params.row.paymentId.EndingTime
        )
        },
        
        {
          field: "Actions",
          width: 100,
          renderCell: (params) => (
            params.row.paymentId.expired?<button className='btn text-danger '>Expired</button>:<button className='btn text-success'>Active</button>
        )
        }
      ];


  return (
    <>
    <h4>Payment History</h4>
    <div className='mx-5'>
    <Box sx={{ height: 550, width: '90%',textAlign:"center" }}>
    
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
    </div>
    </> 
  )
}

export default PaymentHistory