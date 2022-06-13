const router = require('express').Router();
const { Blog } = require('../../models');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//api/blogs/ route for posting a new blog and saving it to db
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

//api/blogs/comment route for posting a new comment for a specific blog/post and saving it to db
router.post('/comment', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//api/blogs/${id} route for updating a specific blog
router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.update({
      ...req.body,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//api/blogs/${id} route for deleting a specific blog
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;