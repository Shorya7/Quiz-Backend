const Quiz = require('../models/Quiz');
const Result = require('../models/Result');

// Create a new quiz
exports.createQuiz = async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const quiz = new Quiz({
      title,
      description,
      questions,
      createdBy: req.user
    });

    await quiz.save();
    res.status(201).json({ message: 'Quiz created successfully', quiz });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('createdBy', 'name email');
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get quiz details by ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).populate('createdBy', 'name email');
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Submit quiz and get result
exports.submitQuiz = async (req, res) => {
  const { answers } = req.body; 
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctOption) {
        score += 4;
      }
    });
    // console.log('req.user:', req.user);


    const result = new Result({
        user: req.user,  
        quiz: quiz._id,
        answers,
        score,
        totalQuestions: quiz.questions.length
      });
  
      await result.save();
  
      res.json({ message: 'Quiz submitted successfully', score, totalQuestions: quiz.questions.length });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
};

// Get all results of the logged-in user
exports.getUserResults = async (req, res) => {
    try {
      const results = await Result.find({ user: req.user }).populate('quiz', 'title description');
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  