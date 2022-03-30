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

  const fethMovies = async () => {
    const result = await (await axios.get('/all')).data
    setMovies(result)
    console.log()
    setLoaded(true)
  }

  // const getFlag = (el)=> el._source.original_language==='en' ?  'us' : el._source.original_language

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

  


  useEffect(()=>{
    fethMovies()
  },[loaded])


  console.log(movies[3]?._source)
  

  return (
    <>
      <header className="heading">
        <Navbar/>

        <div className="divIntro">
          <h1>Elastic Web App Movies With ReactJS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quia commodi voluptates quas facilis eveniet delectus sapiente doloribus, veritatis minus vel quibusdam rem, distinctio at dicta amet obcaecati suscipit similique.
          Dolores ea et quaerat cupiditate voluptatibus aperiam est. Libero recusandae magni eius dolorem, consectetur inventore possimus nisi? Eveniet qui maxime temporibus optio?</p>
          <input type="search" placeholder="Search ..."/>
        </div>

      </header>

      <main className="home-container">
        <aside className='home-aside'>
          <h2>Filters</h2>
          <LeftSider/>
        </aside>

        <section className='home-section'>

          { movies && (<div className="movies">
            {movies.map((el, index) => (
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