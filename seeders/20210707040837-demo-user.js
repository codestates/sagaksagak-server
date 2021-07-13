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
      roomName: '주니어 개발자들 모여라',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"오늘도코딩"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 2,
      roomName: '아무공부나 자유롭게 해요',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"david"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 3,
      roomName: '어떠한 자격증이여도 괜찮아요',
      uuid: uuidV4(),
      category: '자격증',
      entry: JSON.stringify([{"DUMMY":"난자격증왕"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 4,
      roomName: '타일러쌤과 함께하는 영어',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"타일러"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 5,
      roomName: '요리 자격증 관심있는 분??',
      uuid: uuidV4(),
      category: '자격증',
      entry: JSON.stringify([{"DUMMY":"난요리사"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 6,
      roomName: '서울대 가즈아',
      uuid: uuidV4(),
      category: '국내입시',
      entry: JSON.stringify([{"DUMMY":"남서울대학생회장"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 7,
      roomName: '중국어를 잘하고 싶다~ 손?',
      uuid: uuidV4(),
      category: '제2외국어',
      entry: JSON.stringify([{"DUMMY":"홍콩반점"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 8,
      roomName: '3달안에 취뽀만들어 주는 방',
      uuid: uuidV4(),
      category: '취업',
      entry: JSON.stringify([{"DUMMY":"마법사"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 9,
      roomName: '공무원 합격은 에듀윌',
      uuid: uuidV4(),
      category: '공무원',
      entry: JSON.stringify([{"DUMMY":"서경석"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 10,
      roomName: '피아노 관심있으신분??',
      uuid: uuidV4(),
      category: '예체능',
      entry: JSON.stringify([{"DUMMY":"베토벤"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 11,
      roomName: '하이빌리브 아이캔 플라이',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"영계백숙"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 12,
      roomName: '컴활 1급 따고 싶은 사람 여기로~~',
      uuid: uuidV4(),
      category: '자격증',
      entry: JSON.stringify([{"DUMMY":"빌게이츠"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 13,
      roomName: 'SAT 2달 빡시게 준비방',
      uuid: uuidV4(),
      category: '해외입시',
      entry: JSON.stringify([{"DUMMY":"난하버드생"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 14,
      roomName: '꾸준히 복습하며 나아가는 코딩 방',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"주커버그"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 15,
      roomName: '국영수는 꽉 잡고 가야지~',
      uuid: uuidV4(),
      category: '국내입시',
      entry: JSON.stringify([{"DUMMY":"설민석"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 16,
      roomName: 'america highschool math academy',
      uuid: uuidV4(),
      category: '해외입시',
      entry: JSON.stringify([{"DUMMY":"파스칼"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 17,
      roomName: '헬로우 잉글리쉬~~',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"오늘도영어"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 18,
      roomName: '일본어 준비해서 도쿄대가즈아',
      uuid: uuidV4(),
      category: '제2외국어',
      entry: JSON.stringify([{"DUMMY":"부산대학생"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 19,
      roomName: '프로필 사진 잘 찍고싶은 사람 모여',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"각도의중요성"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 20,
      roomName: '9급공무원 합격은 이 방이란 말이야',
      uuid: uuidV4(),
      category: '공무원',
      entry: JSON.stringify([{"DUMMY":"8급공무원"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 21,
      roomName: '조용히 책 읽고 싶은 사람~~',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"오늘도독서"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 22,
      roomName: '요리 잘하는 사람?',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"사실난비룡"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 23,
      roomName: '리코더 잘불고 싶은 잼민이들?',
      uuid: uuidV4(),
      category: '예체능',
      entry: JSON.stringify([{"DUMMY":"피리소녀"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 24,
      roomName: '컴활 2급 단 하루면 충분',
      uuid: uuidV4(),
      category: '자격증',
      entry: JSON.stringify([{"DUMMY":"거짓말쟁이"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 25,
      roomName: '어떠한 공부도 환영이에요!',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"이태원프리덤"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 26,
      roomName: '자바스크립트 기초를 다져보자',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"이고잉"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 27,
      roomName: '잠시 쉬어가는 방',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"투머치토커"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 28,
      roomName: '바리스타 자격증 준비하시는 분들~~',
      uuid: uuidV4(),
      category: '자격증',
      entry: JSON.stringify([{"DUMMY":"바티스타"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 29,
      roomName: '고3을 위한 수능 준비방',
      uuid: uuidV4(),
      category: '국내입시',
      entry: JSON.stringify([{"DUMMY":"잼민이"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 30,
      roomName: '영어를 뿌셔뿌셔',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"뿌셔뿌셔"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 31,
      roomName: '해외취업에 관심있으신분들 여기로~',
      uuid: uuidV4(),
      category: '취업',
      entry: JSON.stringify([{"DUMMY":"국내토박이"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 32,
      roomName: '어떠한 스터디도 ok',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"아무개"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 33,
      roomName: 'html css 잡고 웹 뿌셔보자',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"ksyksy"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 34,
      roomName: '7급 공무원이 되고 싶은 사람',
      uuid: uuidV4(),
      category: '공무원',
      entry: JSON.stringify([{"DUMMY":"동사무소직원"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 35,
      roomName: '스페인어를 뿌셔보자',
      uuid: uuidV4(),
      category: '제2외국어',
      entry: JSON.stringify([{"DUMMY":"바모스"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 36,
      roomName: '조용히 공부만 하고 싶은 사람',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"우루루쾅쾅"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 37,
      roomName: '내가 git 알려줄게',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"gitws"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 38,
      roomName: '일본대학 입시는 여기여기 모여라',
      uuid: uuidV4(),
      category: '해외입시',
      entry: JSON.stringify([{"DUMMY":"도요토미"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 39,
      roomName: '고전 영어 소설에 관심있으신분',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"아브라함링컨"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 40,
      roomName: '자유로운 공부방',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"david"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 41,
      roomName: '인서울 가보즈아',
      uuid: uuidV4(),
      category: '국내입시',
      entry: JSON.stringify([{"DUMMY":"뚜비두밥"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 42,
      roomName: '중국 유학 관심있으신 분들 여기로',
      uuid: uuidV4(),
      category: '해외입시',
      entry: JSON.stringify([{"DUMMY":"마오쩌둥"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 43,
      roomName: '동기부여 자극방',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"이용진"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 44,
      roomName: '음악 이론 뿌셔보자',
      uuid: uuidV4(),
      category: '예체능',
      entry: JSON.stringify([{"DUMMY":"모짜르트"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 45,
      roomName: '기초부터 시작하는 9급 공무원',
      uuid: uuidV4(),
      category: '공무원',
      entry: JSON.stringify([{"DUMMY":"마을회관이장님"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 46,
      roomName: '불어 기초다지기',
      uuid: uuidV4(),
      category: '제2외국어',
      entry: JSON.stringify([{"DUMMY":"이봉주르"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 47,
      roomName: '취업 고민상담 센터',
      uuid: uuidV4(),
      category: '취업',
      entry: JSON.stringify([{"DUMMY":"백수"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 48,
      roomName: '미국대학 준비중이신 분들',
      uuid: uuidV4(),
      category: '해외입시',
      entry: JSON.stringify([{"DUMMY":"마오쩌둥"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 49,
      roomName: '고등학교 준비반',
      uuid: uuidV4(),
      category: '국내입시',
      entry: JSON.stringify([{"DUMMY":"내신1등급"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 50,
      roomName: '파이썬 기본개념 정리방',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"반로섬"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 51,
      roomName: '미드로 배우는 영어공부',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"타일러"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 52,
      roomName: '일식조리사 자격증',
      uuid: uuidV4(),
      category: '자격증',
      entry: JSON.stringify([{"DUMMY":"타케아"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 53,
      roomName: '아무공부나 다 환영이에요',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"유령"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 54,
      roomName: '모여서 각자 공부하기',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"하리보"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 55,
      roomName: 'C언어 뿌시기',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"데니스리치"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 56,
      roomName: '중학생들도 다 아는 고등수학 기초 개념다지기',
      uuid: uuidV4(),
      category: '국내입시',
      entry: JSON.stringify([{"DUMMY":"잼민이"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 57,
      roomName: '프랑스로 유학준비중이신분들 여기로',
      uuid: uuidV4(),
      category: '해외입시',
      entry: JSON.stringify([{"DUMMY":"이봉주르"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 58,
      roomName: '모여서 각자 공부하기',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"디멘터"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 59,
      roomName: '영어 회화를 배워보자',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"야놀자"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 60,
      roomName: '자유롭게 하고 싶은 공부하는 방',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"이태원프리덤"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 70,
      roomName: 'React 기초개념 잡기!!',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"hwang"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 71,
      roomName: 'C++ 배워보자',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"코딩마스터"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 72,
      roomName: 'CNN으로 배우는 영어',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"영어마스터"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 73,
      roomName: '자유롭게 하고 싶은 공부하자',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"자유마스터"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 74,
      roomName: '개발자로 취업하고 싶은 사람??',
      uuid: uuidV4(),
      category: '취업',
      entry: JSON.stringify([{"DUMMY":"취업마스터"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 75,
      roomName: '모여서 각자 하고 싶은 공부하기',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"hwjeong"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 76,
      roomName: '계주 스타트 이론으로 배우기',
      uuid: uuidV4(),
      category: '예체능',
      entry: JSON.stringify([{"DUMMY":"우사인볼트"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 77,
      roomName: '자유롭게 하고 싶은 공부하기',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"자유한국당"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 78,
      roomName: '실생활 중국어 배우기',
      uuid: uuidV4(),
      category: '제2외국어',
      entry: JSON.stringify([{"DUMMY":"마오쩌둥"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 79,
      roomName: '강남 아이들의 공부법',
      uuid: uuidV4(),
      category: '국내입시',
      entry: JSON.stringify([{"DUMMY":"대치동엄마"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 80,
      roomName: '캐나다 유학가고 싶은 사람',
      uuid: uuidV4(),
      category: '해외입시',
      entry: JSON.stringify([{"DUMMY":"캐네디언"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 81,
      roomName: '자유롭게 하고 싶은 공부해보자',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"아모르파티"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 82,
      roomName: '배드민턴 이론으로 배우기',
      uuid: uuidV4(),
      category: '예체능',
      entry: JSON.stringify([{"DUMMY":"이용대"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 83,
      roomName: '경찰 준비하기',
      uuid: uuidV4(),
      category: '공무원',
      entry: JSON.stringify([{"DUMMY":"우리동네파출소"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 84,
      roomName: '양식 조리사 자격증 공부방',
      uuid: uuidV4(),
      category: '자격증',
      entry: JSON.stringify([{"DUMMY":"고든램지"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 85,
      roomName: '디자이너로 취업하기',
      uuid: uuidV4(),
      category: '취업',
      entry: JSON.stringify([{"DUMMY":"재단왕김빵꾸"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 86,
      roomName: '웹개발자 입문 기본 개념잡기',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"노마드코더"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 87,
      roomName: '일본 여행에 필요한 일본어 공부',
      uuid: uuidV4(),
      category: '제2외국어',
      entry: JSON.stringify([{"DUMMY":"와타시나마에와"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 88,
      roomName: '인공지능 기초 다지기',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"AI"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 89,
      roomName: '영화로 공부하는 영어',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"스가"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 90,
      roomName: '영국으로 유학가고 싶은 사람 손~~',
      uuid: uuidV4(),
      category: '해외입시',
      entry: JSON.stringify([{"DUMMY":"신사의나라"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 91,
      roomName: '어떠한 공부도 환영이에요!!',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"랜덤"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 92,
      roomName: '고1 국영수 마스터하기',
      uuid: uuidV4(),
      category: '국내입시',
      entry: JSON.stringify([{"DUMMY":"잔잔바리"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 93,
      roomName: '텐서플로우 기본 개념잡기',
      uuid: uuidV4(),
      category: '코딩',
      entry: JSON.stringify([{"DUMMY":"인공지능"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 94,
      roomName: '모여서 각자 공부하기',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"1학년6반김민재"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 95,
      roomName: '여기가 도서관이다 생각합시당',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"라이브러리"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 96,
      roomName: '신나게 말하면서 배우는 영어',
      uuid: uuidV4(),
      category: '영어',
      entry: JSON.stringify([{"DUMMY":"타일러"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 97,
      roomName: '한식 조리사 자격증 공부방',
      uuid: uuidV4(),
      category: '자격증',
      entry: JSON.stringify([{"DUMMY":"대장금"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 98,
      roomName: '어떠한 공부도 환영이에요!',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"송충이"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 99,
      roomName: '정치에 관심 있으신분들',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"나는야대통령"}])
    }])

    await queryInterface.bulkInsert('rooms', [{
      id: 100,
      roomName: '자유롭게 공부하시면 됩니당',
      uuid: uuidV4(),
      category: '자유',
      entry: JSON.stringify([{"DUMMY":"스터디마스터"}])
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
