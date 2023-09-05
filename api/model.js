const mongoose = require('mongoose');

const sopSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  educationLevel: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  study: {
    type: String,
    required: true,
  },
  workExperience: {
    type: String,
    required: true,
  },
  admittedTo: {
    type: String,
    required: true,
  },
  programOfStudy: {
    type: String,
    required: true,
  },
  applyingFrom: {
    type: String,
    required: true,
  },
  futureGoals: {
    type: String,
    required: true,
  },
  listeningScore: {
    type: String,
    required: true,
  },
  readingScore: {
    type: String,
    required: true,
  },
  speakingScore: {
    type: String,
    required: true,
  },
  writingScore: {
    type: String,
    required: true,
  },
  paidTuitionFee: {
    type: Boolean,
    required: true,
  },
  TuitionFee: {
    type: String,
    required: true,
  },
  gic: {
    type: Boolean,
    required: true,
  },
  paidGIC: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('SOP', sopSchema);
