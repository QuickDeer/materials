import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const WordSchema = new Schema({
  key: String,
  value: String,
  top_word_id: String,
});

export default mongoose.model('Word', WordSchema);
