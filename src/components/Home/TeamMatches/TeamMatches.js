import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './TeamMatches.css'
import { TailSpin } from 'react-loader-spinner';

const URL = "https://apis.ccbp.in/ipl/"

const TeamMatches = () => {

    const [teamData, setTeamData] = useState()
    const {id} = useParams()

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch(`${URL}${id}`)
                const data = await response.json()
                setTeamData(data)
                console.log(teamData)
            }catch(error){

            }
        }
        fetchData()
    },[id])

    if (!teamData) {
        return (
            <div className="loader">
                <TailSpin
                    color="#00BFFF"
                    height={80}
                    width={80}
                />
            </div>
        );
    }

    const { team_banner_url, latest_match_details, recent_matches } = teamData;

    const teamColors = {
        'KKR': '#5755a7', 
        'MI': '#13418b', 
        'RCB': '#d91c1f',
        'KXP':'#a4261d',
        'CSK':'#f7db00',
        'RR':'#da237b',
        'SH':'#f26d22',
        'DC':'#4f5db0',
    };

    const currentTeamColor = teamColors[id]

  return (
    <div className='maincont' style={{ backgroundColor: currentTeamColor }}>
      <div>
        <img className='image' src={team_banner_url} />
      </div>
      <h1 className='heading'>latest matches</h1>
      <div className='flexing'>
        <div>
            <h1>{latest_match_details.competing_team}</h1>
            <h4>{latest_match_details.venue}</h4>
            <h4>{latest_match_details.result}</h4>
        </div>
        <div>
            <img className='teamlogo' src={latest_match_details.competing_team_logo} />
        </div>
        <div>
            <h1>First Innings</h1>
            <h3>{latest_match_details.first_innings}</h3>
            <h2>Second Innings</h2>
            <h3>{latest_match_details.second_innings}</h3>
            <h2>Man of The Match</h2>
            <h3>{latest_match_details.man_of_the_match}</h3>
            <h2>Umpires</h2>
            <h3>{latest_match_details.umpires}</h3>
        </div>
      </div>
      <ul className='unorder-list'>
        {recent_matches.map((eachMatch)=>{
            const {id,competing_team,competing_team_logo,match_status,result} = eachMatch
            const statusClassName = match_status === 'Won' ? 'won' : 'lost';
            return(
                <li>
                    <div>
                        <img src={competing_team_logo} />
                    </div>
                    <h1 className='heading'>{competing_team}</h1>
                    <h3>{result}</h3>
                    <h1 className={`match_status ${statusClassName}`} >{match_status}</h1>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default TeamMatches

