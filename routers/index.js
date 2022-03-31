const router = require("express").Router();
const {client} = require("../Config/connecToElastic");

// GET ALL MOVIES
router.get("/all" , async (req, res) => {

    try{
        const result = await client.search({
          index: 'movies',
          size : 100,
          from : 0,
          query: {
            match_all: {}
          }
        })
        const datas = await result.hits.hits

        res.status(200).json(datas);
      }
    
    catch(err){
        console.log(err)
    }
})

// GET MOVIES BY COMPANY
router.get("/companies" , async (req, res) => {

    const companyName = req.query.company
    
  console.log(companyName)

    try{
        const result = await client.search({
          index: 'movies',
          size : 100,
          from : 0,
          query: {
            match: {
                production_companies: companyName
            }
          }
        })
        const datas = await result.hits.hits

        res.status(200).json(datas);
      }
    
    catch(err){
        console.log(err)
    }
})


// GET MOVIES BY LANGUE
router.get("/langues" , async (req, res) => {

    // liste = ["english", "italiano", "français", "Deutsch", "Español", "广州话 / 廣州話", ""]
    const langName = req.query.name
    
    try{
        const result = await client.search({
          index: 'movies',
          size : 100,
          from : 0,
          query: {
            match: {
                spoken_languages : langName
            }
          }
        })
        const datas = await result.hits.hits

        res.status(200).json(datas);
      
    }
    
    catch(err){
        console.log(err)
    }
})


// GET MOVIES BY GENRES
router.get("/types" , async (req, res) => {

    // liste = ["Drama", "Comedy", "Horror", "Action", "Science Fiction", "Romance", "Documentary"]
    const typeName = req.query.type
    
    try{
        const result = await client.search({
          index: 'movies',
          size : 100,
          from : 0,
          query: {
            match: {
                genres : typeName
            }
          }
        })
        const datas = await result.hits.hits

        res.status(200).json(datas);
      
    }
    
    catch(err){
        console.log(err)
    }
})


// GET MOVIES BY YEAR
router.get("/release_date" , async (req, res) => {

    // Year <= 2017
    const dateTIME = req.query.year
    
    try{
        const result = await client.search({
          index: 'movies',
          size : 100,
          from : 0,
          query: {
            match: {
                release_date : dateTIME
            }
          }
        })
        const datas = await result.hits.hits

        res.status(200).json(datas);
      
    }
    
    catch(err){
        console.log(err)
    }
})


// GET MOVIES BY COUNTRY
router.get("/countries" , async (req, res) => {

    const countryName = req.query.name
    
    try{
        const result = await client.search({
          index: 'movies',
          size : 100,
          from : 0,
          query: {
            match: {
                production_countries : countryName
            }
          }
        })
        const datas = await result.hits.hits

        res.status(200).json(datas);
      
    }
    
    catch(err){
        console.log(err)
    }
})



// GET MOVIES BY POPULARITY
router.get("/popularity" , async (req, res) => {

    try{
        const result = await client.search({
          index: 'movies',
          size : 10,
          sort: [
            { popularity: "desc" }
          ]
        })
        const datas = await result.hits.hits

        res.status(200).json(datas);
      
    }
    
    catch(err){
        console.log(err)
    }
})



// GET MOVIES BY VOTE AVERAGE
router.get("/votes" , async (req, res) => {
    
    const orderBy = req.query.order
  
    try{
        const result = await client.search({
          index: 'movies',
          size : 10,
          sort: [
            { vote_average: orderBy }
          ]
        })
        const datas = await result.hits.hits

        res.status(200).json(datas);
      
    }
    
    catch(err){
        console.log(err)
    }
})


module.exports = router