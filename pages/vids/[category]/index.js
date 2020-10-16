import React from 'react'
import axios from 'axios'

const vids = ({ response }) => {
    console.log(response);
    return (
        <div>
            
        </div>
    )
}

export default vids;

// export async function getServerSideProps(context) {
//     var { params } = context;
//     if(params.category === "hiphop"){
//         var key = process.env.YOUTUBE_API_KEY;
//         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=popular%20hiphop%20music%20videos&key=${key}`)

//         return {
//             props: { response }, // will be passed to the page component as props
//           }
//     }
    
//   }

export async function getStaticProps({ params }) {

    if(params.category === 'hiphop'){
        var key = process.env.YOUTUBE_API_KEY;
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=popular%20hiphop%20music%20videos&key=${key}`)
        // const videos = await response.data;

        return { props: { response } }
      }
}


export async function getStaticPaths() {

    return { paths: [
      { params: { category: 'hiphop' } }
    ], fallback: false }
  }

