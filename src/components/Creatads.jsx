import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Cardleft from './Cardleft';
import Cardright from './Cardright';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Outlet, Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


function Creatads() {
  const navigate=useNavigate()

  const [LcheckData,setLcheckData]=useState()
  const [RcheckData,setRcheckData]=useState()

  const LeftCardData=(data)=>{
    setLcheckData(data)
  }
  const RightCardData=(RData)=>{
    setRcheckData(RData)
  }
  return (
    <>
      <Container maxWidth="sx" style={{ background: '#fbfaf5', height: "100vh" }}>
        <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3, lg: 2 }} rowSpacing={{ lg: 1, xs: 2, md: 2 }}>
          <Grid item xs={12} sm={12} lg={6} md={6} sx={{ display: "flex", justifyContent: "flex-end", flexWrap:'wrap' }}>
            <Cardleft takedata={LeftCardData} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6}>
            <Cardright takedata={RightCardData} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12} textAlign="end">
            <Button variant="contained" onClick={()=>LcheckData==="Aditya" ? navigate('/createtextadd'):RcheckData==="Aditya2" ? navigate('/createmediaadd'):""} style={{ padding: '10px 50px 10px 50px' }}>Next</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Creatads