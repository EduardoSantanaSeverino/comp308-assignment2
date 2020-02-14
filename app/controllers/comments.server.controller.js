// Load the 'student' Mongoose model
const Comment = require('mongoose').model('Comment');
const Student = require('mongoose').model('Student');

exports.createGet = (req, res) => {

    res.render('comments/create', {
        firstName: req.session.student.firstName, 
        lastName: req.session.student.lastName
    });

}

exports.createPost = (req, res) => {
    
    const comment = new Comment(req.body);
    comment.student = req.session.student;
    req.session.comment = req.body.comment;
	// Use the 'student' instance's 'save' method to save a new student document
	comment.save((err) => {
		if (err) {
            // Call the next middleware with an error message
            console.log(err);
            return next(err);
            
		} else {
            res.redirect('/comments/thankyou');
		}
    });
    
}

exports.thankYouGet = (req, res) => {

    res.render('comments/thankyou', {
        email: req.session.student.email,
        comment : req.session.comment
    }); 

}

exports.commentsByStudent = function (req, res) {
   
    //find the student then its comments using Promise mechanism of Mongoose
    Student.
        findOne({ email: req.query.email }, (err, student) => {
            if (err) { return getErrorMessage(err); }
            //
            req.id = student._id;
            console.log(req.id);
        }).then(function () {
            //find the posts from this author
            Comment.
                find({
                    student: req.id
                }, (err, comments) => {
                    if (err) { return getErrorMessage(err); }
                    
                    console.log(comments.length);
                    res.render('comments/list', {
                        comments: comments, 
                        email: req.query.email, 
                        count: comments.length
                    });
                });
        });
};
