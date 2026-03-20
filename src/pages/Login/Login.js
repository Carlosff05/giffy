import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [_, pushLocation] = useLocation()
    const {login, isLogged} = useUser()

    useEffect(() => {
        if(isLogged) pushLocation('/')
    }, [isLogged, pushLocation])

  const handleSubmit = (e) => {
    e.preventDefault()
    login()
    //alert(`${username} ${password}`)
    //pushLocation('/')
  }

  return (
    <form onSubmit={handleSubmit}>
        <button>Login</button>
        <input placeholder='Username' onChange={e => setUsername(e.target.value)} value={username}/>
        <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} value={password}/>
    </form>
  )
}