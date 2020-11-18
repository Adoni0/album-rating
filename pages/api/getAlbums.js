import { connect } from '../../utils/database'

export default async function(req, res){ //  /api/getAlbums route
    const { db } = await connect();
   
    const result = await db.collection('albumQueue').find();
    console.log(result.ops[0])
    res.json({})
    
}