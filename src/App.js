import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './components/Home/Home'
import TeamMatches from './components/Home/TeamMatches/TeamMatches'
import NotFound from './components/Home/NotFound/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/team-match-details/:id' element={<TeamMatches/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
