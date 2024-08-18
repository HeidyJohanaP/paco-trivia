module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/test-antony-plugin',
    handler: 'ingresoController.suma',
    config: {
      auth: false,
    },
  }

];
