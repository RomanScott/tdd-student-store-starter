const express = require('express')
const router = express.Router()
const Store = require('./models')

router.get('/', (req, res) => {
    res.status(200).send({products: Store.products()})
})

router.get('/:productId', (req, res) => {
    res.status(200).send({product: Store.products().find(x => x.id == req.params.productId) || {}})
})

router.post('/', (req, res) => {
    const products = Store.products()
    const purchases = Store.getPurchases()
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

    try {
        const { user: { name, email }, shoppingCart } = req.body
        const items = []
        const ids = []
        let total = 0

        for (const cart of shoppingCart) {
            const { itemId, quantity } = cart

            if (!itemId || !quantity) throw new Error("Missing item id and quantity")
            if (ids.some(e => e == itemId)) throw new Error("No duplicates allowed")
            else ids.push(itemId)

            const product = products.find(x => x.id == itemId)

            total += product.price * quantity * 1.0875
            items.push(`${quantity} ${product.name}`)
        }

        total = formatter.format(total)
        const id = purchases.length + 1
        const createdAt = new Date().toLocaleDateString()
        const purchase = {
            id,
            name,
            email,
            order: shoppingCart,
            total,
            createdAt,
            receipt: `Thank you ${name} for your order of ${items.join(', ')} for a total cost of ${total}. A copy of this receipt has been sent to ${email}.`
        }

        Store.addPurchase(purchase)
        res.status(201).send({ purchase })
    } catch (e) {
        console.log(e)
        
        res.status(400).send({error: e})
    }
})

module.exports = router