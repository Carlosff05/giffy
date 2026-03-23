import useUser from "../../hooks/useUser"
import { useLocation } from "wouter"
import './styles.css'

export default function Fav({id}) {
    const {isLogged} = useUser()
    const [, pushLocation] = useLocation()
    const handleClick = () => {
        if (!isLogged) return pushLocation('/login')
        alert(id)
    }

    return <button className="gf-Fav" onClick={handleClick}>
        <span role="img" aria-label="Fav Gif">💖</span>
    </button>
}