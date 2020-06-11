import express from 'express'
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json())
app.get('/', function (req, res) {
  const testAlfred = { 
      name: 'testAlfred'
  }
  const result = { 
      alfredResult: isObject(testAlfred),
      message: 'alfred is working ok'
  }
  res.send(result)
})

app.get('/facebook/webhook', (req,res)=> {
    console.log(req.query)
    const hub = req.query
    return res.send(hub['hub.challenge'])
})


app.post('/facebook/webhook', (req,res)=> {
    const body = req.body
    console.log(req.query)
    console.log(JSON.stringify(body))
    body.entry.forEach(item => {
        const { messaging } = item
        console.log(messaging)
    });
    return res.send({
        message: "recive already"
    })
})

app.listen(8888)