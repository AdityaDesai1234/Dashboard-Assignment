import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Cardright(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const displayValue=(e)=>{
        props.takedata(e.target.value)
    }

    return (
        <Card sx={{ maxWidth:345,minWidth:345}}>
            {/* <CardHeader>
             <Checkbox  defaultChecked />
            </CardHeader> */}
            <Checkbox  value="Aditya2" onClick={(e)=>displayValue(e)} />
            <CardMedia
                component="img"
                height="400"
                image="https://reactnativeexample.com/content/images/2019/09/skeleton-content.jpg"
            />
            <CardContent style={{textAlign:'center'}}>
                <Typography variant="body2" color="text.secondary">
                    Create
                </Typography>
                <Typography variant='h2' style={{ padding: '10px',justifyContent:'center' }} component='h2' sx={{ flexGrow: 1, display: { xs: '', md: 'flex' }, fontSize: "20px" }} >Media Ad</Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions> */}
        </Card>
    )
}

export default Cardright