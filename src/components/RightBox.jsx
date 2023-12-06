import React, { useState } from 'react'
import Box from '@mui/material/Box';
import DataGrids from '../components/DataGrids'
import Typography from '@mui/material/Typography'
import DataGridsright from './DataGridsright'
import Piechart from './Piechart';


import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg height="15" viewBox="0 0 1792 1792" width="15" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent(
          '#fff',)}" d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'light' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg height="15" width="15" viewBox="0 0 544 512" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent(
        '#fff',)}" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'light' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


function RightBox() {
  const [checkVal,setChaeckval]=useState(false)
  console.log(checkVal)
  let changeData=(e,value)=>{
    setChaeckval(value)
  }
  return (
    <>
    <Box sx={{width: '100%',height:'420px',borderRadius: '0px'}}>
      <Box sx={{ width: '100%', background: 'white', borderRadius: '5px 5px 0px 0px' }}>
        <Typography variant='h2' style={{ padding: '10px' }} component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontSize: "20px" }} >Add Insights</Typography>
      </Box>
      <Box sx={{width: '100%',height:'100%', background:'white', borderRadius:'0px', }}>
        {
          checkVal ===true ? <DataGridsright /> :<Piechart />
        }  
      </Box>
      <Box sx={{ width: '100%', background: 'white', borderRadius:'0px 0px 5px 5px',display:'flex',justifyContent:'flex-end'}}>
        <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }}  onChange={changeData} />}
            label="MUI switch"
          />
        </FormGroup>
      </Box>
      </Box>
    </>
  )
}

export default RightBox