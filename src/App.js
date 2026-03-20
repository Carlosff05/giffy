import React, { Suspense } from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Header from './components/Header';
import Login from './pages/Login/Login';

import { UserContextProvider } from './context/UserContext';
import { GifsContextProvider } from './context/GifsContext'

import { Link, Route } from "wouter"

export default function App() {

  /*
  Petición a mi API BackendGiffy
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('http://localhost:5227/api/Productos')
    .then(res => res.json())
    .then(data => setProductos(data))
    .then(() => console.log(productos))
    .catch(err => console.log(err.Detail))
  }, [])*/

  return (
    <UserContextProvider>
      <div className="App">
        <Suspense>
          <section className="App-content">
            <Header />
            <Link to="/">
              <h1 className='App-title App-logo'>Giffy</h1>
            </Link>
            <GifsContextProvider>
              <Route
                component={Home}
                path="/"
              />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?"
              />
              <Route
                component={Detail}
                path="/gif/:id"
              />
              <Route
                component={Login}
                path='/login'
              />

              <Route
                component={() => <h1>404 ERROR</h1>}
                path={'/404'}
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  )
}