import express from 'express'
import PartyModel from '../../models/Party'
import errorHandler from '../../utils/errorHandler'

const router = express.Router();

router.get('/list', errorHandler(async (req, res) => {
  const partyList = await PartyModel.getAll()
  return res.send({
    data: partyList
  })
}))


router.put('/join/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const { id: userId } = req.user
  const party = await PartyModel.join({ userId, partyId })
  return res.send({
    data: party
  })
}))

router.put('/leave/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const { id: userId } = req.user
  const party = await PartyModel.leave({ userId, partyId })
  return res.send({
    data: party
  })
}))

router.get('/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const party = await PartyModel.get(partyId)
  return res.send({
    data: party
  })
}))

router.post('/', errorHandler(async (req, res) => {
  const { title, detail, image, maxJoiner, owner, joinerList } = req.body
  const party = await PartyModel.create({ title, detail, image, maxJoiner, owner, joinerList})
  return res.send({
    data: party
  })
}))

router.delete('/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const party = await PartyModel.delete(partyId)
  return res.send({
    data: party
  })
}))

export default router