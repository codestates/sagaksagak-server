'use strict';
const { v4: uuidV4 } = require('uuid')
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
      category: JSON.stringify(['코딩', '자격증', '국내입시'])
    }], {})

    await queryInterface.bulkInsert('users', [{
      id: 2,
      username: 'david',
      email: 'david@naver.com',
      password: '12341234',
      category: JSON.stringify(['코딩', '자격증', '자유'])
    }], {})

    await queryInterface.bulkInsert('users', [{
      id: 3,
      username: 'hwang',
      email: 'hwang@naver.com',
      password: '12341234',
      category: JSON.stringify(['코딩', '자격증', '자유'])
    }], {})

    await queryInterface.bulkInsert('users', [{
      id: 4,
      username: 'git',
      email: 'git@naver.com',
      password: '12341234',
      category: JSON.stringify(['공무원', '자격증', '코딩'])
    }], {})

    await queryInterface.bulkInsert('users', [{
      id: 5,
      username: 'seo',
      email: 'seo@naver.com',
      password: '12341234',
      category: JSON.stringify(['코딩', '영어', '제2외국어'])
    }], {})

    await queryInterface.bulkInsert('rooms', [{
      id: 1,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 2,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 3,
      roomName: '자격증',
      uuid: uuidV4(),
      category: '자격증'
    }])

    await queryInterface.bulkInsert('todos', [{
      userId: 2,
      content: 'todo1',
      isDone: true
    }])

    await queryInterface.bulkInsert('todos', [{
      userId: 3,
      content: 'todo2',
      isDone: true
    }])

    await queryInterface.bulkInsert('todos', [{
      userId: 5,
      content: 'todo3',
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

    await queryInterface.bulkInsert('join_logs', [{
      userId: 4,
      roomId: 1
    }])

    await queryInterface.bulkInsert('join_logs', [{
      userId: 5,
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
