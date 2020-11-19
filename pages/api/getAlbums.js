import { connect } from '../../utils/database'

export default async function(req, res){ //  /api/getAlbums route
    try {
        const { db } = await connect();
   
        const result = await db.collection('albumQueue').find().toArray();
        // console.log(result.ops[0])
        res.json({result})
    } catch(e) {
        res.status(500);
        res.json({error: 'unable to retrieve albums...sorry!'})
    }
   
    res.json({result: []})
}