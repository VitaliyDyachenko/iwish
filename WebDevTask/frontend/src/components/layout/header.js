import React, { Component } from 'react'

export class header extends Component {
    render() {
        return (
                <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Main Page</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Users</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                </ul>
            
        )
    }
}

export default header
