import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'
import './styles.css'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [_, pushLocation] = useLocation()
    const { isLogged, isLoginLoading, hasLoginError, login } = useUser()

    useEffect(() => {
        if (isLogged) pushLocation('/')
    }, [isLogged, pushLocation])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username: username, password: password })
    }

    return (
        <>
            {isLoginLoading && <strong>Checking credentials...</strong>}
            {!isLoginLoading && <form className='form' onSubmit={handleSubmit}>
                <label>
                    Username:<input placeholder='Username' onChange={e => setUsername(e.target.value)} value={username} />
                </label>
                <label>
                    Password:<input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />
                </label>
                <button className='btn'>Login</button>
            </form>}
            {hasLoginError && <strong>Credentials are invalid</strong>}
        </>
    )
}