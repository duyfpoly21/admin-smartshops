import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const Auth= ()=> {
    const navigate = useNavigate();
    useEffect(() => {
        let user;
        let role;
        user = localStorage.getItem('user');
        role = localStorage.getItem('role');
        console.log(user)
        if (user == null || user === '') {
            navigate('/login');
        }
    }, []);

    return (
      <main>
        <DefaultLayout />
      </main>
    )
}

export default Auth
