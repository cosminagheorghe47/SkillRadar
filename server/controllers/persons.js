import Person from "../models/Person.js";

export const getPersons= async (req, res) => {
    try {
      // Retrieve all posts from the database
      const person = await Person.find();
  
      // Respond with the list of posts
      res.status(200).json(post);
    } catch (err) {
      // Handle any errors that occur during retrieval of feed posts
      res.status(404).json({ message: err.message });
    }
  };