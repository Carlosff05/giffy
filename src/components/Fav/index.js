import useUser from "../../hooks/useUser"
import { useLocation } from "wouter"
import './styles.css'
import { useCallback, useState } from "react"
import ModalPortal from "../Modal"
import Login from "../Login"

export default function Fav({ id }) {
    const { isLogged, favs, addFav } = useUser()
    const [, pushLocation] = useLocation()
    const [showModal, setShowModal] = useState(false)

    const isFaved = favs.some(favId => favId === id)
    const handleClick = () => {
        if (!isLogged) return setShowModal(true)
        //addFav({id})
    }

    const handleClose = useCallback(() => {
        setShowModal(false)
    })

    const handleLogin = useCallback(() => {
        setShowModal(false)
    })

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

    return (<>
        <button className="gf-Fav" onClick={handleClick}>
            <span role="img" aria-label={label}>{emoji}</span>
        </button>
        {showModal && <ModalPortal onClose={handleClose}>
            <Login onLogin={handleLogin} />
        </ModalPortal>}
    </>)
}