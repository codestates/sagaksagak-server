// const router = require("../index");
const express = require('express');
const router = express.Router();
const controllers = require("../controllers/index")

router.post('/signup', controllers.signup);
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
router.post('/todo', controllers.newTodo);
router.patch('/todo/:id', controllers.checkTodo);
router.delete('/todo/:id', controllers.deleteTodo);
router.get('/rooms', controllers.roomList);

module.exports = router;