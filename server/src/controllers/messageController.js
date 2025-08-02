const { Message } = require('../models/Message');

// Create a new message
const createMessage = async (req, res) => {
  try {
    const { userId, fullName, emailAddress, subject, message } = req.body;
    const newMessage = await Message.create({ userId, fullName, emailAddress, subject, message });
    return res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error creating message:", error);
    return res.status(500).json({ error: 'Failed to create message' });
  }
};

// Get all messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    return res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};

// Get a message by ID
const getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findByPk(id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    return res.json(message);
  } catch (error) {
    console.error("Error fetching message:", error);
    return res.status(500).json({ error: 'Failed to retrieve message' });
  }
};

// Delete a message by ID
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findByPk(id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    await message.destroy();
    return res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error("Error deleting message:", error);
    return res.status(500).json({ error: 'Failed to delete message' });
  }
};

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  deleteMessage,
};
