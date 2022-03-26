const express = require("express");
const cors = require("cors");
const {Client} = require("@elastic/elasticsearch");
const app = express();
const port = 4040;

// MIDDLEWARES
app.use(cors());

// CLIENT
const client = new Client({
    node: 'http://localhost:9200',
    maxRetries: 5,
    requestTimeout: 60000,
    sniffOnStart: true
})

// FUNCTIONS
async function run () {

  try{
    const result = await client.search({
      index: 'movies',
      query: {
        match_all: {}
      }
    })

    return result.hits.hits
  }

  catch(err){
    console.log(err)
  }

}

// ROUTERS
app.get("/apis" , async (req, res) => {
  const datas = await run()
  res.status(200).json(datas);
})

app.get('/', (req, res) => {
  res.send('Hello World from Home page!')
})

app.listen(port, () => {
  console.log(`Server listenning on ${port}`)
})