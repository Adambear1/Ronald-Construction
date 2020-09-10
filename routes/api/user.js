require("dotenv").config();
const express = require("express");
const router = express.Router();
const { newInquiry } = require("../../utils/nodemailer")

router.post(
    "/inquire",
    // [
    //   check("email", "Email must be present").isEmail(),
    //   check("phone", "Phone Number must be present").not().isEmpty(),
    // ],
    ({ body }, res) => {
          newInquiry(body.formState);
        });