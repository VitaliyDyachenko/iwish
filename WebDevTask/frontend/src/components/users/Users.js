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
  
    deleteItem(id){
      const endpoint = 'http://localhost:8000/api/users/'+id;
      fetch(endpoint, {
        mode: 'Delete'
      })
    }

    render() {
      var { error, isLoaded, items } = this.state
      if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      }
      return <div className="container">
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
                            <input className="btn btn-danger rounded float-right btn-md" type="delete" value="delete" />
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
