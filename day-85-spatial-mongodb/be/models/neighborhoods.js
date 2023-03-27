const mongoose = require("mongoose");

const neighborhoodSchema = new mongoose.Schema(
  {
    name: String,
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    collection: "neighborhoods",
  }
);

const Neighborhood = mongoose.model("Neighborhood", neighborhoodSchema);

module.exports = Neighborhood;
