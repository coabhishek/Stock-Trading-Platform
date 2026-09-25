const { model } = require("mongoose");
const holdingSchema = require("../schemas/holdingSchema"); // Path apne folder ke mutabiq check kar lein

const holdingModel = model("holding", holdingSchema);

module.exports = holdingModel;