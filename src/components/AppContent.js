import React, {Suspense, useEffect} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = (props) => {
  useEffect(() => {
    console.log(props.dataRes)
  }, [props.dataRes]);
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element dataRes={props.dataRes} setDataPage={props.setDataPage} />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="admin/dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
