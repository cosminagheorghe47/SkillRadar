import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    skillName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    skillDescription: {
      type: String,
      required: false,
      min: 2,
      max: 300,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", SkillSchema);
export default Skill;