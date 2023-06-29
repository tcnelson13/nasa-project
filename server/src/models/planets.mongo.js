const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

// Connects planetsSchema with the "planets" collection
// This is known as "compiling the model"
module.exports = mongoose.model("Planet", planetsSchema);
