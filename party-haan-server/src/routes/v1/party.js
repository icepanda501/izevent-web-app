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


router.post('/join/:partyId', errorHandler(async (req, res) => {
  const { partyId } = req.params
  const { id: userId } = req.user
  const partyList = await PartyModel.join({ userId, partyId })
  return res.send({
    data: partyList
  })
}))

router.get('/:id', errorHandler(async (req, res) => {
  const { id } = req.params
  const partyList = await PartyModel.get(id)
  return res.send({
    data: partyList
  })
}))

router.post('/', errorHandler(async (req, res) => {
  const { title, detail, image, maxJoiner } = req.body
  const party = await PartyModel.create({ title, detail, image, maxJoiner })
  return res.send({
    data: party
  })
}))

export default router