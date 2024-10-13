const express = require('express');
const { createQuiz, getAllQuizzes, getQuizById, submitQuiz } = require('../controllers/quizController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to create a new quiz (protected)
router.post('/', authMiddleware, createQuiz);

// Route to get all quizzes
router.get('/', getAllQuizzes);

// Route to get quiz by ID
router.get('/:id', getQuizById);

// Route to submit a quiz and get results
router.post('/:id/submit', authMiddleware, submitQuiz);

module.exports = router;
