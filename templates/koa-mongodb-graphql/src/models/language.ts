import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const LanguageSchema = new Schema({
  name: String,
  reporter: String,
  translator: String,
});

export default mongoose.model('Language', LanguageSchema);
