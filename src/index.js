import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/lib/integration/react"
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react"
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'


const eventLogger = (event: unknown, error: unknown) => {
    console.log('onKeycloakEvent', event, error)
  }
  
  const tokenLogger = (tokens: unknown) => {
    console.log('onKeycloakTokens', tokens)
  }

ReactDOM.render(
    // <Auth0Provider
    //     domain="onewoorks.auth0.com"
    //     clientId="PPrLDzwtriyBmoX3qH4XP7ZR4TxfRGjY"
    //     redirectUri={window.location.origin}>
    // <ReactKeycloakProvider
    //             authClient={keycloak}
    //             onEvent={eventLogger}
    //             onTokens={tokenLogger}
    //         >
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
            <App />
            </Router>
        </PersistGate>
    </Provider>,
    // </ReactKeycloakProvider>,
    // </Auth0Provider>,
    document.getElementById("root")
)


// ReactDOM.render(

//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <ReactKeycloakProvider
//                 authClient={keycloak}
//                 onEvent={eventLogger}
//                 onTokens={tokenLogger}
//             >
//                 <Router>
//                     <App />
//                 </Router>
//             </ReactKeycloakProvider>
//         </PersistGate>
//     </Provider>,
//     document.getElementById("root")
// )
serviceWorker.unregister()
