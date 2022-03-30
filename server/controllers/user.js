import CryptoJS from "crypto-js";
import dotenv from "dotenv";
import validateEmailAdress from "../utils/validateEmailAdress.js";
// model imports
import User from "../models/user.js";
import Profile from "../models/profile.js";

dotenv.config();

const { CLIENT_URL, SECRET_KEY, ACCESS_TOKEN, ACTIVATION_TOKEN_SECRET } =
  process.env;

export const signUp = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname | !email | !password) {
      return res.status(400).json({ msg: "Please fill in all fields..." });
    }
    if (!validateEmailAdress(email)) {
      return res.status(400).json({ msg: "Invalid email adress." });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 8 characters." });
    }

    const isEmailExist = await User.findOne({ email });

    if (isEmailExist) {
      return res
        .status(400)
        .json({ msg: "An user already registered with this email" });
    } else {
      const cryptedPassword = CryptoJS.AES.encrypt(
        password,
        SECRET_KEY
      ).toString();

      const newUser = new User({
        fullname,
        email,
        password: cryptedPassword,
      });
      await newUser.save().then((user) => {
        const newProfile = new Profile({
          userID: user.id,
          tasks: [],
          lists: [],
          notes: [],
        });
        newProfile.save();
        return res.status(200).json({ msg: "Profile successfully added." });
      });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const response = await User.find();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

export const GetAnUserByID = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const response = await User.findOne({ _id: id });
      if (response) {
        return res.status(200).json(response);
      } else {
        return res.status(400).json({ msg: "This doesnt exist!" });
      }
    } catch (error) {
      return res.status(400).json({ msg: "Something went wrong!" });
    }
  }
};
