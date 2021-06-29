// const router = require("../index");
const express = require('express');
const router = express.Router();
const controllers = require("../controllers/index")

router.post('/user', controllers.login);
router.delete('/user/:id', controllers.withdraw);
router.get('/user/logout', controllers.logout);
router.get('/user/:id', controllers.profile);
router.patch('/user/:id/category', controllers.category);
router.patch('/user/:id/username', controllers.username);
router.patch('/user/:id/password', controllers.password);
router.get('/studylog', controllers.studylog);
router.get('/studylog/:id', controllers.record);
router.post('/signup', controllers.signup);
router.post('/todo', controllers.newTodo);
router.patch('/todo/:id', controllers.checkTodo);
router.delete('/todo/:id', controllers.deleteTodo);
router.get('/rooms', controllers.roomList);

module.exports = router;