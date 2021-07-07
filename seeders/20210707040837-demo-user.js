'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
      id: 1,
      username: 'guest',
      email: 'guest@naver.com',
      password: '12341234',
      category: "['코딩', '자격증', '국내입시']"
    }], {})

    await queryInterface.bulkInsert('users', [{
      id: 2,
      username: 'david',
      email: 'david@naver.com',
      password: '12341234',
      category: "['코딩', '자격증', '자유']"
    }], {})

    await queryInterface.bulkInsert('users', [{
      id: 3,
      username: 'hwang',
      email: 'hwang@naver.com',
      password: '12341234',
      category: "['코딩', '자격증', '자유']"
    }], {})

    await queryInterface.bulkInsert('rooms', [{
      id: 1,
      roomName: '코딩',
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      roomName: '자유',
      category: '자유'
    }])

    await queryInterface.bulkInsert('todos', [{
      userId: 2,
      content: 'todo1',
      isDone: false
    }])

    await queryInterface.bulkInsert('todos', [{
      userId: 3,
      content: 'todo2',
      isDone: true
    }])

    await queryInterface.bulkInsert('join_logs', [{
      userId: 2,
      roomId: 1
    }])

    await queryInterface.bulkInsert('join_logs', [{
      userId: 3,
      roomId: 1
    }])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('rooms', null, {});
    await queryInterface.bulkDelete('todos', null, {});
    await queryInterface.bulkDelete('join_logs', null, {});
  }
};
