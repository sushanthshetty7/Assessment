const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const SOP = require("./model");

const app = express();


app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://sushanth:sushanth1234@cluster0.wg571ge.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

app.post("/submit-sop", async (req, res) => {
  try {
    const newSOP = new SOP(req.body);

  
    await newSOP.save();

    res.status(201).json({ message: "SOP submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
