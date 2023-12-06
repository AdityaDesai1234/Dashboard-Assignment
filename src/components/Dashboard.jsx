import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
// import { DataGrid } from '@mui/x-data-grid';
import DataGrids from '../components/DataGrids'
import LeftBox from './LeftBox';
import RightBox from './RightBox';
function Dashboard() {
  return (
    <Container maxWidth="sx" style={{ background: '#FBFAF5 ',height:"100vh"}}>
      <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3, lg: 2 }} rowSpacing={{lg:1,xs:2,md:2}}>
        <Grid item xs={12} lg={6} md={6} >
          <LeftBox/>
        </Grid>
        <Grid item xs={12} lg={6} md={6}>
          <RightBox />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard