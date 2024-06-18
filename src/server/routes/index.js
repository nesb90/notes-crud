const notes = require('./note.routes')

function initRoutes (app, mongoose) {
  const models = mongoose.models
  notes(app, models.note)
}

module.exports = initRoutes