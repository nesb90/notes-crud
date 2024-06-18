const config = require('../config')
const models = require('./models')

function bootstrap (mongoose) {
  const { URI, SCHEMA} = config.DB

  models.forEach((model) => model(mongoose))
  mongoose.connect(`${URI}/${SCHEMA}`)
    .then(async () => {
      console.log('DB connected...')
      const notesModel = mongoose.models.note
      const notes = await notesModel.find({})
      if (notes.length < 1) {
        console.log('Seeding DB....')
        const notes = [{
          title: 'seed title 1',
          content: 'some note content'
        }, {
          title: 'seed title 2',
          content: 'some note 2 content'
        }, {
          title: 'seed title 3',
          content: 'some note 3 content'
        }]

        await Promise.all(notes.map((note) => {
          const data = new notesModel(note)
          data.save()
        }))
      }
    })
    .catch((err) => console.log(err))
}
module.exports = bootstrap
