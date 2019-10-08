import React, { Component } from 'react'

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount()
  {
      const endpoint = 'http://localhost:8000/api/users/?format=json';
      fetch(endpoint)
      .then(res => res.json())
      .then(
          (result) => {
            this.setState({
                isLoaded: true,
                items: result,
            });
          },
          (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    render() {
      var items = this.state.items
      return  <div className="container">
                <ul>
                  {items.map(item =>
                      <li key={item.email}>
                        <p className="h2">
                            {item.name}
                        </p>
                        <p className="h5">
                        {item.email}
                        </p>
                        <p className="h4">
                            {item.bio}
                        </p>
                        <p className="h6">
                            {"Created at " + item.created_at}
                        </p>
                      </li>
                      )}
                </ul>
              </div>
    }
}

export default Users
