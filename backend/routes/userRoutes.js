import express from 'express'
import {
    createUser,
    loginUser,
    logoutUser,

}
    from '../controller/userController.js'



const router = express.Router()


router
    .route('/create')
    .post(createUser)

router
    .route("/auth")
    .post(loginUser)

router
    .route("/logout")
    .get(logoutUser)


export default router