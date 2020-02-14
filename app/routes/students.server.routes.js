// Load the 'students' controller
const controller = require("../../app/controllers/students.server.controller");

// Define the routes module' method
module.exports = function(app) {

   app.get("/students/register", controller.registerGet);

   app.post("/students/register", controller.registerPost);

   app.get("/students/list", controller.studentsList);

   app.get("/students/emails", controller.studentsEmails);

};
