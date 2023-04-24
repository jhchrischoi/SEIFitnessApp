const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// trying to get API work, but I came up with this model just in case
const exerciseSchema = new Schema({
  movement: {
    type: String,
    enum: [
      "Squat",
      "Hinge",
      "Lunge",
      "Vertical/Horizontal Pull",
      "Push/Press",
      "Rotation",
      "Combination",
      "Plyometric",
      "Gymnastics",
      "Kettlebell",
      "Olmypic",
      "Chest",
      "Biceps",
      "Triceps",
      "Foreamrs",
      "Hamstrings",
      "Quads",
      "Calves",
      "Glutes",
      "Anterior Core",
      "Lateral Core",
      "Posterior Core",
    ],
    required: true,
  },
  equipment: {
    type: String,
    enum: [
      "BB",
      "DB",
      "Cable",
      "Bodyweight",
      "Band",
      "TRX",
      "KB",
      "Machine",
      "Mini Band",
      "BOSU",
      "Balance Beam",
      "Foam Balance Pad",
      "",
    ],
  },
  performedDate: {
    type: Date,
    default: new Date().setFullYear(new Date().getFullYear() + 1),
  },
});
// One-to-Many : movement --< Exercises
//each movement will have many exercises
// different kidns of exercises belong to a movement
// e.g. hinge movement will have deadlift/sumo deadlift/RDL/SLRDL/etc..
// so in each movement, there are these specific exercises
// const exerciseSchema =

module.exports = mongoose.model("Exercise", exerciseSchema);
