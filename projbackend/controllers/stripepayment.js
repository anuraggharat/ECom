const stripe = require("stripe")("sk_test_Hb6xoh47zbJtV9wo5cBz7hWE00FKQilWcv")
const uuid = require("uuid/v4")

exports.makepayment=()=>{
    const {products,token} = req.body
    console.log("PRODUCTS",products)
    let amounts=0
    products.map(p=>{
        amount=amount+p.price
    })

    const idempotencyKey=uuid()
    return stripe.customers.create({
        email:token.email,
        source:token.id
    }).then(customer=>{
        stripe.changes.create({
            amount:amount,
            currency:'usd',
            customer:customer.id,
            receipt_email:token.email
        },{idempotencyKey})
        .then(result=>result.status(200).json(result))
        .catch(err=>console.log(err))
    })
}
    