

            // MINI ROUTER  
import express from "express";
let router = express.Router()
// export const  a  = express.Router()
// export const  b  = express.Router()

router.post('/login', (req, res, next) => {
    console.log('This is login!', new Date());
    res.send('This is login v2!' + new Date())
}) 

router.post('/signup', (req, res, next) => {
    console.log('This is signup!', new Date());
    res.send('This is signup! v2' + new Date())
})

export default router



