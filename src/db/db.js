const validator = require("validator");
const mongoose = require("mongoose");

// const uri =
//   "mongodb+srv://admin:Password@cluster0.zcyws.mongodb.net/taskdb?retryWrites=true&w=majority";

mongoose.connect(process.env.URI_DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
