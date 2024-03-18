import React, {useEffect, useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CFormSelect, CModal, CModalBody, CModalHeader, CModalTitle, CPagination, CPaginationItem,
  CRow, CSpinner,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import {hasPermission} from '../../common/AuthUtill'
import {cilHamburgerMenu, cilStar, cilZoom} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import ProductApi from "../../api/ProductApi";
import {useNavigate} from "react-router-dom";
import MasterDataAPI from "../../api/Masterdata";

const ProductList = (props) => {
  const [update, setUpdate] = useState(false)
  const [mobileScreen, setMobileScreen] = useState(false)
  const [name, setName] = useState("duy")
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const [header, setHeader] = useState([])
  const [showModalEditCol, setShowModalEditCol] = useState(false)
  const [dataProduct, setDataProduct] = useState()
  const [req, setReq] = useState({
    "page": 0,
    "size": 5
  })
  const [maxCol, setMaxCol] = useState(5)
  const keyHeaderCol = window.innerWidth <= 600 ? "ProductListColMol" : "ProductListColFull"

    useEffect(() => {
      if (window.innerWidth<600) {
        setMobileScreen(true);
        setMaxCol(3)
      }
      setSpinner(true)
      getTableHeaderCol().then(value => {
        if (value){
          setHeader(value.data.tableHeader)
        }else {
          setHeader(tableHeader)
        }
        setSpinner(false)
      });
      if (window.location.pathname === props.dataRes?.source && props.dataRes){
        console.log(props.dataRes.data)
        setDataProduct(props.dataRes.data)
      } else {
        paging(0);
      }
      setUpdate(true);
    }, [props.dataRes]);


    async function getTableHeaderCol() {
      return await MasterDataAPI.findByKey(keyHeaderCol);
    }

    let tableHeader = [
      {"key": "index","name":"Stt","show":true},
      {"key": "name","name":"Tên SP","show":true},
      {"key": "name","name":"Mã SP","show":true},
      {"key": "name","name":"SL còn lại","show":true},
      {"key": "name","name":"Giá tiền","show":true},
        {"key": "name","name":"Loại SP","show":false}
    ];

    function paging(pageNumber){
        req.page=pageNumber;
        setReq(req);
        props.setDataPage({...req});
    }



    function saveCol(){
        if (isEnable()){
          const data = {
            "tableHeader" : tableHeader
          }
          setSpinner(true);
          MasterDataAPI.save(data,keyHeaderCol).then(
            value => {
              setSpinner(false);
            }
          )
        }else {
            let sum = 0;
            header.forEach(value => {
                if (value.show){
                    sum++;
                }
                if (sum>maxCol){
                  value.show = false;
                }
            })
        }
        setShowModalEditCol(false)
    }

    function isEnable() {
      let sum = 0;
      header.forEach(value => {
        if (value.show) {
          sum++;
        }
      })
      return sum <= maxCol;
    }



    return (
        <CRow>
          { spinner && ( <div className="loading"><CSpinner color="primary"/></div>)}
            <CModal fullscreen="sm" visible={showModalEditCol} onClose={() => setShowModalEditCol(false)}>
                <CModalHeader>
                    <CModalTitle>Thay đổi cột</CModalTitle>
                </CModalHeader>
                <CModalBody className="text-center">
                    <h2>Tối đa: {maxCol}</h2>
                    {header?.map(value =>
                        (<div className="row mx-auto">
                            <strong className="col my-1 text-center">{value.name}:</strong>
                            <input onChange={e =>{value.show=e.target.checked}} className="col my-1" type={"checkbox"} defaultChecked={value.show}/>
                        </div>)
                    )}
                    <CButton onClick={saveCol} className="my-3 mx-1">Lưu thay đổi</CButton>
                </CModalBody>
            </CModal>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader className='row'>
                        <div className='col row'>
                          <div className= "product-list-filter row">
                            <strong className="col-4">Bộ lọc
                              <CIcon className='fa fa-minus-square-o'icon={cilZoom}/>
                            </strong>
                            <div className="col-8">
                              <select className=" form-control">
                                <option disabled></option>
                                <option>...</option>
                              </select>
                            </div>
                          </div>
                          {update && (<CButton className="col-2" onClick={()=> navigate(`/admin/product/detail?action=3`)}>Tạo mới</CButton>)}
                        </div>
                    </CCardHeader>

                    <CCardBody>
                        <CTable>
                            <CTableHead color="light">
                                <CTableRow>
                                    {header?.map(value => (value.show && <CTableHeaderCell scope="col">{value.name}</CTableHeaderCell>))}
                                  <CTableHeaderCell onClick={()=>setShowModalEditCol(true)} scope="col"><CIcon icon={cilHamburgerMenu}/></CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                              {dataProduct?.content?.map((item, index) =>
                                <CTableRow>
                                  {header?.at(0)?.show && (<CTableDataCell >{(index + 1)+(5 * (dataProduct?.pageable?.pageNumber))}</CTableDataCell>)}
                                  {header?.at(1)?.show && (<CTableDataCell >{item.name}</CTableDataCell>)}
                                  {header?.at(2)?.show && (<CTableDataCell >{item.code}</CTableDataCell>)}
                                  {header?.at(3)?.show && (<CTableDataCell >{item.quantity}</CTableDataCell>)}
                                  {header?.at(4)?.show && (<CTableDataCell >{item.price}</CTableDataCell>)}
                                    {header?.at(5)?.show && (<CTableDataCell >{item.category}</CTableDataCell>)}
                                  <CTableDataCell ><CButton onClick={()=> navigate(`/admin/product/detail?id=${item.id}&action=${update ? 2:1}`)}>{update ? "update" : "xem chi tiết"}</CButton></CTableDataCell>
                                </CTableRow>
                              )}
                            </CTableBody>
                        </CTable>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                          <li className="page-item" onClick={()=>paging(0)}>
                            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">First</a>
                          </li>
                          {
                            (dataProduct?.pageable?.pageNumber-1) > 0 &&
                            (<li className="page-item" onClick={()=>paging(dataProduct?.pageable?.pageNumber-2)}><a className="page-link" href="#">{dataProduct?.pageable?.pageNumber-1}</a></li>)
                          }
                          {
                            (dataProduct?.pageable?.pageNumber) > 0 &&
                            (<li className="page-item" onClick={()=>paging(dataProduct?.pageable?.pageNumber-1)}><a className="page-link" href="#">{dataProduct?.pageable?.pageNumber}</a></li>)
                          }
                          <li className="page-item"><a className="page-link" style={{color: "blue"}} href="#">{dataProduct?.pageable?.pageNumber+1}</a></li>
                          {
                            (dataProduct?.pageable?.pageNumber+2) <= dataProduct?.totalPages &&
                            (<li className="page-item"><a className="page-link" href="#" onClick={()=>paging(dataProduct?.pageable?.pageNumber+1)}>{dataProduct?.pageable?.pageNumber+2}</a></li>)
                          }
                          {
                            (dataProduct?.pageable?.pageNumber+3) <= dataProduct?.totalPages &&
                            (<li className="page-item"><a className="page-link" href="#" onClick={()=>paging(dataProduct?.pageable?.pageNumber+2)}>{dataProduct?.pageable?.pageNumber+3}</a></li>)
                          }
                          <li className="page-item" onClick={()=>paging(dataProduct.totalPages-1)}>
                            <a className="page-link" href="#">Last</a>
                          </li>
                          <li className="page-item" >
                            <a className="page-link" href="#">
                              Đã tìm thấy: {dataProduct?.totalElements} kết quả
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ProductList
