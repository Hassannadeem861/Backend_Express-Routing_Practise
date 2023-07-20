
       // MINI ROUTER  
 import express from "express";
 let router = express.Router()


//GET /api/v1/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
    console.log("This is signup!', new Date()");
    res.send('post created' + new Date())

})

//GET /api/v1/comments/:postId
router.get('/comments/:postId', (req, res, next) => {
    console.log("This is signup!', new Date()");
    res.send('post created' + new Date())

})

//PUT  /api/v1/comment/:postId/:commentId
router.put('/comment/:postId/:commentId', (req, res, next) => {
    console.log("This is signup!', new Date()");
    res.send('post created' + new Date())

})

//DELETE /api/v1/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    console.log("This is signup!', new Date()");
    res.send('post created' + new Date())

})

export default router






