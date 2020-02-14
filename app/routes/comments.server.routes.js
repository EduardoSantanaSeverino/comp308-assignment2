const controller = require('../../app/controllers/comments.server.controller');

// Define the routes module' method
module.exports = function(app) {

    app.get('/comments/create', controller.createGet);

    app.post('/comments/create', controller.createPost);

    app.get('/comments/thankyou', controller.thankYouGet);

    app.get('/comments/list/byemail', controller.commentsByStudent);
    
};