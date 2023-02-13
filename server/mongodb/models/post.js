import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, required: true },        // name of user
  prompt: { type: String, required: true },      // prompt used for generating this image
  photo: { type: String, required: true },       // photo url to photo stored in cloudinary
});

const PostSchema = mongoose.model('Post', Post);
// The mongoose.model method takes two arguments: the name of the model (in this case, 'Post') and the schema (in this case, Post).
// And returns a reference to mongoose collections

export default PostSchema;