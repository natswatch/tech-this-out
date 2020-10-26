const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// display all comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post a comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
            
        })
        .then(newCommentData => res.json(newCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// route to delete a single comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(commentData => {
        if(!commentData) {
            res.status(404).json({ message: 'No existing comment found!'})
            return;
        }
       res.json(commentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;