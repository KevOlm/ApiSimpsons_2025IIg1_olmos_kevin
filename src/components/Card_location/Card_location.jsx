import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Slide from '@mui/material/Slide';

const Card_location = ({location}) => {
  return (
    <Slide in={true} direction='down' timeout={1000}>
    <Card sx={{ width: 600 , height: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="285"
          image={location ? `https://cdn.thesimpsonsapi.com/500${location.image_path}` : noimage}
          alt={location ? location.name : 'Unknown'}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ backgroundColor: '#ffffffff', height: 120 , textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> 
          <Typography gutterBottom variant="h5" component="div">
            {location ? location.name : 'Unknown'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" sx={{ fontStyle: 'italic' , color: '#a15600ff' }}>
            Ubicación: {location ? location.town : 'Unknown'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden' , textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            Tipo: {location ? location.use : 'No description available.'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Slide>
  );
}

export default Card_location;