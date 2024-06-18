const config = require('../../config')

function bootstrap (app, notesModel) {
  const apiRoute = config.SERVER.API_ROUTE.V1

  app.get(`${apiRoute}/notes`, async function getAllNotes (req, res) {
    console.log('Getting all notes...')
    const data = await notesModel.find({});
    res.json({ message: 'success', data })
  })

  app.post(`${apiRoute}/note`, async function createNote (req, res) {
    const data = req.body
    const newNote = new notesModel(data)
    await newNote.save()
    res.json({
      message: 'note created',
      noteId: newNote._id
    })
  })

  app.get(`${apiRoute}/notes/:id`, async function getNoteById (req, res){
    const data = await notesModel.findOne({ _id: req.params.id })
    res.json({
      message: 'note found',
      data
    })
  })

  app.put(`${apiRoute}/notes/:id`, async function updateNote (req, res) {
    const data = await notesModel.updateOne({ _id: req.params.id }, req.body)

    res.json({
      message: 'note updated',
      data
    })
  })

  app.delete(`${apiRoute}/notes/:id`, async function deleteNote (req, res) {
    const data = await notesModel.deleteOne({ _id: req.params.id })
    res.send({
      message: 'note deleted',
      data
    })
  })
};

module.exports = bootstrap