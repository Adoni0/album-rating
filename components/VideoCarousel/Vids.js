import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import ImageAvatar from './ImageAvatar';
import CardHeader from '@material-ui/core/CardHeader';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Vids() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  // useEffect(() => {
  //   let response = axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=popular%20hiphop%20music%20videos&key=AIzaSyAfKMfiD3p0aRdmONPAOQBz-Y6d6aXY2uA');
  //   console.log(response)
  // },[])

  return (
    <Card className={classes.root}>
      <CardContent>

      <CardHeader
        avatar={
          <ImageAvatar />
        }
        
        title="Song Name of MV"
        subheader="Artist"
      />
        
        <Divider />

        <CardHeader
        avatar={
          <ImageAvatar />
        }
        
        title="Song Name of MV"
        subheader="Artist"
      />

      </CardContent>
      
    </Card>
  );
}