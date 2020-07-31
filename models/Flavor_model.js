const mongoose = require("mongoose");

const FlavorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Flavor", FlavorSchema);
