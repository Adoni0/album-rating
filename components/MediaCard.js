import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Carousel from "react-multi-carousel";
import AlbumRatings from './AlbumRatings';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 370,
    margin: 'auto'
  },
  media: {
    height: 200,
  },
}));

export function Pony(props) {
  const { albums } = props;
  // console.log(albums)

  var sort = albums.filter(function (album) {

    return album.collectionName
  })
  console.log(sort)

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoplay={true}
      autoPlaySpeed={2000}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {
        sort.map((item, i) => 
        <div>
        <MediaCard key={i} item={item} />
        </div>
        )
      }
    </Carousel>
  )
}


export function MediaCard(props) {
  const classes = useStyles();
  const { item } = props;

  return (
    <Card style={{ backgroundColor: 'white' }} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.artworkUrl100}
          title="music"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.collectionName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.artistName}
          </Typography>
          <AlbumRatings />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Queue
        </Button>
        <Button size="small" color="primary">
          <a target="_blank" href={item.collectionViewUrl}>Preview</a>
        </Button>
      </CardActions>
    </Card>
  );
}