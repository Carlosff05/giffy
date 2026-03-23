import React, {useEffect, useState} from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [favs, setFavs] = useState([])
  const [jwt, setJwt] = useState(() => sessionStorage.getItem('jwt'))

  useEffect(() => {
    if (!jwt) setFavs([])
    //getFavs({jwt}).then(setFavs)
  }, [jwt])

  return <Context.Provider value={{favs, jwt, setFavs, setJwt}}>
    {children}
  </Context.Provider>
}

export default Context