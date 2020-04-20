import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/
const ProjectSchema = new Schema({
  name: String,
  reporter: String,
  translator: String,
});

export default mongoose.model('Project', ProjectSchema);
