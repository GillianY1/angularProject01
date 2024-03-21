const mongoose = require('mongoose');

// notice that in ts, it's string ; in js it's String
// just a bluerprint of the object
const postSchema = mongoose.Schema({
  id: {type: String, required: false},
  title: {type: String, required: true, default: 'Default title'},
  content: {type: String, required: true, default: 'Default content'}
});

// turn the blueprint into a model
module.exports = mongoose.model('Post', postSchema);
