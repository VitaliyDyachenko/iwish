import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/header';
import Dashboard from './users/Dashboard';



class App extends Component {
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
          fetch('http://localhost:8000/api/users/?format=json')
          .then(res => res.json())
          .then(
              (result) => {
                this.setState({
                    isLoaded: true,
                    items: result,
            })}).catch()
        }
    render()
    {
        var items = this.state.items
        console.log("Here goes nothing")
        console.log(items)
        console.log(items)
        return(
        <Fragment>
            <Header />
            <div className="container">
                <ul>
                    {items.map(item =>
                        <Fragment key={item.name}>
                        <p className="h2">
                            {item.name}
                        </p>
                        <p className="h5">
                        {item.email}
                        </p>
                        <p className="h4">
                            {item.bio}
                        </p>
                        </Fragment>
                        )}
                </ul>
            </div>
        </Fragment>
        )
    }
}

ReactDOM.render( <App /> , document.getElementById('app'));