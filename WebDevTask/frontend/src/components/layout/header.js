import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
                <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Main Page</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                </ul>
            
        )
    }
}

export default header
