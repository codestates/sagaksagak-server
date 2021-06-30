module.exports = {
    login: require('./user/login'),
    withdraw: require('./user/withdraw'),
    logout: require('./user/logout'),
    profile: require('./user/profile/userinfo'),
    category: require('./user/profile/category'),
    username: require('./user/profile/username'),
    password: require('./user/profile/password'),
    signup: require('./user/signup'),
    studylog: require('./studylog/todo'),
    record: require('./studylog/record'),
    newTodo: require('./todo/new'),
    checkTodo: require('./todo/check'),
    deleteTodo: require('./todo/delete'),
    roomList: require('./room/list'),
    reissuance: require('./user/reissuance')
}