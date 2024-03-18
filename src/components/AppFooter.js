import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">Quản lý bán hàng create by </span>
        <a href="https://smartshops.vn" target="_blank" rel="noopener noreferrer">
          smartshops.vn
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
