import { Schema, model, models } from "mongoose";

const UserSchema = Schema(
  {
    email: {
      type: String,
      unique: [true, "Email lready exists"],
      equired: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: String,
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
