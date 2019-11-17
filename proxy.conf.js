const proxy = [
  {
    context: '/api',
    target: 'https://api.hgbrasil.com/weather',
    pathRewrite: {'^/api' : ''}
  }
];module.exports = proxy;