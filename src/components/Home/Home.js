import React, {useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const URL = "https://apis.ccbp.in/ipl"

const iplLogoURL = "https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"

const Home = () => {

    const [iplData, setIplData] = useState([])
    



    const fetchData = async (apiURL) =>{
        try {
            const response = await fetch(apiURL)
            const {teams} = await response.json()
            setIplData(teams)
            console.log(iplData)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchData(URL)
    },[])


  return (
    <div className='background'>
      <div className='ipl-container'>
        <div>
            <img src={iplLogoURL} alt="ipl logo" />
        </div>
        <div>
            <h1 className='header'>IPL Dashboard</h1>
        </div>
      </div>
      <ul  className='unorder'>
        {
            iplData.map((eachTeam)=>{
                const {id, name , team_image_url} = eachTeam
                return(
                    <li className='list' key={id}>
                        <Link className='linkremove' to={`/team-match-details/${id}`}>
                            <div className='listcont'>
                                <div>
                                    <img src={team_image_url} />
                                </div>
                                <h1>{name}</h1>
                            </div>
                        </Link>
                    </li>
                )
            })
        }
      </ul>    
    </div>
  )
}

export default Home
