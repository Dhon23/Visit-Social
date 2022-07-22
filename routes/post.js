const Controller = require('../controllers/controller')
const router = require('express').Router()
const { isUser } = require('../middlewares/auth');

router.get('/', Controller.posts)

router.use(isUser)

router.get('/story', Controller.storyForm)
router.post('/story', Controller.postStory)
router.get('/delete/:postId', Controller.storyDelete)

module.exports = router