module.exports = {
    login: require('./user/login'),
    withdraw: require('./user/withdraw'),
    logout: require('./user/logout'),
    profile: require('./user/profile/userInfo'),
    category: require('./user/profile/category'),
    username: require('./user/profile/username'),
    password: require('./user/profile/password'),
    signup: require('./user/signup'),
    studylog: require('./studylog/todo'),
    record: require('./studylog/record'),
    newToDo: require('./todo/new'),
    checkToDo: require('./todo/check'),
    deleteToDo: require('./todo/delete'),
    roomList: require('./room/list'),
    reissuance: require('./user/reissuance'),
    googleAPI: require('./oauth/oauthgoogle')
}