import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const LogSchema = new Schema({
  operate_time: Date,
  operator: String,
  project_id: String,
  language_id: String,
  origin_content: String,
  new_content: String,
});

export default mongoose.model('Log', LogSchema);
