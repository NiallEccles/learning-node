const errors = require('restify-errors');
const Post = require('../models/Posts');

module.exports = server => {
    //Get Posts
    server.get('/posts', async (req, res, next) => {
        try{
            const posts = await Post.find({});
            res.send(posts);
            next();
        } catch(err){
            return next(new errors.InvalidContentError());
        }
    });

    //Get single Post
    server.get('/posts/:id', async (req, res, next) => {
        try{
            const post = await Post.findById(req.params.id);
            res.send(post);
            next();
        } catch(err){
            return next(new errors.ResourceNotFoundError(`There is no post with the id of ${req.params.id}`));
        }
    });

    //Create Post
    server.post('/posts', async (req, res, next) => {
        //Check for JSON
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }

        const { name, body, author } = req.body;

        const post = new Post({
            name,
            body,
            author
        });

        try{
            const newPost = await post.save();
            res.send(201);
            next();
        } catch (err){
            return next(new errors.InternalError(err.message));
        }
    });

    //Update Post
    server.put('/posts/:id', async (req, res, next) => {
        //Check for JSON
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }
        
        try{
            const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body);
            res.send(200);
            next();
        } catch (err){
            return next(new errors.ResourceNotFoundError(`There is no post with the id of ${req.params.id}`));
        }
    });

    //Delete Post
    server.del('/posts/:id', async (req, res, next) => {
        try {
            const post = await Post.findOneAndRemove({ _id: req.params.id });
            res.send(204);
        } catch (err) {
            return next(new errors.ResourceNotFoundError(`There is no post with the id of ${req.params.id}`));
        }
    })
}