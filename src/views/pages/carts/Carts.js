import React from "react";
import "./Carts.css";
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
            <CCardHeader>مشخصات کارت بانکی  </CCardHeader>

            <CCardBody>
              <div className="row">
                <div className="col-md-6">
                <div>
                    <label>شماره کارت  </label>
                    <input className="inputs"></input>
                  </div>

                  <br />
                  <div>
                    <label>نام صاحب حساب  </label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label>نام بانک  </label>
                    <input className="inputs"></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label>کد کاربر</label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label>کد وب سایت</label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label>تاریخ ثبت کارت</label>
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
