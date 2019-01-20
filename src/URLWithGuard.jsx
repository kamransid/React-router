import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 1000)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 1000)
    }
}

/**
 * 
 * TypeError: Cannot read property 'displayName' of undefined
 * 
 * solution:- Define AuthButtonClass first then use like in next commit
 * 
 * 
 *  */

const AuthButton = withRouter(AuthButtonClass)

class AuthButtonClass extends React.Component {
    render() {
        if (fakeAuth.isAuthenticated) {
            return (
                <p>
                    Welcome!{' '}
                    <button onClick={() => {
                        fakeAuth.signout(() => { this.props.history.push('/') })
                    }}></button>
                </p>
            )
        }
        else {
            return (
                <h2>Sorry, You are not loged in</h2>
            )
        }
    }
}

class Public extends React.Component{
    render(){
       return(
           <div></div>
       )
    }
}

class Login extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}

class PrivateRoute extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}


class Protected extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}


class Authentication extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            visible: true
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <AuthButton />
                    <ul>
                        <li>
                            <Link to='/public'>Public Page</Link>
                        </li>
                        <li>
                            <Link to='/protected'>Protected Page</Link>
                        </li>
                    </ul>
                    <Route path='/public' component={Public}>
                    </Route>
                    <Route path='/login' component={Login}></Route>
                    <PrivateRoute path='/protected' component={Protected}></PrivateRoute>
                </div>
            </Router>
        )
    }

}

export default Authentication
