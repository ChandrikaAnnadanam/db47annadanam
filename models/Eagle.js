const mongoose = require("mongoose")
const EagleSchema = mongoose.Schema({
Age: String,
colour: String,
weight: Number
})
module.exports = mongoose.model("Eagle",
EagleSchema)
