import mongoose from 'mongoose';

export const initDB = () => {

  mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

  mongoose.connection.on('error', (err) => {
    if (err) {
      throw err;
    }
  });

};
