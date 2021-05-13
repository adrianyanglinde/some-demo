class ChatAPI {
    constructor() {
        this.cache = {};
    }

    publishFriendStatus(id, status) {
        if (!this.cache[id]) {
            return;
        }
        let array = this.cache[id];
        for (let index = 0; index < array.length; index++) {
            const fn = array[index];
            fn(status);
        }
    }

    subscribeToFriendStatus(id, handle) {
        if (!this.cache[id]) {
            this.cache[id] = [];
        }
        this.cache[id].push(handle);
    }

    unsubscribeToFriendStatus(id, handle) {
        if (!this.cache[id]) {
            return;
        }
        let arr = this.cache[id];
        let index = arr.indexOf(handle);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
}

export default ChatAPI;
