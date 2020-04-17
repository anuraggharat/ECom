var braintree = require('braintree')
var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   '5byrydqqbmmn3tgm',
    publicKey:    'jfd6m2cczqwryf27',
    privateKey:   '0a1a3e2a41191d38382bc9d80cd7ce94'
});
exports.getToken=(req,res)=>{

gateway.clientToken.generate({},function(err,response){
        if(err){
            res.status(500).send(err)
        }else{
            res.send(response)
        }
    }
)

}
exports.processPayment=(req,res)=>{
    let nonceFromTheClient = req.body.paymentMethodNonce
    let amountFromTheClient=req.body.amount
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
            if(err){
                res.status(500).json(error)
            }else{
                res.json(result)
            }

      });
}