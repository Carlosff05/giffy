import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";
import addFavService from "../services/addFavService";

export default function useUser() {
    const {favs, jwt, setFavs, setJwt} = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback(({username, password}) => {
        setState({loading: true, error: false})
        loginService({username, password})
        .then(jwt => {
            sessionStorage.setItem('jwt', jwt)
            setState({loading: false, error: false})
            setJwt(jwt)
        })
        .catch(err => {
            sessionStorage.removeItem('jwt')
            console.error(err)
            setState({loading: false, error: true})
        })
    }, [setJwt]) 

    const addFav = useCallback(({id}) => {
        addFavService({id, jwt})
        .then(favs => setFavs(favs))
        .catch(err => console.error(err))
    }, [])

    const logout = useCallback(() => {
        sessionStorage.removeItem('jwt')
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        favs,
        addFav,
        logout
    }
}