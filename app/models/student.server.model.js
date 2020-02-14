// using the ref to reference another document
//
// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define a new 'StudentSchema'
const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    favoriteSubject: String,
    favoriteFood: String,
    email: {
        type: String,
        // Set an email index
        index: true,
        // Validate the email format
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        // Validate the 'password' value length
        validate: [
            (password) => password.length >= 6,
            'Password Should Be Longer'
        ]
    },
    created: {
        get: function (date) {
            if (!date) {
                return date;
            } else {
                
                return date.toISOString().
                replace(/T/, ' ').      // replace T with a space
                replace(/\..+/, '');
            }
        },
        type: Date,
        default: Date.now
    }
});
// Create the 'Student' model out of the 'StudentSchema'
mongoose.model('Student', StudentSchema);