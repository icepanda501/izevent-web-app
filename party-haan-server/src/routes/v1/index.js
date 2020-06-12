import express from 'express'
import party from './party'
import user from './user'


const router = express.Router();


router.use('/party', party)
router.use('/user', user)


export default router
