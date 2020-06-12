import express from 'express'
import UserModel from '../../models/User'
import errorHandler from '../../utils/errorHandler'

const router = express.Router();

router.get('/list', errorHandler(async (req,res) => {
    const partyList = await UserModel.getAll()
  return res.send({
    data: partyList
  })
}))

router.post('/', errorHandler(async (req,res) => {
    const { username, email, password, needPromotion} = req.body
    console.log(req.body)
    const createdUser = await UserModel.create({ username, email, password, needPromotion })
    return res.send({
        data: createdUser
    })
}))

router.post('/login', errorHandler(async (req,res) => {
  const { username, password } = req.body
  const loginUser = await UserModel.login({ username, password })
  return res.send({
      data: loginUser
  })
}))

export default router