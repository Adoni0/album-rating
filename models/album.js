var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var AlbumSchema = new Schema({ //data stored in users queue

    albumName: {
        type: String,
        required: true
    },

    albumArtistName: {
        type: String,
        required: true
    },

    albumCoverArt: {
        type: String,
    },

    albumTracks: [
        {
            trackName: {
                type: String
            }
        }
    ],

    albumRating: {
        type: String  //out of 5 stars
    },

    desiredListen: {
        type: Boolean,
    },

    musicVideoName: {
        type: String
    },

    musicVideoUrl: {
        type: String
    }

})

var AlbumQueue = mongoose.model('AlbumQueue', AlbumSchema)

module.exports = AlbumQueue;