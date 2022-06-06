import User from "../model/userSchema.js";

export const userSignUp = async (request, response) => {
  try {
    const { firstname, email, phone, lastname, password, username } =
      request.body;
    const exist = await User.findOne({ username: request.body.username });

    if (
      exist ||
      !username ||
      !lastname ||
      !email ||
      !firstname ||
      !phone ||
      !password
    ) {
      return response
        .status(422)
        .json({ message: "Please fill all column properly.. " });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const userLogIn = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json("Invalid login");
    }
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
};


export const postProfile=async(req,res)=>{

}