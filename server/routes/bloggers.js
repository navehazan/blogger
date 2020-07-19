const express = require("express");
const router = express.Router();
const { sgMail, getMessage } = require("../services/sendgrid");

/* GET users listing. */
router.post("/", async (req, res, next) => {
  const emails = req.body;

  for (let email of emails) {
    const msg = getMessage(email);
    try {
      await sgMail.send(msg);
    } catch (e) {
      return next(e);
    }
  }

  res.status(200).send({message: "success"})
});

module.exports = router;
