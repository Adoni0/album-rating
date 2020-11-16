import { connect } from '../../utils/database'

export default async function(req, res){ //  /api/delete route
    const { db } = await connect();
    // const {albumName, artistName } = req.body;
    const { id } = req.body;
    const result = await db.collection('albumQueue').deleteOne({
        id: id
    });
    console.log(result.ops[0])
    res.json({})
    
}