import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://ancient-waters-85911.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <article>
        <main>
          <div>
            <form>
              <h1>Sign In</h1>
              <div>
                <label htmlFor="email-address">Email </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="Type your email"
                  onChange={this.onEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Type your password"
                  onChange={this.onPasswordChange}
                  required
                />
              </div>
            </form>
            <div>
              <input
                onClick={this.onSubmitSignIn}
                type="submit"
                value="Sign in"
              />
            </div>
            <div>
              <p onClick={() => onRouteChange("register")}>Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
