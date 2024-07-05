const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const checklistSchema = new mongoose.Schema({
  type: { type: String, enum: ['patch', 'release'], required: true },
  version: { type: String, required: true },
  tasks: [taskSchema],
});

module.exports = mongoose.model('Checklist', checklistSchema);
