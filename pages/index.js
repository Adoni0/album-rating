import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'



const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.pexels.com/photos/4200747/pexels-photo-4200747.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}))

const sections = [
  { title: 'Rock', url: '/music/Rock' },
  { title: 'Hip/Hop', url: '/music/Hiphop' },
  { title: 'Alternative', url: '/music/Alternative' },
  { title: 'Country', url: '/music/Country' },
  { title: 'Dance', url: '/music/Dance' },
  { title: 'R&B', url: '/music/R&B' },
  { title: 'Pop', url: '/music/Pop' },
  { title: 'Highest Rated', url: '#' }
];

const featuredPosts = [
  {
    title: 'Thriller',
    date: 'Michael Jackson',
    description:
      'Thriller’s late-1982 release marked the beginning of Michael Jackson’s entry into another level of fame; it also went onto becoming the highest selling album ever',
      image: "http://imgc.artprintimages.com/images/art-print/michael-jackson-thriller-album_i-G-69-6903-MMBX100Z.jpg"
  },
  {
    title: 'Dark Side of the Moon',
    date: 'Pink Floyd',
    description:
      'As much an aural collage as a straightforward art-rock treatise, the album uses its 43 minutes to link speaking voices, sound effects-heavy musique concrète...',
      image: 'https://img.discogs.com/JdMPRRfk9XngB5O9VdX62xpo3bw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3775445-1343934326-6026.jpeg.jpg'
  }
]

const Blog = () => {
  const classes = useStyles()

 
  return (
    <>
      <CssBaseline />
      <Container style={{backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)'}} maxWidth="lg">
      <Header title="AlbumRate" sections={sections} />
        
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    The Social App for Music Lovers
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    AlbumRate lets you keep track of and rate every album you've listened to, add albums
                    to a your queue for later listening, or share your thoughts 
                    on any album in the iTunes library 
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    Lets get started…
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          View Album...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={post.image}
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </Container>
    </>
  )
}

export default Blog