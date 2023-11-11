import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    clickupId:{
        type: String,
        required: false,
    }
  },
  { timestamps: true }
);

const Person = mongoose.model("Person", PersonSchema);
export default Person;