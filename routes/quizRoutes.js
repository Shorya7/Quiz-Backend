const express = require('express');
const { createQuiz, getAllQuizzes, getQuizById, submitQuiz, getUserResults } = require('../controllers/quizController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to create a new quiz (protected)
router.post('/', authMiddleware, createQuiz);

// Route to get all quizzes
router.get('/', getAllQuizzes);

// Route to get quiz by ID
router.get('/:id', getQuizById);

// Route to submit a quiz and get results (protected)
router.post('/:id/submit', authMiddleware, submitQuiz);

// Route to get user's quiz results (protected)
router.get('/results/me', authMiddleware, getUserResults);

module.exports = router;
