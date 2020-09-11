require("dotenv").config();
const express = require("express");
const router = express.Router();
const { newInquiry } = require("../../utils/nodemailer/newInquiry")

router.post(
    "/",
    ({ body }, res) => {
          newInquiry(body.formState);
        });
      
        module.exports = router