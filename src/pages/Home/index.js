import React, {useCallback, useEffect, useState} from "react"
import { useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches'
import SearchForm from "../../components/SearchForm"
import { Helmet } from "react-helmet"

export default function Home() {
  const {loading, gifs} = useGifs({keyword: localStorage.getItem('lastKeyword')})

  return (
    <>
    <Helmet>
      <title>Home | Giffy Carlos</title>
      <meta name="description" content={document.title}/>
    </Helmet>
      <SearchForm/>
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