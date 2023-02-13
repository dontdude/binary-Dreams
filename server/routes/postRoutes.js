import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';       //Cloud-based image storage

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// handles get request which retrieves all the posts from the database using the Post.find({})
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});              // all of our saved post
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

//The function first extracts the name, prompt, and photo from the request body (req.body). It then uses the cloudinary library to upload the photo and retrieve the photo's URL.
//Finally, it creates a new post by calling the Post.create method, passing in the extracted name, prompt, and photo URL as arguments for the purpose of sending it.
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);    // uploads the photo to cloudinary, which returns a url to access this photo

    const newPost = await Post.create({   // storing in database {name, prompt, and photo url}
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
  }
});

export default router;