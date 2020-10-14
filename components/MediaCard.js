import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-material-ui-carousel'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: 'auto'
  },
  media: {
    height: 250,
  },
}));

export function Pony(props) {
  const { albums } = props;
  // console.log(albums)

  var sort = albums.filter(function(album) {
      
      return album.collectionName
})
console.log(sort)

  return (
    <Carousel interval={5000} navButtonsAlwaysVisible={true}>
      {
        sort.map((item, i) => <MediaCard key={i} item={item}/>)
      }
    </Carousel>
  )
}


export function MediaCard(props) {
  const classes = useStyles();
  const { item } = props;

  return (
    <Card style={{backgroundColor: 'white'}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {item.artworkUrl100}
          title="music"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.collectionName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.artistName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Queue
        </Button>
        <Button size="small" color="primary">
          <a target ="_blank" href={item.collectionViewUrl}>Preview</a>
        </Button>
      </CardActions>
    </Card>
  );
}