import Keycloak from 'keycloak-js'

const keycloak = Keycloak({
    url: 'https://sso.pengurusanemas.my/auth/',
    realm: 'development',
    clientId: 'spe-stok',
    "policy-enforcer": {
        "enforcement-mode": "DISABLED"
      }
  });

export default keycloak