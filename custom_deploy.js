var ghpages = require('gh-pages');

ghpages.publish('public', {
  repo: 'https://github.com/bark-simulator/bark-simulator.github.io'
}, callback);