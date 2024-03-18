export const getAuth = (theInput) => {
    return {
        "user":getUser(),
        "role":getRole(),
        "permission" : getPermission
    };
};

const getPermission = JSON.parse(localStorage.getItem("role"));

export function hasPermission(expect) {
    let rs =false
    if (getPermission == null) return rs;
    for (let i = 0; i < getPermission.length; i++) {
        if (getPermission.at(i) === expect){
            return true;
        }
    }
    return rs;
}

export function isAuth() {
    let user = getUser();
    return user !=='' || user !== null;
}


export function getUser() {
    return localStorage.getItem("user");
}

export function getRole() {
    return localStorage.getItem("role");
}
