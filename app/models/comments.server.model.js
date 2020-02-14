// Load the Mongoose module and Schema object
const mongoose = require("mongoose");

mongoose.model("Comment", 
  new mongoose.Schema({
    //
    courseCode: String,
    courseName: String,
    program: String,
    semester: String,
    comment: String,
    date: {
      type: Date,
      default: Date.now
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  })
);
