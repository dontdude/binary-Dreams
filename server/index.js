import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';                  //handle cross-origin resource sharing (CORS) requests

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());                           // CORS is a security feature that can configure your server to accept cross-origin requests from specific origins and send the appropriate 'Access-Control-Allow-Origin' header in the response. 

app.use(express.json({ limit: '50mb' }));  // The 'express.json' middleware is used to parse incoming requests to server with JSON payloads and it sets a limit of --50 MB-- on the size of the request made in the form of JSON payloads.

// mounting these postRoutes Router object as middleware module
app.use('/api/v1/post', postRoutes);       // Server endpoint to handle Get/Post requests from clients
app.use('/api/v1/dalle', dalleRoutes);     // Server endpoint to make post requests to the Dall-E API

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Binary-Dreams Server! Our system generates unique and creative images based on your input. Please make a POST request with the required parameters to generate an image.',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();