import React, {useCallback, useEffect, useState} from "react"
import { useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches'
import SearchForm from "../../components/SearchForm"
import { Helmet } from "react-helmet"

export default function Home() {
  console.log("Un aadf mas")
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs({keyword: localStorage.getItem('lastKeyword')})

  const handleSubmit = useCallback(({keyword}) => {
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  //Lo que sea

  return (
    <>
    <Helmet>
      <title>Home | Giffy Carlos</title>
      <meta name="description" content={document.title}/>
    </Helmet>
      <SearchForm onSubmit={handleSubmit}/>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Ultima busqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}