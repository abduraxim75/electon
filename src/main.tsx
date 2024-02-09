import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store/store';
import BeautifulLoading from './components/loading/loading.tsx';
const App = lazy(()=> import("./App.tsx"))
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<BeautifulLoading/>}>
    <Provider store={store}>
      <App />
      </Provider>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
