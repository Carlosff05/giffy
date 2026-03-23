import React, { Suspense } from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register'

import { UserContextProvider } from './context/UserContext';
import { GifsContextProvider } from './context/GifsContext'

import { Link, Route } from "wouter"
import ErrorPage from './pages/ErrorPage';

export default function App() {
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
                component={Register}
                path='/register'
              />
              <Route
                component={ErrorPage}
                path={'/404'}
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  )
}