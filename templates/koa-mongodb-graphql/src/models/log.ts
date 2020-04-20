import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const LogSchema = new Schema({
  operator: String,
  project_id: String,
  language_id: String,
  origin_content: String,
  new_content: String,
  operate_time: Date,
});

export default mongoose.model('Log', LogSchema);
