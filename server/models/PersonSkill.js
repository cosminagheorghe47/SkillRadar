import mongoose from "mongoose";

const PersonSkillSchema = new mongoose.Schema(
  {
    skillId: {
        type: String,
        required: true,
    },
    personId: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
        default: 0,
    },
  },
  { timestamps: true }
);

const PersonSkill = mongoose.model("PersonSkill", PersonSkillSchema);
export default PersonSkill;