const models = require('../models');
const Story = models.Story;

const createStory = (req, res) => {
  console.log("Story time")
  if (!req.body.title || !req.body.body) {
    return res.status(400).json({ error: ' ALL fields are required' });
  }

  const storyData = {
    title: req.body.title,
    body: req.body.body,
    owner: req.session.user._id,
  };

  const newCard = new Story.StoryModel(storyData)
  const storyPromise = newCard.save();

  storyPromise
  .then(() => {
    res.json({ message: 'Story Saved!' });
  });

  storyPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Card already exists' });
    }
    return res.status(400).json({ error: 'An error occurred' });
  });
  return storyPromise;
};

const loadStories = (req, res) => {
  return Story.StoryModel.find((err, docs) => {
    if (err) {
      console.log(err)
      return res.status(400).json({ error: 'An error occurred' });
    }
    return res.json({ stories: docs })
  });
}

const deleteStory = (req, res) => {
  return Story.StoryModel.removeById(req.body.id,  (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'Deletion unsuccessful' });
    }
    return res.json({ success: 'Deleted Successfully'})
  });
}

module.exports = {
  createStory,
  loadStories,
  deleteStory
}