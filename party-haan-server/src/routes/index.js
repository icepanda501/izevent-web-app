import express from 'express' 
import routerVersion1 from './v1'

const router = express.Router();

router.use('/v1', routerVersion1)

router.get('/', (req,res) => {
  return res.send({
    message: 'ok'
  })
})

export default router