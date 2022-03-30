import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      required: [true, "Please enter user id."],
    },
    tasks: {
      type: [
        {
          listID: String,
          title: String,
          context: String,
          date: Date,
          completed: Boolean
        },
      ],
    },
    lists: {
      type: [
        {
          title: String,
          image: String,
          slug: String,
          date: Date,
        },
      ],
    },
    notes: {
      type: [
        {
          title: String,
          note: String,
          date: Date,
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
