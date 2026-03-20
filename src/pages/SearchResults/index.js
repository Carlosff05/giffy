import React, {useCallback, useEffect, useRef } from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import useSEO from '../../hooks/useSEO'
import { Helmet } from 'react-helmet'
import SearchForm from '../../components/SearchForm'

export default function SearchResults ({ params }) {
  const { keyword, rating = 'g' } = params
  const { loading, gifs, setPage } = useGifs({ keyword, rating })
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen( {externalRef: loading ? null : externalRef, once: false})

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

  const debounceHandleNextPage = useCallback(debounce(
      () => setPage(prevPage => prevPage + 1), 200
  ), [])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
    {loading
      ? <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
      : <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <header>
          <SearchForm initialKeyword={keyword} initialRating={rating}/>
        </header>
        <h3 className="App-title">
          {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
}