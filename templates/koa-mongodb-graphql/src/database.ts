import mongoose from 'mongoose';

export const initDB = () => {

  const connectionInstance = mongoose.createConnection(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  connectionInstance.on('error', (err) => {
    if (err) {
      throw err;
    }
  });

  connectionInstance.once('open', () => {
    console.log('connected to database');
  });

};
