const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/pages/Registration');
const { User } = require('../../db/models');
const Entry = require('../views/pages/Entry');
const Account = require('../views/pages/Account');
const Login = require('../views/pages/Login');

router.get('/entry', async (req, res) => {
  renderTemplate(Entry, {}, res);
});
router.get('/reg', async (req, res) => {
  renderTemplate(Registration, {}, res);
});

router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/account', async (req, res) => {
  const { user } = req.session;
  renderTemplate(Account, { user }, res);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user.password === password) {
      console.log(user);
      res.session.user = user;
      res.json(user);
    } else {
      res.redirect('/login');
    }
    res.end();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// router.post('/reg', async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const user = await User.create({ name, email, password });
//     const userData = user.get({ plain: true });
//     res.json(userData);
//   } catch (error) {
//     console.log('ERROR:', error);
//     res.sendStatus(400);
//   }
// });

router.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hash });
    console.log(req.session);
    // const userData = structuredClone(user.get({ plain: true }));
    // req.session.user = userData;
    req.session.email = user.email;
    res.json(userData);
  } catch (error) {
    console.log('ERROR:', error);
    res.sendStatus(400);
  }
});

router.delete(`/:id`, async (req, res) => {
  try {
    const targetUser = User.findByPk(req.params.id);
    await targetUser.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// router.get(`/account${user.id}`, async (req, res) => {
//   renderTemplate(Account, {}, res);
// });
// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await User.destroy({ where: { id } });
//     res.redirect('/');
//   } catch (error) {
//     console.log(error);
//     renderTemplate(Entry, { error }, res);
//   }
// });

module.exports = router;
