// import albumdb from '../../models'
import { connect } from '../../utils/database'

export default async function(req, res){ //  /api/create route
    try {
        const { db } = await connect();
    const {albumName, artistName } = req.body;
    const result = await db.collection('albumQueue').insertOne({
        album: {
            name: albumName,
            artist: artistName
        }
    });
    res.status(201);
    // console.log(result.ops[0])
    res.json({album: result.ops[0]})
    
    } catch(e){
        res.status(500);
        res.json({error: 'Unable to insert album'})
    }
    
}