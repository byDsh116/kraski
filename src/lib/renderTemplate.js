require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function renderTemplate(component, props, res) {
  const reactEl = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
};
