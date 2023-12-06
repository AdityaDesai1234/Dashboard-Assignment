import React from 'react'
import Box from '@mui/material/Box';
import DataGrids from '../components/DataGrids'
import Typography from '@mui/material/Typography'
function LeftBox() {
    return (
        <>
            <Box sx={{ width: '100%', height:'474px' }}>
                <Box sx={{ width: '100%', background: 'white', borderRadius: '5px 5px 0px 0px' }}>
                    <Typography variant='h2' style={{ padding: '10px' }} component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontSize: "20px" }} >Add Insights</Typography>
                </Box>
                <Box sx={{ width: '100%',height:"100%", borderRadius:'0px 0px 5px 5px' }}>
                    <DataGrids />
                </Box>
            </Box>
        </>
    )
}

export default LeftBox