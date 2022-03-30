import dotenv from "dotenv";
// model imports
import Profile from "../models/profile.js";

async function checkProfileExisting(userID) {
  const isProfileExist = await Profile.findOne({ userID });
  if (!isProfileExist) {
    return res.status(400).json({ msg: "Wrong ID." });
  }
}

export const AddProfile = async (req, res) => {
  const { userID, tasks, lists, notes } = req.body;
  if (!userID | !tasks | !lists | !notes) {
    return res.status(400).json({ msg: "Please fill in all fields..." });
  }
  const newProfile = new Profile({
    userID,
    tasks,
    lists,
    notes,
  });
  await newProfile.save();
};

export const GetAllProfiles = async (req, res) => {
  try {
    const response = await Profile.find();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

export const GetAProfileByUserID = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const response = await Profile.findOne({ postID: id });
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

export const AddList = async (req, res) => {
  const userID = req.params.userID;
  const { title, image, slug, date } = req.body;
  try {
    checkProfileExisting(userID);

    if (title && image && slug && date) {
      await Profile.findOneAndUpdate(
        {
          userID,
        },
        {
          $push: {
            lists: { title, image, slug, date },
          },
        },
        { new: true }
      );
      return res.status(200).json({ msg: "List has been successfully added." });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

export const DeleteAListByID = async (req, res) => {
  const userID = req.params.userID;
  const {_id } = req.body;
  try {
    checkProfileExisting(userID);

    if (_id) {
      await Profile.findOneAndUpdate(
        {
          userID,
        },
        {
          $push: {
            lists: { title, image, slug, date },
          },
        },
        { new: true }
      );
      return res.status(200).json({ msg: "List has been successfully added." });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

export const AddTask = async (req, res) => {
  const userID = req.params.userID;
  const { listID, title, context, date } = req.body;
  try {
    checkProfileExisting(userID);

    if (listID && title && context && date) {
      await Profile.findOneAndUpdate(
        {
          userID,
        },
        {
          $push: {
            tasks: { listID, title, context, date, completed: false },
          },
        },
        { new: true }
      );
      return res.status(200).json({ msg: "Task has been successfully added." });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};

export const AddNote = async (req, res) => {
  const userID = req.params.userID;
  const { title, note, date } = req.body;
  try {
    checkProfileExisting(userID);

    if (title && note && date) {
      await Profile.findOneAndUpdate(
        {
          userID,
        },
        {
          $push: {
            notes: { title, note, date },
          },
        },
        { new: true }
      );
      return res.status(200).json({ msg: "Note has been successfully added." });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Something went wrong!" });
  }
};
