import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import {hasPermission} from '../../common/AuthUtill'
import {cilStar, cilZoom} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const ProductList = () => {
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    setUpdate(hasPermission("updateProduct"))
  }, []);
  const tableHeader = [
          "STT",
          "Tên sản phẩm",
          "Số lượng còn lại",
          "Giá tiền",
          "trạng thái"
      ];

  const tableDataRow = [
    {
      name: "sp1",
      price: "10.000.000",
      number: "100",
      action: false
    },
    {
      name: "sp2",
      price: "10.000.000",
      number: "100",
      action: true
    }
  ];
  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader className= 'row'>
            <strong className='col-3'>Danh sách sản phẩm</strong>
            <div className= 'col-6 row'>
              <div className= 'col-auto'>
                <strong className= 'col-4'>Bộ lọc <CIcon className= 'fa fa-minus-square-o' icon={cilZoom}  /> </strong>
              </div>
              <div className= 'col-6'>
                <CFormSelect>
                  <option disabled></option>
                  <option>...</option>
                </CFormSelect>
              </div>
            </div>

          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="light">
                <CTableRow>
                  {tableHeader.map(value => <CTableHeaderCell scope="col">{value}</CTableHeaderCell>)}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tableDataRow.map((item,index) =>
                    <CTableRow>
                      <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                      <CTableDataCell>{item.name}</CTableDataCell>
                      <CTableDataCell>{item.number}</CTableDataCell>
                      <CTableDataCell>{item.price}</CTableDataCell>
                      <CTableDataCell><CButton>{update ? "update":"xem chi tiết"}</CButton></CTableDataCell>
                    </CTableRow>
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProductList
