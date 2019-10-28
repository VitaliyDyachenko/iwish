import React, { Component } from 'react'

export class Form_add extends Component {

    constructor(props) {
      super(props);
      this.state = {
        email : '',
        name : '',
        bio : '',
        errorOccurred: false 
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onDrop = this.onDrop.bind(this);
      this.sendDataToApi = this.sendDataToApi.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.componentDidCatch = this.componentDidCatch.bind(this);
      this.handleErrors = this.handleErrors.bind(this);
    }

    onDrop(picture) {
      const copy = typeof(picture)
      this.setState({
          pictures: this.state.file.concat(copy),
      });
    }

    componentDidCatch(error, info) {
      this.setState({ errorOccurred: true })

      logErrorToMyService(error, info)
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
    }

    handleErrors(response) {
      if (!response.ok) alert("Invalid input\nPlease try one more time");
      return response;
    }


    sendDataToApi() {
      var data = new FormData();
      data.append( "json", JSON.stringify( this.state ) );

      const endpoint = 'http://localhost:8000/api/users/?format=json'
      
      var a = fetch(endpoint, {
        method: 'POST',
        body:  JSON.stringify( this.state ),
        headers:
        {
          'Data-Type': "json",
          'Content-Type': 'application/json',
        }
      }
  ).then(this.handleErrors).then(response => console.log("ok") ).catch(error => console.log(error) ).then(window.location.reload())
    console.log(JSON.stringify(a))
}

    handleSubmit(event) {
      this.sendDataToApi();
      event.preventDefault();
    }

    render() {
      var { name, bio, email } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>

          <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text rounded-left" id="basic-addon1">Name</span>
              </div>
            <input type="text" value={name} onChange={this.handleInputChange}
             className="form-control rounded-right" placeholder="Thomas A. Anderson"
             name='name'
             aria-label="Name" aria-describedby="basic-addon1" required/>
          </div>


          <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text rounded-left" id="basic-addon1">email</span>
              </div>
            <input type="text" value={email} onChange={this.handleInputChange}
             className="form-control rounded-right" placeholder="neo@matrix.com"
             aria-label="Email" aria-describedby="basic-addon1" name="email" required/>
          </div>

          <div className="input-group mb-3">
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text rounded-left">User Bio</span>
            </div>
              <textarea className="form-control rounded-right" aria-label="With textarea" maxLength="500" name="bio"
              placeholder="Was an office worker. Now is the chosen one." onChange={this.handleInputChange} value={bio} required/>
            </div>
          </div>

          <input className="btn btn-secondary rounded" type="submit" value="Submit" />
        </form>
      );
    }
  }


export default Form_add
