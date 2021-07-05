const express = require('express');
const router = express.Router();
const controllers = require("../controllers/index")
const roomModules = require('../controllers/room/roomModules')

router.post('/signup', controllers.signup);
router.post('/signup/username-exist', controllers.duplicateCheck);
router.post('/user', controllers.login);
router.get('/user/token', controllers.reissuance);
router.get('/user/logout', controllers.logout);
router.delete('/user/:id', controllers.withdraw);
router.get('/user/:id', controllers.profile);
router.patch('/user/:id/category', controllers.category);
router.patch('/user/:id/username', controllers.username);
router.patch('/user/:id/password', controllers.password);
router.get('/studylog', controllers.studylog);
router.get('/studylog/:id', controllers.record);
router.post('/todo', controllers.newToDo);
router.patch('/todo/:id', controllers.checkToDo);
router.delete('/todo/:id', controllers.deleteToDo);
router.get('/room/list', controllers.roomList);
router.post('/room/new', roomModules.createRoom);
router.post('/room/:roomId', roomModules.joinRoom);
router.post('/oauth/google/login', controllers.googleLogin);
router.post('/oauth/google/signup', controllers.googleSignup)

module.exports = router;