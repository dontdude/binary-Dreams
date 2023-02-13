import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

// the dalleRoutes middleware is mounted at the /api/v1/dalle endpoint, so it will be executed for all requests made to this endpoint.

dotenv.config();

const router = express.Router();    // returns middleware function that can be used to handle HTTP requests. 
// middleware refers to module or function that can execute HTTP request and response.

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E! This route will make the post request to DALL-E.' });
});

// Image generation
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '256x256',                              // '1024x1024' with more pricing
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;   // JSON response for image from Dall-e

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;