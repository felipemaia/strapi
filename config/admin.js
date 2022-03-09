module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb7dcc3202734669669d0442f9a3b74c'),
  },
});
