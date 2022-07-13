import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
 import { startLogin } from "./actions";


class Login extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  login = e => {
    e.preventDefault();
    this.setState({ name: "", password: "" });
    this.props.login(this.state);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
    
<section className style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex h-100">
      <div className="col-xl-12">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6 d-flex gradient-custom-2">
              <img className="img" src="assets/images/pic.jpg" />
            </div>
            <div className="col-lg-6 d-flex gradient-custom-2">
              <div className="card-body p-sd-5 mx-4">
                <div className="text-center">
                <Link to="/dashboard">Dashboard</Link>
                  

                  <p className="mb-4 text-justify-content-center myP">
                    <strong>صفحه ورود </strong>
                  </p>
                </div>
                {/* <form>
                  <div className="form-group justify-content-center col-xl-12 col-lg-10 col-md-12 col-sm-12 mx-auto text-center form p-4">
                    <div className="row">
                      <div className="input-group md-3 p-3">
                        <input style={{textAlign: 'right'}} className="form-control py-2 border-right-0 border" type="text"  name="username" value={this.state.username}
                         onChange={this.handleChange}
                         placeholder="نام کاربری خود را وارد کنید " />
                        <span className="input-group-append">
                          <button className="btn1 border-left-0 border" type="button">
                            <i className="fa fa-user myI" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-group md-3 p-3">
                        <input style={{textAlign: 'right'}} className="form-control py-2 border-right-0 border" type="password"  name="password"
                         value={this.state.password}
                         onChange={this.handleChange}
                          placeholder="رمز عبور خود را وارد کنید " 
                        />
                        <span className="input-group-append">
                          <button className="btn1 border-left-0 border" type="button">
                            <i className="fa fa-lock myI" />
                          </button>
                        </span>
                      </div>
                    </div>
                    
                    <button onClick={this.login} type="submit" className="form-control btnLogin rounded submit" >
                      ورود
                    </button>
                  </div>
                </form> */}


<form className="loginForm">
        {this.props.loggedIn ? "Logged in" : ""}
        {this.props.loginProcessing && !this.props.loggedIn ? "Logging.." : ""}
        <Link to="./views/Dashboard/dashboard">Dashboard</Link>
        <div className="field p-2">
          <div className="customInput">
            
            <input
              className="inputfield"
              type="username"
              placeholder="نام کاربری"
              autoComplete="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field p-2">
          <div className="customInput">
           
            <input
              className="inputfield"
              type="password"
              placeholder="رمز عبور"
              autoComplete="current-password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field submitfield p-2">
          <input
            className="submit"
            type="submit"
            value="ورود"
            onClick={this.login}
          />
        </div>
      </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    loginProcessing: state.loginProcessing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(startLogin(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
