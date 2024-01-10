const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/pages/Registration');
const { User } = require('../../db/models');
const Entry = require('../views/pages/Entry');
const Account = require('../views/pages/Account');

router.get('/entry', async (req, res) => {
  renderTemplate(Entry, {}, res);
});
router.get('/reg', async (req, res) => {
  renderTemplate(Registration, {}, res);
});
router.get('/account', async (req, res) => {
  renderTemplate(Account, {}, res);
});
router.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    const userData = user.get({ plain: true });
    res.json(userData);
  } catch (error) {
    console.log('ERROR:', error);
    res.sendStatus(400);
  }
});

module.exports = router;
