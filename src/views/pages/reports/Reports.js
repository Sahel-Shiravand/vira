import React from "react";
import "./Reports.css";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

const Reports = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard>
            <CCardHeader> ثبت </CCardHeader>

            <p>شماره کارت </p>

            <select
              name="ddlFruits"
              id="ddlFruits"
              className="form-control selectpicker"
              data-show-subtext="true"
              data-live-search="true"
              class="form-select"
              aria-label="Disabled select example"
              data-size={3}
              style={{ width: 250 }}
            >
              <option selected>انتخاب کنید</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <CCardBody>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <label> گزارش ساعت </label>
                    <input className="inputs"></input>
                  </div>

                  <br />
                  <div>
                    <label> گزارش تاریخ </label>
                    <input className="inputs"></input>
                  </div>
                  <br />
                  <div>
                    <label>آدرس درگاه پرداخت </label>
                    <input className="inputs"></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label>گزارش درگاه غیر مجاز </label>
                    <div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="check2"
                          name="option2"
                          defaultValue="something"
                        />
                        <label className="form-check-label" htmlFor="check2">
                          {" "}
                          بله
                        </label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label"> خیر</label>
                      </div>

                      <div></div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <label> مبلغ </label>
                    <input className="inputs"></input>
                  </div>
                  <br />
                  <div>
                    <label> نوبت تکرار </label>
                    <input className="inputs"></input>
                  </div>
                </div>
              </div>
            </CCardBody>

            {/* </div>

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
                
               */}

            <CCardFooter>
              <button type="button" class="btn btn-primary pull-right">
                ثبت
              </button>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Reports;
