const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Blog = require('../views/pages/Blog');
const Catalog = require('../views/pages/Catalog');
const Contacts = require('../views/pages/Contacts');
const Delivery = require('../views/pages/Delivery');
const Main = require('../views/pages/Main');
const Vacancies = require('../views/pages/Vacancies');

router.get('/', async (req, res) => {
  const { user } = req.session;
  renderTemplate(Main, { email: user ? user.email : undefined }, res);
});

router.get('/catalog', async (req, res) => {
  renderTemplate(Catalog, {}, res);
});

router.get('/delivery', async (req, res) => {
  renderTemplate(Delivery, {}, res);
});

router.get('/contacts', async (req, res) => {
  renderTemplate(Contacts, {}, res);
});

router.get('/vacancies', async (req, res) => {
  renderTemplate(Vacancies, {}, res);
});

router.get('/blog', async (req, res) => {
  renderTemplate(Blog, {}, res);
});

module.exports = router;
