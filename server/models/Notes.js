const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

let StoryModel = {};

const convertId = mongoose.Types.ObjectId;

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User'
  },

  createdDate: {
    type: Date,
    default: Date.now,
  }
});


StorySchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return StoryModel.find(search).select('title body').exec(callback);
}

StorySchema.statics.removeByAttr = (attr, callback) => {
  return StoryModel.deleteOne(attr, (err) => {
    if (err) console.log(err);
    console.log('1 document(s) deleted');
  }, callback);
};

StoryModel = mongoose.model('Stories', StorySchema);

module.exports = {
  StoryModel,
  StorySchema,
}