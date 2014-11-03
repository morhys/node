// Require mongoose
var mongoose = require('mongoose');

// Configure conenction URL (only needs to happen once per app)
mongoose.connect('localhost:27017/demo-posts');

// Database schema for Post object
var postSchema = mongoose.Schema({
    title:String,
    content:String
});

// Model object constructor that will have ODM functionality like .save()...
var Post = mongoose.model('Post', postSchema);

// Expose out model as the module interface
module.exports = Post;