const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  series: {type: String, required: true},
  issue: {type: Number, required: true},
  creators: [
    {
        author: { type: String, required: true},
        artist: { type: String, required: true}
    }
  ],
  publisher: {type: String, required: true}
})

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
