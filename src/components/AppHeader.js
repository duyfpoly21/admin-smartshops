import React from 'react'
import { NavLink } from 'react-router-dom'
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

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

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
          <CForm className="d-flex customNavbar">
            <CFormInput className="col-6 navBarInput my-auto" placeholder="Search" size="sm" />
            <CButton color="outline-success" className="my-2 my-sm-0 iconNavbarSass" type="submit">
              <CIcon className='m-auto' icon={cilSearch} size="lg" />
            </CButton>
            <CButton color="outline-success" className="iconNavbar" type="submit">
              Search
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
