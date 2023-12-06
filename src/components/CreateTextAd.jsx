import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography'
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function InputAdornments() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate=useNavigate()
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} style={{ marginTop: '20px' }}>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: '' }, fontWeight: 'bold' }} >Create Text & Media</Typography>
            <div style={{ background: 'lightyelow', width: '100%' }}>
                <FormControl sx={{ m: 1, width: '100ch' }} variant="outlined">
                    <FormLabel component="legend" sx={{ m: 1 }}>
                        Heading 01
                    </FormLabel>
                    <TextField
                        sx={{ m: 1, width: '100ch' }}
                        placeholder='Add a heading that would make users interested'
                    />
                    <FormLabel component="legend" sx={{ m: 1 }}>
                        Heading 02
                    </FormLabel>
                    <TextField
                        sx={{ m: 1, width: '100ch' }}
                        placeholder='Add a heading that would make users interested'
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '77ch' }} variant="outlined">
                    <FormLabel component="legend" sx={{ m: 1 }}>
                        Description 01
                    </FormLabel>
                    <TextField
                        sx={{ m: 1, width: '77ch' }}
                        multiline
                        rows={6}
                        placeholder='Add primary text to help users understand more about your products,services or offers'
                    />
                </FormControl>
            </div>
            <div style={{ padding: '10px' }}>
                <FormLabel component="legend" sx={{ m: 1 }}>
                    Business Name
                </FormLabel>
                <TextField
                    sx={{ m: 1, width: '100ch' }}
                    placeholder='Add your business name'
                />
                <FormControl sx={{ ml: 1, width: '77ch' }} variant="filled">
                    <FormLabel component="legend" sx={{ mt: -3 }}>
                        Button Label
                    </FormLabel>
                    <TextField
                        sx={{ m: 1, width: '77ch' }}
                        placeholder='Select a label that best suits your add'
                    />
                </FormControl>
                <FormLabel component="legend" sx={{ m: 1 }}>
                    Website URL
                </FormLabel>
                <TextField
                    sx={{ m: 1, width: '100ch' }}
                    placeholder='Add the URL of the landing page you want to redirect users to'
                />
                <Stack spacing={2} direction="row" justifyContent='flex-end'>
                    <Button onClick={()=>navigate('/creatads')} variant="outlined" color="inherit" style={{ padding: '10px 50px 10px 50px' }} >Back</Button>
                    <Button variant="contained" style={{ padding: '10px 50px 10px 50px' }} >Submit</Button>
                </Stack>
            </div>

        </Box>
    );
}