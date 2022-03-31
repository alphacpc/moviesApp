import React from 'react'
import "./../assets/style/LeftSide.scss"

const LeftSider = ({handleChecked, handleLangues, handleType, handlePopular,handleReted, handleReleaseYear, handleCountries}) => {



    return (
        <div className="divFiltersList">


            <div className="divGroupFilter compagny">
                <h3>Production company</h3>
                <ul>
                    <li>
                        <input type="radio" onClick={(e) => handleChecked(e)} name="inputProduction" className="inputProduction" id="WB"/>
                        <label htmlFor="WB">Warner Bros</label>
                    </li>
                    <li>
                        <input type="radio" onClick={(e) => handleChecked(e)} name="inputProduction" className="inputProduction" id="DN"/>
                        <label htmlFor="DN">Disney</label>
                    </li>
                    <li>
                        <input type="radio" onClick={(e) => handleChecked(e)} name="inputProduction" className="inputProduction" id="MGM"/>
                        <label htmlFor="MGM">Metro-Goldwyn-Mayer</label>
                    </li>
                    <li>
                        <input type="radio" onClick={(e) => handleChecked(e)} name="inputProduction" className="inputProduction" id="LE"/>
                        <label htmlFor="LE">Legendary</label>
                    </li>
                    <li>
                        <input type="radio" onClick={(e) => handleChecked(e)} name="inputProduction" className="inputProduction" id="CO"/>
                        <label htmlFor="CO">Columbia</label>
                    </li>
                    <li>
                        <input type="radio" onClick={(e) => handleChecked(e)} name="inputProduction" className="inputProduction" id="UN"/>
                        <label htmlFor="UN">Universal</label>
                    </li>
                    <li>
                        <input type="radio" onClick={(e) => handleChecked(e)} name="inputProduction" className="inputProduction" id="MS"/>
                        <label htmlFor="MS">Marvel Studios</label>
                    </li>
                </ul>
            </div>
            
            <div className="divGroupFilter langues">
                <h3>Langue</h3>
                <div>
                    <button onClick={(e) => handleLangues(e)}>English</button>
                    <button onClick={(e) => handleLangues(e)}>Italiano</button>
                    <button onClick={(e) => handleLangues(e)}>Français</button>
                    <button onClick={(e) => handleLangues(e)}>Deutsch</button>
                    <button onClick={(e) => handleLangues(e)}>Español</button>
                    <button onClick={(e) => handleLangues(e)}>广州话 / 廣州話</button>
                </div>
            </div>

            <div className="divGroupFilter type">
                <h3>Type</h3>
                <div>
                    <button onClick={(e) => handleType(e)}>Drama</button>
                    <button onClick={(e) => handleType(e)}>Comedy</button>
                    <button onClick={(e) => handleType(e)}>Horror</button>
                    <button onClick={(e) => handleType(e)}>Action</button>
                    <button onClick={(e) => handleType(e)}>Science Fiction</button>
                    <button onClick={(e) => handleType(e)}>Romance</button>
                    <button onClick={(e) => handleType(e)}>Documentary</button>
                </div>
            </div>

            <div className="divGroupFilter popular">
                <h3>Popularity</h3>
                <ul>
                    <li>
                        <input type="radio" value="MP" onClick={(e) => handlePopular(e)} name="popular" id="MP"/>
                        <label htmlFor="MP">the most popular</label>
                    </li>
                    <li>
                        <input type="radio" value="TR" onClick={(e) => handleReted(e)} className="desc" name="popular" id="TR"/>
                        <label htmlFor="TR">top rated</label>
                    </li>
                    <li>
                        <input type="radio" value="LR" onClick={(e) => handleReted(e)} className="asc" name="popular" id="LR"/>
                        <label htmlFor="LR">the lowest rated</label>
                    </li>
                </ul>
            </div>


            <div className="divGroupFilter year">
                <h3>Year</h3>
                <div>
                    <button onClick={(e) => handleReleaseYear(e)}>2017</button>
                    <button onClick={(e) => handleReleaseYear(e)}>2016</button>
                    <button onClick={(e) => handleReleaseYear(e)}>2015</button>
                    <button onClick={(e) => handleReleaseYear(e)}>2014</button>
                    <button onClick={(e) => handleReleaseYear(e)}>2013</button>
                </div>
            </div>
            
            <div className="divGroupFilter county">
                <h3>Producer country</h3>
                <div>
                    <button onClick={(e) => handleCountries(e)}>Australia</button>
                    <button onClick={(e) => handleCountries(e)}>United States of America</button>
                    <button onClick={(e) => handleCountries(e)}>Spain</button>
                    <button onClick={(e) => handleCountries(e)}>France</button>
                    <button onClick={(e) => handleCountries(e)}>China</button>
                    <button onClick={(e) => handleCountries(e)}>Germany</button>
                </div>
            </div>

        </div>
    )
}

export default LeftSider