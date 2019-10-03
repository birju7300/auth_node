const bcrypt = require('bcrypt')
const {MD5} = require('crypto-js')
const jwt = require('jsonwebtoken')
/* 
bcrypt.genSalt(10,(err, salt)=>{
    if(err) return next(err)

    bcrypt.hash('password', salt,(err,hash)=>{
        if(err) return next(err)
        console.log(hash)
    })    
}) */

/* const user = {
    id:1,
    token:MD5('198390132n qwdfjkasjfklajdf!@#$@#$!@#$adfasdf!@$@#$').toString()
}

console.log(user) */

const recievedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y'

const id = '1000'
const secret = 'supersecret'

const token = jwt.sign(id,secret)
console.log(token)
const decodeToken = jwt.verify(recievedToken,secret)
console.log(decodeToken)