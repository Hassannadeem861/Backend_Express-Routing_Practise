
      // MINI ROUTER  
 import express from "express";
 let router = express.Router()

//GET /api/v1/feed/:userId
router.delete('/feed/:userId', (req, res, next) => {
    console.log("This is signup!', new Date()");
    res.send('post created' + new Date())

})

export default router







