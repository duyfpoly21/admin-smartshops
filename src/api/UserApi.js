import internal from "./InternalClient";
import external from "./ExternalClient";


const UserApi = {
    getToken(req) {
        const url = "/api/user/get-token";
        return external.post(url,req);
    },
    getTokenFormRefresh(refreshToken) {
        const url = "/api/user/get-token-from-refresh?refresh="+refreshToken;
        return external.get(url);
    }
}
export default UserApi;
