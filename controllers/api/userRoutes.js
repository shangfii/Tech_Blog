// establishing User model/table for access
const router = require('express').Router();
const { User } = require('../../models');

//api/users/ route for new accounts: signup
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//api/users/login route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    // console.log("post body info:")
    // console.log(req.body)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'email or password incorrect, please try again' });
      return;
    }
    
    console.log(req.body);
    const validPassword = await userData.checkPassword(req.body.password);
    
    console.log("does password match?:")
    console.log(validPassword)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Wrong login credentials, Please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: ' logged in Welcome !' });
    });

  } catch (err) {
    console.log("this is the error")
    res.status(400).json(err);
  }
});
// api/users/logout route 
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;