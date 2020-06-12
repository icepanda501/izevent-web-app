import express from 'express'
import UserModel from '../../models/User'

const router = express.Router();

router.get('/list', async (req,res) => {
    const partyList = await UserModel.getAll()
  return res.send({
    data: partyList
  })
})

router.post('/', async (req,res) => {
    const { username, email, password, needPromotion} = req.body
    const createdUser = await UserModel.create({ username, email, password, needPromotion })
    return res.send({
        data: createdUser
    })
})

router.post('/login', async (req,res) => {
  const { username, password } = req.body
  const loginUser = await UserModel.login({ username, password })
  return res.send({
      data: loginUser
  })
})

export default router