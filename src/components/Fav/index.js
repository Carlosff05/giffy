import useUser from "../../hooks/useUser"
import { useLocation } from "wouter"
import './styles.css'

export default function Fav({id}) {
    const {isLogged, favs, addFav} = useUser()
    const [, pushLocation] = useLocation()

    const isFaved = favs.some(favId => favId === id)
    const handleClick = () => {
        if (!isLogged) return pushLocation('/login')
        //addFav({id})
    }

    const [
        label,
        emoji
    ] = isFaved 
    ? [
        'Remove Gif from favorites',
        '❌'
    ]
    : [
        'Add Gif to favorites',
        '💖'
    ]

    return <button className="gf-Fav" onClick={handleClick}>
        <span role="img" aria-label={label}>{emoji}</span>
    </button>
}