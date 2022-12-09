const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function signup(req, res) {
  try {
    //Get the email and password off req body

    const { name, email, password } = req.body;

    // Hash password

    const hashPassword = await bcrypt.hash(password, 8);

    // Create a user with the data

    await User.create({
      name,
      email,
      password: hashPassword,
    });

    // Respond

    res.status(200).json({ message: "user added with success" });
  } catch (err) {
    console.log(err);

    res.sendStatus(400);
  }
}

async function login(req, res) {
  // Get the email and password off rq body

  const { email, password } = req.body;
  try {
    // Find the user with requested email

    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(401)
        .json({ message: "this user dosent exist in our database" });

    //compare sent in password with found user password hash

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ message: "wrong password" });

    // Create a jwt token
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // one month
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET); //sub : subject and exp : Expiration Time in jwt

    // Set the cookie

    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
    });

    // Send it

    res.status(200).json({ message: "welcome to your home page", token, user });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function logout(req, res) {
  res.clearCookie("Authorization");
  res.sendStatus(200);
}

//checking the auth
function checkAuth(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}

module.exports = {
  signup,
  login,
  logout,
  checkAuth,
};
