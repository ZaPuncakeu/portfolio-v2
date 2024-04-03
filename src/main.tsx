import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.ts'
//import { BrowserRouter } from 'react-router-dom'

import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
