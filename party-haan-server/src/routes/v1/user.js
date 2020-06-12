import express from 'express'
import firebase from '../../lib/firebase'
import { Firestore } from '../../database'
import UserModel from '../../models/User'
import errorHandler from '../../utils/errorHandler'
import { USER_COLLECTION } from '../../enums/collectionNames'

const databaseEngine = new Firestore({ firebase })
const userModel = new UserModel({ databaseEngine, collectionName : USER_COLLECTION })

const router = express.Router();

router.get('/list', errorHandler(async (req,res) => {
    const partyList = await userModel.getAll()
  return res.send({
    data: partyList
  })
}))

router.post('/', errorHandler(async (req,res) => {
    const { username, email, password, needPromotion} = req.body
    const createdUser = await userModel.create({ username, email, password, needPromotion })
    return res.send({
        data: createdUser
    })
}))

router.put('/', errorHandler(async (req,res) => {
  const { username, email, password, needPromotion} = req.body
  const createdUser = await userModel.update({ username, email, password, needPromotion })
  return res.send({
      data: createdUser
  })
}))

router.post('/login', errorHandler(async (req,res) => {
  const { username, password } = req.body
  const loginUser = await userModel.login({ username, password })
  return res.send({
      data: loginUser
  })
}))

export default router