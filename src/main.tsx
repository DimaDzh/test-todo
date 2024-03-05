import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import App from './app-section.tsx'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
