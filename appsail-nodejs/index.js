import axios from 'axios'
import express from 'express'

const app = express()
const port = process.env.X_ZOHO_CATALYST_LIST || 9000

app.get('/', async (req, res) => {
  const options = {
    headers : {
      'Authorization': `Bearer ${ process.env.OPENAI_API_KEY }`,
      'Content-Type': 'application/json',
      'OpenAI-Beta': 'assistants=v2'
    }
  }

  axios.get('https://api.openai.com/v1/assistants', options)
    .then(response => {
      console.log(response);
      res.status(200).json(response)
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

app.get('/v1')

app.listen(port, () => {
  console.log(`Example app listening on port ${ port }`)
  console.log(`http://localhost:${ port }/`)
})
