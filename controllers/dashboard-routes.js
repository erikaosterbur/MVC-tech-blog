const router = require('express').Router();
const withAuth = require('../utils/auth')
const { Post, User } = require('../models');


router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
        });
        
        const posts = postData.map((post) => post.get({ plain: true }));
        
        res.render('all-posts-admin', {
            posts,
            logged_in: req.session.logged_in,
            layout: "dashboard"
        });
    } catch (err) {
        res.status(500).json(err);
        res.redirect("login");
    }
});



//edit post page route


module.exports = router;