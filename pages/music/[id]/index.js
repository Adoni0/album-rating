import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Pony } from '../../../components/MediaCard'
import TemporaryDrawer from '../../../components/TemporaryDrawer'
import { ArticleDivider, VideoDivider } from '../../../components/Dividers'
import SearchBar from '../../../components/SearchBar';
import Grid from '@material-ui/core/Grid'

const music = ({ featured }) => {

  const [albumInfo, setAlbumInfo] = useState([]);
  // const [artistName, setArtistName] = useState('');
  // const [albumName, setAlbumName] = useState('');
  // const [albumCover, setAlbumCover] = useState('');

  // console.log(featured.results)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
      const { results } = featured;
      
      setAlbumInfo(results)
      console.log(albumInfo);
    },[])
  
    // return <p>Title: {id}</p>
    return (
      <>
          <CssBaseline />
          <Container maxWidth="lg" style={{
              backgroundColor: '#000000',
              backgroundImage: 'linear-gradient(315deg, #000000 0%, #414141 74%)', height: '103vh'
          }}>
              <Typography component="div">

                  <Grid container spacing={3}>
                      <Grid item xs={12} sm={7} style={{paddingTop: '30px'}}>
                          <TemporaryDrawer />
                      </Grid>
                      <Grid item xs={12} sm={5} style={{paddingTop: '30px'}}>
                          <SearchBar />
                      </Grid>
                  </Grid>

                  <br />
                  <ArticleDivider />
                  <br />
                  <Pony albums={albumInfo}/>

              </Typography>
          </Container>
      </>

  )
  }
  
  export default music

  export async function getStaticProps({ params }) {
    if(params.id === 'rock'){
      var response = await axios.get(`https://itunes.apple.com/lookup?id=158038,486597,994656,5040714&entity=album&limit=5`);
      var featured  = await response.data;
      
      return { props: { featured, },}
    }
    if(params.id === 'hiphop'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=894820464,966309175&entity=album&limit=5`);
      var featured = await response.data;

      return {props: { featured }}
    }
    if(params.id === 'country'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=123055194,535066,163328523&entity=album&limit=5`);
      var featured = await response.data;

      return {props: { featured }}
    }
    if(params.id === 'dance'){
      let response = await axios.get(`https://itunes.apple.com/lookup?id=666268457,634763116,16013761,1468290871&entity=album&limit=5`);
      var featured = await response.data;

      return {props: { featured }}
    }
    
  }

  export async function getStaticPaths() {

    return { paths: [
      { params: { id: 'rock' } },
      { params: { id: 'hiphop' } }
    ], fallback: false }
  }

  // rock search
// export default async(req, res) => {
//     var response = await axios.get(`https://itunes.apple.com/lookup?id=158038,486597,994656,5040714&entity=album&limit=5`)
//     // const json = await response.json();
//     res.json(response.data)
//     // console.log(response)
// }

// country search
// export default async(req, res) => {
//   var response = await axios.get(`https://itunes.apple.com/lookup?id=123055194,535066,163328523&entity=album&limit=5`)
//   // const json = await response.json();
//   res.json(response.data)
//   // console.log(response)
// }

//dance search
// export default async(req, res) => {
//   var response = await axios.get(`https://itunes.apple.com/lookup?id=666268457,634763116,16013761,1468290871&entity=album&limit=5`)
//   // const json = await response.json();
//   res.json(response.data)
//   // console.log(response)
// }

// hp hop search
// export default async(req, res) => {
//   var response = await axios.get(`https://itunes.apple.com/lookup?id=894820464,966309175&entity=album&limit=5`)
//   // const json = await response.json();
//   res.json(response.data)
//   // console.log(response)
// }