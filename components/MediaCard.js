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
    maxWidth: 700,
    margin: 'auto'
  },
  media: {
    height: 140,
  },
}));

export function Pony(props) {
  var items = [
    {
      title: 'Football Stuff',
      description: 'blah blah balh jbjeneneknkenjejbjjjeh ehjejejej dhejjebhjebjebhjje enjehufbueneenineu nejfjebe ejnene nejne'
    },
    {
      title: 'NFL and Covid',
      description: 'titans and steelers will postpone their game on sunday opting to move it to another day in the not too distant future.'
    }
  ]

  return (
    <Carousel interval={5000} navButtonsAlwaysVisible={true}>
      {
        items.map((item, i) => <MediaCard key={i} item={item}/>)
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
          image="https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="football"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Queue
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}