const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  points: { type: Number,required:true},
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
  teamMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    
  ],
});
module.exports = team = mongoose.model("team", teamSchema);
