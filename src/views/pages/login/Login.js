import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import React, { Component } from "react";
import { connect } from "react-redux";
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: "",
        password: ""
      }
    };
  }
  submitForm = e => {
    e.preventDefault();
    this.props.dispatch({
      type: "SUBMIT_FORM"
    });
  };
  handleInputChange = e =>
    this.setState(
      {
        values: { ...this.state.values, [e.target.name]: e.target.value }
      },
      () =>
        this.props.dispatch({
          type: "SET_FORMVALUES",
          payload: this.state.values
        })
    );
  render() {
    return (


<div className="col-md-12">
<div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={this.submitForm}>
                    <h1>صفحه ورود</h1>
                    {/* <p className="text-medium-emphasis">Sign In to your account</p> */}
                    <CInputGroup className="mb-3 p-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      type="username"
                                name="username"
                                id="username"
                                value={this.state.values.username}
                                onChange={this.handleInputChange}
                                title="Username"
                                required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4 p-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                                  name="password"
                                  id="password"
                                  value={this.state.values.password}
                                  onChange={this.handleInputChange}
                                  title="password"
                                  required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                      <div>
                    
                    <CButton type="submit">ورود</CButton>
         
           <div className="message">
             {this.props.message.length > 0 && this.props.message}
          </div>
                    </div>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                 
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
</div>










    //   <div>
    //     <form onSubmit={this.submitForm}>
    //       <div className="input-group">
    //         <label htmlFor="username">نام کاربری</label>
    //         <input
    //           type="username"
    //           name="username"
    //           id="username"
    //           value={this.state.values.username}
    //           onChange={this.handleInputChange}
    //           title="Username"
    //           required
    //         />
    //       </div>
    //       <div className="input-group">
    //         <label htmlFor="password">کلمه عبور</label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           value={this.state.values.password}
    //           onChange={this.handleInputChange}
    //           title="password"
    //           required
    //         />
    //       </div>
    //       <button type="submit">ورود</button>
    //     </form>
    //     <div className="message">
    //       {this.props.message.length > 0 && this.props.message}
    //     </div>
    //   </div>
    );
  }
}
const mapStateToProps = state => ({
  message: state.message
});
export default connect(mapStateToProps)(SignInForm);