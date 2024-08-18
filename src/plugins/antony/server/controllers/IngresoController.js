'use strict';

module.exports = ({ strapi }) => ({
  suma(ctx) {
    return {
      'result': true,
      data: [1,2,3]
    }
  },
});

