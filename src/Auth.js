import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import keycloak from "./common/Keycloak";
import {ReactKeycloakProvider, useKeycloak} from "@react-keycloak/web";
import {isAuth} from "./common/AuthUtill";
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const Auth= ()=> {
    const navigate = useNavigate();
    // const { keycloak, initialized } = useKeycloak();

    useEffect(() => {
      if (!isAuth()){
        navigate("admin/login")
      }
    }, []);

    return (
      <main>
        <DefaultLayout/>
      </main>
    )
}

export default Auth
