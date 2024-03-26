/** @format */

import React from "react";

import "../styles/FacebookLoginButton.css";

class FacebookLoginButton extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "681439017515679",
        cookie: true,
        xfbml: true,
        version: "v19.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=YOUR_APP_ID&autoLogAppEvents=1";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  handleLogin = () => {
    window.FB.login(function (response) {
      if (response.authResponse) {
        console.log("Успешная авторизация через Facebook!");
        // Дополнительные действия после успешной авторизации
      } else {
        console.log("Авторизация через Facebook отменена.");
      }
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLogin} className="fb-login-button">
          Login Facebook
        </button>
      </div>
    );
  }
}

export default FacebookLoginButton;
