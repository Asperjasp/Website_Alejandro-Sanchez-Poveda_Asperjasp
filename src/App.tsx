// Seting up Router
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
// There are from a reat library they are treated as component
// Hash Router is the componoent to wrap the entire app in te router enviroment
// Routes is the one that ocntians the potential routes
// Route is the one that defines the route

// Importing the pages  note it is done a s usual export not default export

import { Layout } from './Layout'
import { Home } from './Pages/Home'
import { Biography } from './Pages/Biography'
import {Portfolio} from './Pages/Portfolio'
import { Publications } from './Pages/Publications'

// Importing the css
import './App.css'
import { Links } from './Pages/Links'

function App() {
  // Beginning of the Personal_Website
  

  return (
    <Router>
        <Routes>
            <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/Biography' element={<Biography/>}/>
            <Route path='/Portfolio' element={<Portfolio/>}/>
            <Route path='/Publications' element={<Publications/>}/>
            <Route path='/Contact-Links' element={<Links/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default App
