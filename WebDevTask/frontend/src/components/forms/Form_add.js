import React, { Component } from 'react'
import ImageUploader from 'react-images-upload';

export class Form_add extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name : '',
        email : '',
        created_at : '',
        bio : '',
        likes_design : ''
      };
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeBio = this.handleChangeBio.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
    }

    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeBio(event) {
      this.setState({bio: event.target.value});
    }
    handleChangeEmail(event) {
      this.setState({email: event.target.value});
    }

    handleSubmit(event) {
      alert(this.state.name + "\n" + this.state.bio + "\n" + this.state.email);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>

          <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text rounded-left" id="basic-addon1">Name</span>
              </div>
            <input type="text" value={this.state.name} onChange={this.handleChangeName}
             className="form-control rounded-right" placeholder="Thomas A. Anderson"
             aria-label="Name" aria-describedby="basic-addon1" required/>
          </div>


          <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text rounded-left" id="basic-addon1">email</span>
              </div>
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail}
             className="form-control rounded-right" placeholder="neo@matrix.com"
             aria-label="Email" aria-describedby="basic-addon1" />
          </div>


          <div className="input-group mb-3">
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text rounded-left">User Bio</span>
            </div>
              <textarea className="form-control rounded-right" aria-label="With textarea" maxLength="500"
              placeholder="Was an office worker. Now is the chosen one." onChange={this.handleChangeBio} value={this.state.bio} />
            </div>
          </div>
          
          <ImageUploader
                withIcon={false}
                singleImage={true}
                label="Upload a profile picture"
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />

          <input className="btn btn-secondary rounded" type="submit" value="Submit" />
        </form>
      );
    }
  }


export default Form_add
