import React, { Component } from 'react'

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.deleteItem = this.deleteItem.bind(this);
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
  
    deleteItem(id, name){
      const endpoint = 'http://localhost:8000/api/users/'+id;
      fetch(endpoint, {
        method: 'delete'
      }).then(alert("User " + name + " has been deleted")).then(window.location.reload());
    }

    render() {
      var { error, isLoaded, items } = this.state
      if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      }
      return <div className="container">
                <ul>
                
                  {items.reverse().map(item =>
                      <li key={item.email} className="pad">
                        <p className="h1">
                            {item.name}
                        </p>
                        <p className="h5">
                        {item.email}
                        </p>
                        <p className="h4">
                            {item.bio}
                            <button className="btn btn-danger btn-lg rounded float-right"
                            onClick={this.deleteItem.bind(this, item.id, item.name)}
                            onChange={this.deleteItem.bind(this, item.id)}>
                              delete
                              </button>
                        </p>
                        <p className="h6">
                            {"Created at " + item.created_at}
                        </p>
                        <hr style={{width: '100%', color: 'black', height: '1px', backgroundColor:'grey'}} />
                      </li>
                      )}
                </ul>
                
              </div>
    }
}

export default Users
