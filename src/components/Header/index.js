import React from "react";
import { Link } from "wouter";
import './styles.css'
import useUser from "../../hooks/useUser";

export default function Header() {
    const {isLogged, logout} = useUser();
    return (
        <header className="gf-header">
            {
                isLogged ?
                <Link onClick={logout}>
                    Logout
                </Link>
                : <Link to="/login">
                    Login
                </Link>
            }
            
        </header>
    )
}