const models = require('../models');
const Message = models.Dashboard;

const dashPage = (req, res) => {
  console.log('hit dashpage', req.session)
  Message.MessageModel.findByOwner(req.session.user._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }
    let username = req.session.user.username

    return res.json({ user: username , messages: docs })
  });
}

const makeCards = (req, res) => {
  if (!req.body.message) {
    return res.status(400).json({ error: ' ALL fields are required' });
  }

  const cardData = {
    message: req.body.message,
    owner: req.session.account._id,
  };

  const newCard = new Message.MessageModel(cardData)
  const cardPromise = newCard.save();

  cardPromise
  .then(() => {
    res.json({ message: 'Card Created' });
  });

  cardPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Card already exists' });
    }
    return res.status(400).json({ error: 'An error occurred' });
  });
  return cardPromise;
};



module.exports = {
  dashPage,
  makeCards
}