import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { Grow } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Card_character = ({character}) => {
  return (
    <Grow in={true} timeout={1000}>
    <Card sx={{ width: 300, height: 360 }}>
        <CardMedia
          component="img"
          height="200"
          image={character ? `https://cdn.thesimpsonsapi.com/500${character.portrait_path}` : noimage}
          alt={character ? character.name : 'Unknown'}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent sx={{ backgroundColor: '#fdff9aff', height: 115 , textAlign: 'center' , textAlign: 'center'}}> 
          <Typography gutterBottom variant="h6" component="div">
            {character ? character.name : 'Unknown'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" sx={{ fontStyle: 'italic' }}>
            Ocupación: {character ? character.occupation : 'Unknown'}
          </Typography>
        </CardContent>
        <CardActions sx= {{ backgroundColor: '#fdff9aff', justifyContent: 'center' }}>
          <Link to="/characters_dsc" state={{character}}><Button size="small" variant="contained" color="success">Ver Detalles</Button></Link>
        </CardActions>
    </Card>
    </Grow>
  );
}

export default Card_character;