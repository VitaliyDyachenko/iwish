import React, { Component } from 'react'

export class Users extends Component {
    componentDidMount() {
        fetch('localhost:8000/api/users/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ users: data })
        })
        .catch(console.log)
      }

    render() {
        return (
            <div>
                {this.context.users ? 0: 1}
            </div>
          )
    }
}

export default Users
