import React from "react";
import "./Users.css";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

const Users = () => {

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>مشخصات کاربر</CCardHeader>

            <CCardBody>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <label>کد کاربر</label>
                    <input className="inputs"></input>
                  </div>

                  <br />
                  <div>
                    <label>نام کاربر</label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label>نام خانوادگی کاربر</label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label> شماره کارت بانکی</label>
                    <input className="inputs"></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label>رمز عبور</label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label>نوع کاربر </label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label> شماره تلفن</label>
                    <input className="inputs"></input>
                  </div>
                </div>
              </div>
            </CCardBody>
            <CCardFooter>	

<button type="button" class="btn btn-primary pull-right">ثبت</button>

            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
</>
  );
};

export default Users;
