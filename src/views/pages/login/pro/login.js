import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from "axios";
import { SET_FORMVALUES, SUBMIT_FORM } from "../action/type";
import {AppHeader,AppFooter,AppSidebar}from 'src/components';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AlertVira from "src/views/pages/register/pro/Alert-Vira";
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        password: "",
        username:"",
      },
      successMassege: false,
      textMessage: " ",
      isShow: false,
    };
  }
  isShowChange = () => {
    this.setState((prev,props)=>({
      ...prev,
      isShow:true
    }));
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: SUBMIT_FORM,
    });
    const user = {
      mobile: this.state.data.mobile,
      password: this.state.data.password,
      username:this.state.data.username,
    };
    axios
      .post(`http://37.32.31.227:8248/api/v1/users/login`, user)
      .then((response) => {
        if (response.data["success"] == true) {
          this.setState({ textMessage: response.data["data"] });
          console.log("message1 = " + response.data["data"]);
          this.isShowChange()
        } else {
          this.setState({ textMessage: response.data["data"] });
          console.log("message1 = " + response.data["data"]);
          console.log(this.state.textMessage);
          this.isShowChange()
        }
      });
  };
  handleInputChange = (e) => {
    this.setState(
      {
        data: { ...this.state.data, [e.target.name]: e.target.value },
      },
      () =>
        this.props.dispatch({
          type: SET_FORMVALUES,
          payload: this.state.data,
        })
    );
  };
  render() {
    return (
      <section style={{ backgroundColor: "#eee" }}>
        <AppHeader/>
        <div className="container py-5 h-100">
          <div className="row d-flex h-100">
            <div className="col-xl-12">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6 d-flex gradient-custom-2">
                    <img
                      className="img"
                      src="assets/images/login.png"
                      alt="login.png"
                    />
                  </div>
                  <div className="col-lg-6 d-flex gradient-custom-2">
                    <div className="card-body p-sd-5 mx-4">
                      <div className="text-center">
                        <p className="mb-4 text-justify-content-center myP">
                          <strong />
                        </p>
                      </div>
                      <form onSubmit={this.submitForm}>
                        <div className="form-group justify-content-center col-xl-12 col-lg-10 col-md-12 col-sm-12 mx-auto text-center form p-4">
                          <div className="row">
                            <div className="input-group md-3 p-3">
                              <input
                                style={{ textAlign: "right" }}
                                className="form-control py-2 border-right-0 border"
                                type="text"
                                placeholder="نام کاربری خود را وارد کنید "
                                name="username"
                                id="username"
                                value={this.state.data.username}
                                onChange={this.handleInputChange}
                                title="username"
                                required
                              />
                            </div>
                          </div> 
                          <div className="row">
                            <div className="input-group md-3 p-3">
                              <input
                                style={{ textAlign: "right" }}
                                className="form-control py-2 border-right-0 border"
                                placeholder="رمز عبور خود را وارد کنید "
                                type="password"
                                name="password"
                                id="password"
                                value={this.state.data.password}
                                onChange={this.handleInputChange}
                                title="password"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <Button
                              className="btn btn-primary btn-lg my-3"
                              variant="primary"
                              onClick={this.submitForm}
                            >
                               ورود
                            </Button>
                            {this.state.isShow && <AlertVira
                            title={"ورود "}
                            body={this.state.textMessage}

                            />}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AppFooter/>
      </section>
      
    );
  }
}
const mapStateToProps = (state) => ({
  message: state.message,
});
export default connect(mapStateToProps)(login);
