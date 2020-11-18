import React from 'react'
import Keycloak from 'keycloak-js'
import {useKeycloak } from '@react-keycloak/web'


const App = () => {
    const { initialized, keycloak } = useKeycloak()
    console.log('initialized')
    console.log(initialized)
    console.log('keycloak')
    console.log(keycloak)

    const login = React.useCallback(() => {
        keycloak.login()
      }, [keycloak])

    if (keycloak?.authenticated)
        console.log('user dah login')
     
    return (
        <div>
          <button type="button" onClick={login}>
            Login
          </button>
        </div>
      )
  }

  export default App

