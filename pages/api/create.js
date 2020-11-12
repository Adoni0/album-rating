// import albumdb from '../../models'
import { connect } from '../../utils/database'

export default async function(req, res){ //  /api/create route
    const { db } = await connect();
    const {albumName, artistName } = req.body;
    const result = await db.collection('albumQueue').insertOne({
        album: {
            name: albumName,
            artist: artistName
        }
    });
    console.log(result.ops[0])
    res.json({})
    // albumdb.create({
    
}