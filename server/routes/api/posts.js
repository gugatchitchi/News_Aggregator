const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray())
})

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://GugaChichi:Claymore1@cluster0.ncnmu.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  );

  return client.db('posts').collection('imedi_news');
}

module.exports = router;