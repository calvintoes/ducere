const models = require('../models');
const Message = models.Dashboard;

const dashPage = (req, res) => {
  console.log('hit dashpage', req.session)
  Message.MessageModel.findByOwner(req.session.user._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.json({ cards: docs })
  });
}

const makeCards = (req, res) => {
  console.log("MAKE CARDDS", req.body)
  if (!req.body.message) {
    return res.status(400).json({ error: ' ALL fields are required' });
  }

  const cardData = {
    message: req.body.message,
    owner: req.session.user._id,
  };

  const newCard = new Message.MessageModel(cardData)
  const cardPromise = newCard.save();

  cardPromise
  .then(() => {
    res.json({ message: req.body.message });
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