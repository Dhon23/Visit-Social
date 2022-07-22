const Controller = require('../controllers/controller')
const router = require('express').Router()

router.get('/logout', Controller.logout)
router.get('/profile', Controller.profile)
router.get('/profile/edit', Controller.editProfileForm)
router.post('/profile/edit', Controller.profileEdited)


module.exports = router