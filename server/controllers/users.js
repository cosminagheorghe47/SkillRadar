import User from "../models/User.js";


export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user with the provided ID
    const user = await User.findById(id);

    // Respond with the user data
    res.status(200).json(user);
  } catch (err) {
    // Handle any errors that occur during user retrieval
    res.status(404).json({ message: err.message });
  }
};


export const editUser = async (req, res) => {
  try {
    const { firstName, lastName, accessToken } = req.body;
    const { id } = req.params;

    // Find the user with the provided ID and update their profile data
    const updatedProfile = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, accessToken},
      { new: true }
    );

    // Update the user's profile data in all their associated posts as well
    try {
      await Post.updateMany(
        { userId: id },
        { $set: { firstName, lastName, userPicturePath: picturePath } }
      );
    } catch (err) {
      console.error(err);
      // Handle the error appropriately
    }

    // Respond with the updated profile data
    res.status(200).json(updatedProfile);
  } catch (err) {
    // Handle any errors that occur during user profile editing
    res.status(409).json({ message: err.message });
  }
};

export const initiateClickup= async (req, res) => {
    const code = req.query.code; // Extract the 'code' parameter from the incoming request

    const query = new URLSearchParams({
        client_id: 'R09HSDA1W9P1IPDX8FBH2PGR45USO7J9',
        client_secret: 'YYKJCVDZ09WFA3Z9GZ648O48T6DKI04GPFOYXV97CPT3ATAVC06I6J2931C0SUAV',
        code: code,
    }).toString();

    const resp = await fetch(
        `https://api.clickup.com/api/v2/oauth/token?${query}`,
        { method: 'POST' }
    );

    const { id } = req.params;
    const data = await resp.json(); // Assuming the response is in JSON format
    const user = await User.findById('648ad684f8d74df007111f7d');
    const {accessToken } = data.access_Token;
    const updatedProfile = await User.findByIdAndUpdate(
        id,
        {accessToken},
        { new: true }
      );
    console.log(data);

    // Handle the response accordingly, e.g., store the access token, etc.
    res.send('Authorization successful!');
};