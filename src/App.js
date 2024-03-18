import React, { Component, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './scss/style.scss'
import store from "./store";
import {Provider} from "react-redux";
import './scss/spinner.css'
import './scss/mobile.css'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Auth = React.lazy(() => import('./Auth'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const PrivateRoute = React.lazy(() => import('./common/PrivateRoute'))
const Nav = React.lazy(() => import('./views/Nav'))
const WelcomePage = React.lazy(() => import('./views/WelcomePage'))



function App() {

  return (
    <div>
        <Provider store={store}>
            {/*<ReactKeycloakProvider authClient={keycloak}>*/}
                <BrowserRouter>
                    <Suspense fallback={loading}>
                    <Routes >
                        <Route exact path="/admin/login" name="Login Page" element={<Login />} />
                        <Route  path="*" name="Home" element={<Auth />} />
                    </Routes>
                    </Suspense>
                </BrowserRouter>
            {/*</ReactKeycloakProvider>*/}
        </Provider>
</div>
  );
}

export default App
