const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

let MessageModel = {};

const convertId = mongoose.Types.ObjectId;

const MessageSchema = new mongoose.Schema({
  message: {
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

MessageSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return MessageModel.find(search).select('message owner').exec(callback);
}

MessageSchema.statics.removeByAttr = (attr, callback) => {
  return MessageModel.deleteOne(attr, (err) => {
    if (err) console.log(err);
    console.log('1 document(s) deleted');
  }, callback);
};

MessageModel = mongoose.model('Posts', MessageSchema);

module.exports = {
  MessageModel,
  MessageSchema,
}
