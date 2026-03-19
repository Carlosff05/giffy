import React, {useCallback, useEffect, useRef } from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import useSEO from '../../hooks/useSEO'
import { Helmet } from 'react-helmet'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
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
        <h3 className="App-title">
          {decodeURI(keyword)}
        </h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
}