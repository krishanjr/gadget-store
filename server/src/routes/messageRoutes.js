const express = require('express');
const router = express.Router();
const {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessage
} = require('../controllers/messageController');

// Create new message
router.post('/', createMessage);

// Get all messages
router.get('/', getAllMessages);

// Get single message by ID
router.get('/:id', getMessageById);

// Delete message
router.delete('/:id', deleteMessage);

module.exports = router;
