import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);    // For searching post
  // When strictQuery is set to true, Mongoose will only return documents that match the query exactly, rather than interpreting the query as a "loose" match.

  try {
    mongoose.connect(url);
    console.log('connected to mongo');
  } catch (err) {
    console.error('failed to connect with mongo');
    console.error(err);
  }

//   mongoose.connect(url)
//     .then(() => console.log('connected to mongo'))
//     .catch((err) => {
//       console.error('failed to connect with mongo');
//       console.error(err);
//     });
};

export default connectDB;