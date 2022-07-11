import React, { Component } from "react";
import ReactFacebookLogin from "react-facebook-login";
class Facebook extends Component {
  state = {
    isLoggedIN: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  reseponseFacebook = (response) => {
    // console.log(response);

    this.setState({
      isLoggedIN: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIN) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <ReactFacebookLogin
          appId="370173075054673"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.reseponseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook;
