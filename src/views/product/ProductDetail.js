import React, {useEffect, useState} from 'react'
import {
  CAlert,
  CButton, CButtonGroup,
  CCard, CCardBody,
  CCardHeader,
  CCol, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CInputGroup, CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow, CSpinner
} from "@coreui/react";
import {DocsExample} from "../../components";
import {useParams} from "react-router-dom";
import ProductApi from "../../api/ProductApi";
import './ProductDetail.css'
import Button from "@coreui/coreui/js/src/button";

const ProductDetail = () => {
  const [spinner, setSpinner] = useState(false);
  const [product, setProduct] = useState({});
  const params = new URLSearchParams(window.location.search);
  const [action, setAction] = useState('view');
  const [alert, setAlert] = useState('');

  useEffect(() => {
    const id = params.get("id");
    if (id){
      getProduct(id);
    }
    getAction(params.get("action"));
  }, []);

  function getProduct(id) {
    setSpinner(true)
    ProductApi.findById(id).then(value => {
      setProduct(value.data);
      setSpinner(false)
    })
  }

  function getAction(pram){
    switch (pram) {
      case '1' :
        setAction("view");
        break;
      case '2' :
        setAction("update");
        break;
      case '3' :
        setAction("create")
        break;
    }
  }

  function submit(){
    setSpinner(true)
      ProductApi.save(product).then(value => {
          setSpinner(false);
      })
  }

  function setProductValue(type, value) {
    switch (type) {
      case 'name' :
        product.name = value;
        break;
      case 'quantity' :
        product.quantity = value;
        break;
      case 'price' :
        product.price = value;
        break;
    }
    setProduct({...product});
  }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          {/*{<CAlert color={"success"}>{alert}</CAlert>}*/}
          { spinner && ( <div className="loading"><CSpinner color="primary"/></div>)}
          <CCardHeader>
            <strong className='text-primary'>
              {action === "view" && "Bạn chỉ có quyền xem sản phẩm này"}
              {action === "update" && "Chỉnh sửa sản phẩm này"}
              {action === "create" && "Tạo mới sản phẩm"}
            </strong>
          </CCardHeader>
          <CCardBody className="row p-4">
            <div className='col m-3'>
              <form>
                <div className="row my-2">
                  <div className="col-4">
                    <label className="label">Tên sản phẩm :</label>
                  </div>
                  <div className="col-8">
                    <input value={product?.name}
                           type="text"
                           onChange={values => setProductValue('name', values.target.value)}
                           className="form-control input-product-name" />
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-4">
                    <label className="label">Loại sản phẩm :</label>
                  </div>
                  <div className="col-8">
                    <CFormSelect onChange={event => setProductValue("category",event.target.value)}
                                 className='form-control'>
                      <option disabled>chọn loại sản phẩm</option>
                    </CFormSelect>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-4">
                    <label className="label">Nhãn hàng :</label>
                  </div>
                  <div className="col-8">
                    <CFormSelect onChange={event => setProductValue("category",event.target.value)}
                                 className='form-control'>
                      <option disabled>chọn nhãn hàng</option>
                    </CFormSelect>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-4">
                    <label className="label">Số lượng :</label>
                  </div>
                  <div className="col-8">
                    <input type='number' value={product?.quantity} defaultValue='1' min='0'
                           onChange={event => setProductValue("quantity",event.target.value)} className="form-control"/>
                  </div>
                </div>

                <div className="row my-2">
                  <div className="col-4">
                    <label className="label">Giá tiền :</label>
                  </div>
                  <div className="col-8">
                    <input value={product?.price} onChange={(e)=>setProductValue("price",e.target.value)}
                           type='number' defaultValue='1' min='0' className="form-control"/>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="col-4">
                    <label className="label">Ghi chú :</label>
                  </div>
                  <div className="col-8">
                    <textarea value={product?.note} cols={3} onChange={e=>setProductValue("note",e.target.value)} className="form-control"/>
                  </div>
                </div>
                <div className="row my-2">
                  <button className = "w-50 mx-auto btn btn-primary" type="button" onClick={submit}>
                    {action === "update" && "Chỉnh sửa"}
                    {action === "create" && "Tạo mới"}
                  </button>
                </div>
              </form>
            </div>
            <div className='col'>
              aaa
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

const StaticBackdrop = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Launch static backdrop modal</CButton>
      <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          I will not close if you click outside me. Don&#39;teven try to press escape key.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default ProductDetail
