import express from "express";
import Joi from "joi";
import "dotenv/config";

let tokenRouter = express.Router();
import jwt from "jsonwebtoken";
import Token from "../models/tokenGenrateSchema.js";
tokenRouter.post("/", async (req, res) => {
  try {
    let tokenJoiSchema = Joi.object({
      name: Joi.string().min(5).required(),
      cnic: Joi.string().required().min(15).max(15),
      contact: Joi.string().required().min(11).max(11),
      description: Joi.string().required().min(20).max(150),
    });

    let obj = req.body;
    let { error, value } = tokenJoiSchema.validate(obj);
    console.log("value=>", value);
    console.log("error=>", error);

    if (error) {
      return res.status(400).json({
        error: true,
        message: error.details[0].message,
      });
    }
    let token = jwt.sign(
      {
        name: value.name,
        cnic: value.cnic,
        contact: value.contact,
        description: value.description,
      },
      process.env.TOKEN_SECRET
    );

    let loanData = {
      name: value.name,
      cnic: value.cnic,
      contact: value.contact,
      description: value.description,
      token: token,
      // tokennumber:
    };
    let newLoan = new Token(loanData);
    console.log("newLoan=", newLoan);
    let allData = await Token.find();
    let tokenNumber = allData.length + 1;
    await newLoan.save();
    return res.json({
      error: false,
      message: "Token generated successfully",
      newLoan: newLoan,
      tokenNumber: tokenNumber,
    });
  } catch (error) {
    return res.json({
      error: true,
      message: "notFoundToken",
      newLoan: null,
      tokenNumber: null,
    });
  }
});
export default tokenRouter;
