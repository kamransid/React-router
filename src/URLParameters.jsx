import React from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Redirect, NavLink } from 'react-router-dom'
/**
 * 
 * class based component not working with route
 * 
 * 
 */

function Child({ match }) {
    return (
        <div>
            <h3>
                ID: {match.params.id}
            </h3>
        </div>
    )
}

function RegExComponent({ match }) {
    return (
        <div>

        </div>
    )
}

function URLParameters(){
    return (
        <Router>
            <div>
                <h2>
                    Accounts
                </h2>
                <ul>
                    <li>
                        <Link to='/netflix'>Netflix</Link>
                    </li>
                    <li>
                        <Link to='/zillow-group'>Zillow Group</Link>
                    </li>
                    <li>
                        <Link to='/yahoo'>Yahoo</Link>
                    </li>
                    <li>
                        <Link to='/modus-create'>Modus Create</Link>
                    </li>
                </ul>
                <Route path='/:id' component={Child}>
                </Route>
                <Route path='/order/:direction(asc|desc)'
                    component={RegExComponent}
                >
                </Route>
            </div>
        </Router>
    )
}


// class URLParameters extends React.Component {
//     constructor(props, context) {
//         super(props, context)
//         this.state = {
//             display: true
//         }

//     }
//     render() {
//         const style = {
//             marginLeft: '5px',
//             marginTop: '5px'
//         }
//         return (
//             <Router>
//                 <div>
//                     <h2>
//                         Accounts
//                     </h2>
//                     <ul>
//                         <li>
//                             <Link to='/netflix'>Netflix</Link>
//                         </li>
//                         <li>
//                             <Link to='/zillow-group'>Zillow Group</Link>
//                         </li>
//                         <li>
//                             <Link to='/yahoo'>Yahoo</Link>
//                         </li>
//                         <li>
//                             <Link to='/modus-create'>Modus Create</Link>
//                         </li>
//                     </ul>
//                     <Route path='/:id' Component={Child}>
//                     </Route>
//                     <Route path='/order/:direction(asc|desc)'
//                         Component={RegExComponent}
//                     >
//                     </Route>
//                 </div>
//             </Router>
//         )
//     }
// }

export default URLParameters