function initModel (mongoose) {
  const schema = mongoose.Schema({
    title: String,
    content: String
  }, {
    timestamps: true
  })

  const model = mongoose.model('note', schema)
  return model
}

module.exports = initModel