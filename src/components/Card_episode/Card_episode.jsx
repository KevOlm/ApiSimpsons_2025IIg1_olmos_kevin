import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Fade } from '@mui/material';

const Card_episode = ({episode}) => {
  return (
    <Fade in={true} timeout={1000}>
    <Card sx={{ width: 410, height: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={episode ? `https://cdn.thesimpsonsapi.com/500${episode.image_path}` : noimage}
          alt={ episode ? episode.title : 'Unknown' }
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ backgroundColor: '#F5A64D', height: 200, textAlign: 'center'}}> 
          <Typography gutterBottom variant="h6" component="div">
            {episode ? episode.name : 'Unknown'}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Temporada: {episode ? episode.season : 'Unknown'}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Episodio: {episode ? episode.episode_number : 'Unknown'}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic',overflow: 'hidden' , textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            Fecha de emision: {episode ? episode.airdate : 'No description available.'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Fade>
  );
}

export default Card_episode;