const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/pages/Registration');

router.get('/reg', async (req, res) => {
  renderTemplate(Registration, {}, res);
});

module.exports = router;
