module.exports = {
  SERVER: {
    HOST: process.env.SERVER_HOST,
    PORT: process.env.SERVER_PORT,
    API_ROUTE: {
      V1: '/api/v1'
    }
  },
  DB: {
    URI: 'mongodb://localhost:27017',
    SCHEMA: 'notes'
  }
}