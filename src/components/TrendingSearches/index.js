import React, {Suspense} from 'react'
import useNearScreen from '../../hooks/useNearScreen'
import Spinner from '../Spinner'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending() {
  const {isNearScreen, fromRef} = useNearScreen()

  return <div ref={fromRef}>
      {isNearScreen ? 
      <Suspense fallback={null}>
        <TrendingSearches/> 
      </Suspense>
        : <Spinner/>}
  </div>
}