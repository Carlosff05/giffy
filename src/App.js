import React, { Suspense, useEffect, useState } from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Pepito from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'
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
  <Pepito.Provider value={{}}>
      <div className="App">
        <header>

        </header>
        <Suspense>
          <section className="App-content">
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
                component={() => <h1>404 ERROR</h1>}
                path={'/404'}
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </Pepito.Provider>
  )
}