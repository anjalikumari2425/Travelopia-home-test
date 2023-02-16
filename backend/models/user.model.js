
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true  },
    country: { type: String, required: true,enum: ["-", "India","America","Europe"],default: "-", },
    passengers:{ type: Number, required: true },
    currency:{type: Number, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);