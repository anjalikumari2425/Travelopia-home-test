
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true , sparse: true },
    country: { type: String, required: true,enum: ["-", "India","Africa","Europe"],default: "-", },
    passengers:{ type: Number, required: true },
    budget:{type: Number, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);