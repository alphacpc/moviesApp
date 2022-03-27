import React from 'react'
import LeftSider from '../components/LeftSider'
import Navbar from '../components/Navbar'
import SingleArticle from '../components/SingleArticle'



const Home = () => {

  const tab = [1,2,3,4,5,6,7,8,9,10]


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
          <div className="movies">
            {tab.map((el, index) => (
              <SingleArticle ind={index}/>
            ))}
          </div>
        </section>

      </main>
    </>
  )
}

export default Home