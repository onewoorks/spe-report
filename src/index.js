import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/lib/integration/react"
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider} from "@auth0/auth0-react"

ReactDOM.render(
    <Auth0Provider
        domain="onewoorks.auth0.com"
        clientId="PPrLDzwtriyBmoX3qH4XP7ZR4TxfRGjY"
        redirectUri={window.location.origin}>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
            <App />
            </Router>
        </PersistGate>
    </Provider>
    </Auth0Provider>,
    document.getElementById("root")
)
serviceWorker.unregister()
