module.exports = {
    roomList: (room) => {
        let rooms = room.map(el => {
            return {
                roomName: el.roomName,
                roomUuid: el.uuid,
                usersNum: el.entry !== null ? JSON.parse(el.entry).length : 0,
                category: el.category
            }
        })
        return rooms
    },
    deduplication: (room) => {
        let rooms = await room.reduce((a, b) => {
            if (a['id'] === b['id']) {
                return a
            }
        })
        return rooms
    }
}