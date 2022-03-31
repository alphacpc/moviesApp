import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import LeftSider from '../components/LeftSider'
import Navbar from '../components/Navbar'
import ReactFlag  from "react-country-flag"
import axios from "axios"

import Img from "./../assets/images/v1.jpg"

const Movie = styled.div`
    background: url(${(props) => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Home = () => {

  const [movies, setMovies] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [keyword, setKeyword] = useState("")

  const fethMovies = async () => {
    const result = await (await axios.get('/all')).data
    setMovies(result)
    console.log()
    setLoaded(true)
  }

  const getFlag = (el) => {
    if(el._source.original_language==='en'){
      return 'us'
    }else if (el._source.original_language==='da'){
      return 'dk'
    }
    else{
      return el
    }
  }


  const handleCheckedProduction = async (e) => {
      const valueLabel = e.target.parentNode.querySelector("label").innerText
      const result = await axios.get(`/companies?company=${valueLabel}`) 
      console.log(result.data)
  }

  
  const handleLangues = async (e) => {
    const langue = e.target.innerText
    const result = await axios.get(`/langues?name=${langue}`) 
    console.log(result.data)
  }
  

  const handleTypes = async (e) => {
    const typeName = e.target.innerText
    const result = await axios.get(`/types?name=${typeName}`) 
    console.log(result.data)
  }


  const handlePopular = async (e) => {
    const result = await axios.get(`/popularity`) 
    console.log(result.data)
  }

  const handleReted = async (e) => {
    const orderClassname = e.target.className
    const result = await axios.get(`/votes?order=${orderClassname}`) 
    console.log(result.data)
  }

  const handleReleaseYear = async (e) => {
    const releaseYear = e.target.innerText
    const result = await axios.get(`/release_date?year=${releaseYear}`) 
    console.log(result.data)
  }


  const handleCountries = async (e) => {
    const country = e.target.innerText
    const result = await axios.get(`/countries?name=${country}`) 
    console.log(result.data)
  }

  useEffect(()=>{
    fethMovies()
  },[loaded,keyword ])

  
  return (
    <>
      <header className="heading">
        <Navbar/>

        <div className="divIntro">
          <h1>Elastic Web App Movies With ReactJS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quia commodi voluptates quas facilis eveniet delectus sapiente doloribus, veritatis minus vel quibusdam rem, distinctio at dicta amet obcaecati suscipit similique.
          Dolores ea et quaerat cupiditate voluptatibus aperiam est. Libero recusandae magni eius dolorem, consectetur inventore possimus nisi? Eveniet qui maxime temporibus optio?</p>
          <input type="search" placeholder="Search ..." onChange={ (e) => setKeyword(e.target.value) }/>
        </div>

      </header>

      <main className="home-container">
        <aside className='home-aside'>
          <h2>Filters</h2>
          <LeftSider  handleChecked = { handleCheckedProduction }
                      handleLangues = { handleLangues }
                      handleType = { handleTypes } 
                      handlePopular = {handlePopular}
                      handleReted = {handleReted}
                      handleReleaseYear = {handleReleaseYear}
                      handleCountries={handleCountries}/>
        </aside>

        <section className='home-section'>

          {movies && (<div className="movies">
            {movies.filter((movie) => movie._source.title.toLowerCase().includes(keyword.toLowerCase())).map((el, index) => (
              <Movie key={index} className="divMovie" bg={Img}>
                <div className="overlay">
                  <h2>
                    <ReactFlag className={`countryFlagn`} svg countryCode={getFlag(el)} style={{ width: "25px", height: "25px", marginRight:'4px'}}/>
                    {el._source.title}
                  </h2>
                  <p className="movieParagraph">{el._source.overview}</p>
                </div>
              </Movie>
            ))}
          </div>)}

          {movies.length === 0  && (<div>Chargement en cours d'execution...</div>)}

        </section>

      </main>
    </>
  )
}

export default Home