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

    await queryInterface.bulkInsert('rooms', [{
      id: 4,
      roomName: '영어',
      uuid: uuidV4(),
      category: '영어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 5,
      roomName: '자격증',
      uuid: uuidV4(),
      category: '자격증'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 6,
      roomName: '국내입시',
      uuid: uuidV4(),
      category: '국내입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 7,
      roomName: '제2외국어',
      uuid: uuidV4(),
      category: '제2외국어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 8,
      roomName: '취업',
      uuid: uuidV4(),
      category: '취업'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 9,
      roomName: '공무원',
      uuid: uuidV4(),
      category: '공무원'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 10,
      roomName: '예체능',
      uuid: uuidV4(),
      category: '예체능'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 11,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 12,
      roomName: '자격증',
      uuid: uuidV4(),
      category: '자격증'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 13,
      roomName: '해외입시',
      uuid: uuidV4(),
      category: '해외입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 14,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 15,
      roomName: '국내입시',
      uuid: uuidV4(),
      category: '국내입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 16,
      roomName: '해외입시',
      uuid: uuidV4(),
      category: '해외입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 17,
      roomName: '영어',
      uuid: uuidV4(),
      category: '영어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 18,
      roomName: '제2외국어',
      uuid: uuidV4(),
      category: '제2외국어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 19,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 20,
      roomName: '공무원',
      uuid: uuidV4(),
      category: '공무원'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 21,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 22,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 23,
      roomName: '예체능',
      uuid: uuidV4(),
      category: '예체능'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 24,
      roomName: '자격증',
      uuid: uuidV4(),
      category: '자격증'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 25,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 26,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 27,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 28,
      roomName: '자격증',
      uuid: uuidV4(),
      category: '자격증'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 29,
      roomName: '국내입시',
      uuid: uuidV4(),
      category: '국내입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 30,
      roomName: '영어',
      uuid: uuidV4(),
      category: '영어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 31,
      roomName: '취업',
      uuid: uuidV4(),
      category: '취업'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 32,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 33,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 34,
      roomName: '공무원',
      uuid: uuidV4(),
      category: '공무원'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 35,
      roomName: '제2외국어',
      uuid: uuidV4(),
      category: '제2외국어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 36,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 37,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 38,
      roomName: '해외입시',
      uuid: uuidV4(),
      category: '해외입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 39,
      roomName: '영어',
      uuid: uuidV4(),
      category: '영어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 40,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 41,
      roomName: '국내입시',
      uuid: uuidV4(),
      category: '국내입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 42,
      roomName: '해외입시',
      uuid: uuidV4(),
      category: '해외입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 43,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 44,
      roomName: '예체능',
      uuid: uuidV4(),
      category: '예체능'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 45,
      roomName: '공무원',
      uuid: uuidV4(),
      category: '공무원'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 46,
      roomName: '제2외국어',
      uuid: uuidV4(),
      category: '제2외국어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 47,
      roomName: '취업',
      uuid: uuidV4(),
      category: '취업'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 48,
      roomName: '해외입시',
      uuid: uuidV4(),
      category: '해외입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 49,
      roomName: '국내입시',
      uuid: uuidV4(),
      category: '국내입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 50,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 51,
      roomName: '영어',
      uuid: uuidV4(),
      category: '영어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 52,
      roomName: '자격증',
      uuid: uuidV4(),
      category: '자격증'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 53,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 54,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 55,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 56,
      roomName: '국내입시',
      uuid: uuidV4(),
      category: '국내입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 57,
      roomName: '해외입시',
      uuid: uuidV4(),
      category: '해외입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 58,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 59,
      roomName: '영어',
      uuid: uuidV4(),
      category: '영어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 60,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 70,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 71,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 72,
      roomName: '영어',
      uuid: uuidV4(),
      category: '영어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 73,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 74,
      roomName: '취업',
      uuid: uuidV4(),
      category: '취업'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 75,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 76,
      roomName: '예체능',
      uuid: uuidV4(),
      category: '예체능'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 77,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 78,
      roomName: '제2외국어',
      uuid: uuidV4(),
      category: '제2외국어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 79,
      roomName: '국내입시',
      uuid: uuidV4(),
      category: '국내입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 80,
      roomName: '해외입시',
      uuid: uuidV4(),
      category: '해외입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 81,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 82,
      roomName: '예체능',
      uuid: uuidV4(),
      category: '예체능'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 83,
      roomName: '공무원',
      uuid: uuidV4(),
      category: '공무원'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 84,
      roomName: '자격증',
      uuid: uuidV4(),
      category: '자격증'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 85,
      roomName: '취업',
      uuid: uuidV4(),
      category: '취업'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 86,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 87,
      roomName: '제2외국어',
      uuid: uuidV4(),
      category: '제2외국어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 88,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 89,
      roomName: '영어',
      uuid: uuidV4(),
      category: '영어'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 90,
      roomName: '해외입시',
      uuid: uuidV4(),
      category: '해외입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 91,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 92,
      roomName: '국내입시',
      uuid: uuidV4(),
      category: '국내입시'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 93,
      roomName: '코딩',
      uuid: uuidV4(),
      category: '코딩'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 94,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 95,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 96,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 97,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 98,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 99,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 100,
      roomName: '자유',
      uuid: uuidV4(),
      category: '자유'
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
