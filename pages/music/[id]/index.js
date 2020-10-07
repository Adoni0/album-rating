import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const music = ({ featured }) => {
  console.log(featured)
    const router = useRouter()
    const { id } = router.query
  
    return <p>Title: {id}</p>
  }
  
  export default music

  export async function getStaticProps({ params }) {
    if(params.id === 'rock'){
      var response = await axios.get(`https://itunes.apple.com/lookup?id=158038,486597,994656,5040714&entity=album&limit=5`);
      var featured  = await response.data;
      
      return {
        props: { featured, },
      }

      return null;
    }
    
  }

  export async function getStaticPaths() {
    // var response = await axios.get(`https://itunes.apple.com/lookup?id=158038,486597,994656,5040714&entity=album&limit=5`);
    // var featured  = await response.data;

    // const paths = await featured.map(album => ({
    //   params: {id: album.id}
    // }))

    return { paths: [
      { params: { id: 'rock' } },
      { params: { id: 'hiphop' } }
    ], fallback: false }
  }