import Keycloak from "keycloak-js";
const keycloakConfig = new Keycloak({
  url: "https://www.smartshops.vn/auth",
  realm: "demo",
  clientId: "demo",
});

export default keycloakConfig;

// export class keycloak {
//
// }
