import React from "react";
import "./Links.css";
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

const Links = () => {


  const tableExample = [];

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>ثبت لینک ها</CCardHeader>

            <CCardBody>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <label>نام سایت</label>
                    <input className="inputs"></input>
                  </div>

                  <br />
                  <div>
                    <label>آدرس سایت</label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label>سطح سایت</label>
                    <input className="inputs"></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label>درجه تکرار 1</label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label>درجه تکرار 2</label>
                    <input className="inputs"></input>
                  </div>
                  <br/>
                  <div>
                    <label> درجه تکرار بیشتر از 2</label>
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
  



<CRow>
  <CCol xs>
    <CCard className="mb-4">
      <CCardHeader>ثبت لینک ها</CCardHeader>
      <CCardBody>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell className="text-center">
              </CTableHeaderCell>
              <CTableHeaderCell>نام سایت</CTableHeaderCell>
              <CTableHeaderCell className="text-center">آدرس سایت</CTableHeaderCell>
              <CTableHeaderCell>سطح سایت</CTableHeaderCell>
              <CTableHeaderCell className="text-center"> درجه تکرار 1</CTableHeaderCell>
              <CTableHeaderCell>درجه تکرار 2</CTableHeaderCell>
              <CTableHeaderCell>  درجه تکرار بیشتر از 2</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {tableExample.map((item, index) => (
              <CTableRow v-for="item in tableItems" key={index}>
                <CTableDataCell className="text-center">
                  <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                </CTableDataCell>
                <CTableDataCell>
                  <div>{item.user.name}</div>
                  <div className="small text-medium-emphasis">
                    <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                    {item.user.registered}
                  </div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="clearfix">
                    <div className="float-start">
                      <strong>{item.usage.value}%</strong>
                    </div>
                    <div className="float-end">
                      <small className="text-medium-emphasis">{item.usage.period}</small>
                    </div>
                  </div>
                  <CProgress thin color={item.usage.color} value={item.usage.value} />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon size="xl" icon={item.payment.icon} />
                </CTableDataCell>
                <CTableDataCell>
                  <div className="small text-medium-emphasis">Last login</div>
                  <strong>{item.activity}</strong>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
</>






  );
};

export default Links;
