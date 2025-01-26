import mongoose from "mongoose";
let { Schema } = mongoose;
let tokenGenrateSchema = new Schema({
  name: { type: String, required: true },
  cnic: { type: String, required: true },
  contact: { type: String, required: true },
  description: { type: String, required: true },
  token: { type: String, required: true },
  tokennumber: { type: String, required: true, default: "none" },
});

let Token = mongoose.model("Token", tokenGenrateSchema);
export default Token;
