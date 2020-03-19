var ghpages = require('gh-pages');

ghpages.publish('public', {
  branch: 'master',
  repo: 'https://github.com/bark-simulator/bark-simulator.github.io'
}, {});