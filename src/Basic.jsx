import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const AppRouter = () => (
    <Router>
        <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
        <Route path='/' exact component={Index}></Route>
        <Route path='/about/' component={About}></Route>
        <Route path='/users/' component={Users}></Route>
        </div>
    </Router>
)

export default AppRouter