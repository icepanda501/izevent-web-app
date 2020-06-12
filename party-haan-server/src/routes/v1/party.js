import express from 'express'
import PartyModel from '../../models/Party'
import { Firestore } from '../../database'
import firebase from '../../lib/firebase'
import errorHandler from '../../utils/errorHandler'
import { PARTY_COLLECTION } from '../../enums/collectionNames'

const databaseEngine = new Firestore({ firebase })
const partyModel = new PartyModel({ databaseEngine, collectionName : PARTY_COLLECTION })
const router = express.Router();

router.get('/list', errorHandler(async (req, res) => {
  const partyList = await partyModel.getAll()
  return res.send({
    data: partyList
  })
}))


router.put('/join/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const { id: userId } = req.user
  const party = await partyModel.join({ userId, partyId })
  return res.send({
    data: party
  })
}))

router.put('/leave/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const { id: userId } = req.user
  const party = await partyModel.leave({ userId, partyId })
  return res.send({
    data: party
  })
}))

router.get('/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const party = await partyModel.get(partyId)
  return res.send({
    data: party
  })
}))

router.post('/', errorHandler(async (req, res) => {
  const { title, detail, image, maxJoiner, owner, joinerList } = req.body
  const party = await partyModel.create({ title, detail, image, maxJoiner, owner, joinerList})
  return res.send({
    data: party
  })
}))

router.delete('/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const party = await partyModel.delete(partyId)
  return res.send({
    data: party
  })
}))

export default router