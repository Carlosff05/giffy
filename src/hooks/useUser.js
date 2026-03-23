import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";

export default function useUser() {
    const {jwt, setJwt} = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback(({username, password}) => {
        setState({loading: true, error: false})
        loginService({username, password})
        .then(jwt => {
            setState({loading: false, error: false})
            setJwt(jwt)
        })
        .catch(err => {
            console.error(err)
            setState({loading: false, error: true})
        })
    }, [setJwt]) 

    const logout = useCallback(() => {
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    }
}