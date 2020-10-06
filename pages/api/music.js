import axios from 'axios'

export default async(req, res) => {
    // var key = process.env.YOUTUBE_API_KEY;
    var response = await axios.get(`https://itunes.apple.com/lookup?id=429717386`)
    // const json = await response.json();
    res.json(response.data)
    // console.log(response.data)
}