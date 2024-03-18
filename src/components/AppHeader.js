import React, {useState} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem, CForm, CInputGroupText, CButton, CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilBell, cilEnvelopeOpen, cilList, cilMenu, cilSearch} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
import button from "@coreui/coreui/js/src/button";

const AppHeader = (props) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const param = useParams();
    const [key, setKey] = useState('')

  function actionSearch(e){
      e.preventDefault();
    const req = {
      "key" : key ? key : '',
      "source": param,
      "all" : false
    };
    props.setDataSearch(req);
  }

    function actionSearchAll(e){
        e.preventDefault();
        const req = {
            "key" : key ? key : '',
            "source": param,
            "all" : true
        };
        props.setDataSearch(req);
    }

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="col mw-100">
          <CForm onSubmit={event => {actionSearch(event)}} className="d-flex customNavbar">
            <CFormInput value={key} onChange={(e)=>setKey(e.target.value)} className="col-6 navBarInput my-auto" placeholder="Search" size="sm" />
            <CButton typeof={button} onClick={event => actionSearchAll(event)} color="outline-success" className="my-2 my-sm-0 iconNavbarSass" type="submit">
              <CIcon className='m-auto' icon={cilSearch} size="lg" />
            </CButton>
            <CButton typeof={button} onClick={event => actionSearchAll(event)} color="outline-success" className="iconNavbar" type="submit">
              searchAll
            </CButton>
          </CForm>
        </CHeaderNav>
        <CHeaderNav className='iconNavbar'>
          <CNavItem>

            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
