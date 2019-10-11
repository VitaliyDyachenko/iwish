import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';

export class Form_add extends Component {

    constructor(props) {
      super(props);
      this.state = {
        email : '',
        name : '',
        bio : '',
        picture: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onDrop = this.onDrop.bind(this);
      this.sendDataToApi = this.sendDataToApi.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    onDrop(picture) {
      const copy = typeof(picture)
      this.setState({
          pictures: this.state.file.concat(copy),
      });
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
    sendDataToApi() {
      const endpoint = 'http://localhost:8000/api/users/?format=json';
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      },
      (error) => {
      alert(error);
    }
  )
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
             aria-label="Email" aria-describedby="basic-addon1" name="email" />
          </div>

          <div className="input-group mb-3">
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text rounded-left">User Bio</span>
            </div>
              <textarea className="form-control rounded-right" aria-label="With textarea" maxLength="500" name="bio"
              placeholder="Was an office worker. Now is the chosen one." onChange={this.handleInputChange} value={bio} />
            </div>
          </div>
          
          <ImageUploader
                withIcon={false}
                singleImage={true}
                label="Upload a profile picture"
                labelStyles={{
                  fontSize: 20,
                }}
                buttonText='Choose image'
                buttonStyles = {{
                    backgroundColor: "#ced4da",
                    color: "#495057",
                    fontSize: 17,
                }}
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png']}
                maxFileSize={5242880}
            />

          <input className="btn btn-secondary rounded" type="submit" value="Submit" />
        </form>
      );
    }
  }


export default Form_add
