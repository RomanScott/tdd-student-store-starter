const { storage } = require("./data/storage")

class Store {
    constructor() {
        
    }

    static products () {
        return storage.get('products').value()
    }

    static getPurchases () {
        return storage.get('purchases').value()
    }

    static addPurchase (purchase) {
        storage.get('purchases').push(purchase).write()
    }
}

module.exports = Store