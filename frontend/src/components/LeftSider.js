import React from 'react'
import "./../assets/style/LeftSide.scss"

const LeftSider = () => {
  return (
    <div className="divFiltersList">


        <div className="divGroupFilter compagny">
            <h3>Production company</h3>
            <ul>
                <li>
                    <input type="checkbox" id="WB"/>
                    <label for="WB">Warner Bros</label>
                </li>
                <li>
                    <input type="checkbox" id="DN"/>
                    <label for="DN">Disney</label>
                </li>
                <li>
                    <input type="checkbox" id="MGM"/>
                    <label for="MGM">Metro-Goldwyn-Mayer</label>
                </li>
                <li>
                    <input type="checkbox" id="LE"/>
                    <label for="LE">Legendary</label>
                </li>
                <li>
                    <input type="checkbox" id="CO"/>
                    <label for="CO">Columbia</label>
                </li>
                <li>
                    <input type="checkbox" id="UN"/>
                    <label for="UN">Universal</label>
                </li>
                <li>
                    <input type="checkbox" id="MS"/>
                    <label for="MS">Marvel Studios</label>
                </li>
            </ul>
        </div>
        
        <div className="divGroupFilter langues">
            <h3>Langue</h3>
            <div>
                <button>English</button>
                <button>Italian</button>
                <button>French</button>
                <button>Chinese</button>
                <button>German</button>
                <button>Spanish</button>
            </div>
        </div>

        <div className="divGroupFilter type">
            <h3>Type</h3>
            <div>
                <button>Drama</button>
                <button>Comedy</button>
                <button>Horror</button>
                <button>Action</button>
                <button>Science Fiction</button>
                <button>Romance</button>
                <button>Documentary</button>
            </div>
        </div>

        <div className="divGroupFilter popular">
            <h3>Popularity</h3>
            <ul>
                <li>
                    <input type="radio" value="MP" name="popular" id="MP"/>
                    <label for="MP">the most popular</label>
                </li>
                <li>
                    <input type="radio" value="TR" name="popular" id="TR"/>
                    <label for="TR">top rated</label>
                </li>
                <li>
                    <input type="radio" value="LR" name="popular" id="LR"/>
                    <label for="LR">the lowest rated</label>
                </li>
            </ul>
        </div>


        <div className="divGroupFilter year">
            <h3>Year</h3>
            <div>
                <button>2017</button>
                <button>2016</button>
                <button>2015</button>
                <button>2014</button>
                <button>2013</button>
            </div>
        </div>
        
        <div className="divGroupFilter county">
            <h3>Producer country</h3>
            <div>
                <button>Australia</button>
                <button>United States of America</button>
                <button>Spain</button>
                <button>France</button>
                <button>China</button>
                <button>Germany</button>
            </div>
        </div>

        {/* <div className="by-voteCount">
            <div>
                <input type="checkbox" id="more"/>
                <label for="more">more vote</label>
            </div>
            <div>
                <input type="checkbox" id="less"/>
                <label for="less">less vote</label>
            </div>
        </div> */}

    </div>
  )
}

export default LeftSider