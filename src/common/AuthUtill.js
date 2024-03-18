import {jwtDecode} from "jwt-decode";
import data from "@coreui/coreui/js/src/dom/data";

export const getAuthInfo = () => {
  const data = localStorage.getItem("auth")
  return JSON.parse(data)
};

// const getPermission = JSON.parse(localStorage.getItem("auth").permissionLst);

// export function hasPermission(expect) {
//     let rs =false
//     if (getPermission == null) return rs;
//     for (let i = 0; i < getPermission.length; i++) {
//         if (getPermission.at(i) === expect){
//             return true;
//         }
//     }
//     return rs;
// }

export function isAuth() {
  return localStorage.getItem("isAuth")
}


export function getUser() {
  return localStorage.getItem("user");
}

export function getRole() {
  return localStorage.getItem("role");
}


// export function setAuth(keycloak ) {
//     localStorage.setItem("isAuth","true");
//    localStorage.setItem("auth",JSON.stringify(keycloak.tokenParsed));
// }

export function setAuth(data) {
  try {
    const decoded = jwtDecode(data.accessToken);
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("accessToken", data.accessToken)
    localStorage.setItem("refreshToken", data.refreshToken)
    localStorage.setItem("auth", JSON.stringify(decoded));
  }catch (ex){
    console.log(ex);
    return window.location.href = '/admin/login'
  }
}

export function killAuth() {
  localStorage.removeItem("isAuth")
  localStorage.removeItem("auth")
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}
