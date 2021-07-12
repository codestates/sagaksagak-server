module.exports = {
    roomList: (room) => {
        let rooms = room.map(el => {
            return {
                roomName: el.roomName,
                roomUuid: el.uuid,
                usersNum: el.entry !== null ? JSON.parse(el.entry).length : 0,
                category: el.category,
                masterName: el.entry === null ? 'guest' : JSON.parse(el.entry)[0][Object.keys(JSON.parse(el.entry)[0])],
                created: (new Date() - el.createdAt) / 1000 / 60
            }
        })
        return rooms
    },
    deduplication: (room) => {
        let rooms = [room[0]]
        let valid;
        for (let i = 1; i < room.length; i++) {
            valid = false
            for (let j = 0; j < rooms.length; j++) {
                if (room[i]['id'] === rooms[j]['id']) {
                    valid = true
                }
            }
            if (!valid) {
                rooms.push(room[i])
            }
        }
        return rooms.flat(1)
    },
    categoryUpdate: (category, arr, plus) => {
        for (let i = 0; i < arr.length; i++) {
            category.map(el => {
                if (Object.keys(el).join() === arr[i]) {
                    if (!plus) {
                        el[Object.keys(el)] = el[Object.keys(el)] + 1
                    } else {
                        el[Object.keys(el)] = plus
                    }
                }
            })
        }
        category.sort((a, b) => {
            return b[Object.keys(b).join()] - a[Object.keys(a).join()]
        })
        return JSON.stringify(category)
    }
}