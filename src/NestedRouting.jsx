import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

function Home(){
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

function About(){
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}

function Topic({match}){
   return (
       <div>
           <h3>{match.params.topicId}</h3>
       </div>
   )
}

function Topics({match}){
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendring with react</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-vs-state`}>Props vs state</Link>
                </li>
                
            </ul>
            <Route path={`${match.url}/:topicId`} component={Topic}/>
            <Route path={match.path} exact render={()=> <h3>Please select a topic</h3>}/>
        </div>
    )
}

function App() {
    return (

        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to = '/topics'>Topics</Link>
                    </li>
                </ul>

                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/topics' component={Topics}/>

            </div>
        </Router>



    )
}

export default App