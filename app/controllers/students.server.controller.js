// Load the 'student' Mongoose model
const Student = require('mongoose').model('Student');

exports.registerGet = function (req, res) {

    res.render('students/register');

}; 

exports.registerPost = function (req, res, next) {
    // Create a new instance of the 'student' Mongoose model
    const student = new Student(req.body);
    // Use the 'student' instance's 'save' method to save a new student document
    student.save((err) => {
        if (err) {
            // Call the next middleware with an error message
            console.log(err);
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            //res.json(student);
            res.redirect('/');
        }
    });
};

exports.studentsList = function (req, res, next) {
    // Use the 'student' static 'find' method to retrieve the list of students
    Student.find({}, (err, students) => {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {

            res.render('students/list', {
                students: students
            });

        }
    });
};

exports.studentsEmails = function (req, res, next) {
    // Use the 'student' static 'find' method to retrieve the list of students
    Student.find({}, (err, students) => {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {

            res.render('students/emails', {
                students: students
            });

        }
    });
};