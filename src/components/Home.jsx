import * as React from 'react';
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'mail', headerName: 'Mail ID', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 30,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.mail || ''}`,
  },
];



const Home = () => {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    console.log("Shafiur ");
   loadUserData();
   
  }, []);



  const loadUserData= async()=>{
    const resultData= await axios.get('http://localhost:8081/author/getAll/');
    console.log(resultData);
  }
 
  
  const rows = [
  { id: 1, mail: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, mail: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, mail: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, mail: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, mail: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, mail: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, mail: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, mail: 'Roxie', firstName: 'Harvey', age: 65 },
];
  return (
    <>
    <Box sx={{alignItems:"center", marginLeft:"5%", paddingTop:3}}>
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>




    </Box>
    </>
  )
}

export default Home