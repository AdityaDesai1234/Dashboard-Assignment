import React, { useState, MouseEvent } from 'react';

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Box, Button, Menu, MenuList, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link } from "react-router-dom";


function Navbar() {
    const [anchorNav, setAnchorNav] = useState(null);
    const openMenu = (event) => {
        setAnchorNav(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorNav(null);
    }
    return (
        <>
            <AppBar position="static" color='inherit'>
                <Toolbar>
                    {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <LocalLibraryIcon />
                    </IconButton> */}
                    <Typography variant='h5' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },fontWeight:'bold' }} >APP LOGO</Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button color='inherit'><Link to='/' style={{textDecoration:'none',color:'black'}}>Dashboard</Link></Button>
                        <Button color='inherit'><Link to='/creatads' style={{textDecoration:'none',color:'black'}}>Creat Ads</Link></Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <MenuList>
                                <MenuItem><Link to='/'style={{textDecoration:'none',color:'black'}}>Dashboard</Link></MenuItem>
                                <MenuItem><Link to='/creatads'style={{textDecoration:'none',color:'black'}}>Creat Ads</Link></MenuItem>
                            </MenuList>
                        </Menu>
                        {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <LocalLibraryIcon />
                        </IconButton> */}
                        <Typography variant='h5' component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },fontWeight:'bold' }} >APP LOGO</Typography>
                    </Box>

                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    )
}

export default Navbar