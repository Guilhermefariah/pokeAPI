import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from './redux/rootReducer'

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
