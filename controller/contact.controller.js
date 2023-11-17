const message = require ("../models/contact")

exports.message = async (req, res) => {
    const {name, email, message} = req.body;
  
    try {
  
      if (name==="" || email==="" || message==="") {
        return res.status(400).json({ message: 'all spaces are required to be filled.' });
      }  
      const newMessage = new Message({
        name,
        email,
        message
      });
  
      await newMessage.save();
      res.status(201).json({ message: 'Message Send successfully', message: newMessage });
    } catch (error) {
      res.status(500).json({ message: 'Could not send message', error: error.message });
    }
  };
  