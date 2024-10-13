const mongoose = require('mongoose');

// Define Question Schema
const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctOption: {
    type: Number, // Index of the correct option (0-3)
    required: true
  }
});

// Define Quiz Schema
const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  questions: [questionSchema],  // Array of questions
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to User who created the quiz
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
