/** @jsxImportSource @emotion/react */
import React from "react"
import { Helmet } from "react-helmet"
import SearchForm from "../../components/SearchForm"
import { Link } from "wouter"
import { css } from '@emotion/react'
import Button from "../../components/Button"

//Ambas formas son válidas
const pageErrorStyles = css({
    display: "flex",
    'flex-direction': "column",
    'justify-content': "center",
    'align-items': "center",
    padding: "1rem",
    'text-align': "center"
})

const code_error = css`
    font-size: 5rem;
    font-weight: bold;
    font-style: italic;
`

const msg_error = css`
    font-size: 1.5rem;
    margin: 1rem 0;
`


const SIZE = '250px'
const gif_error = css({
    margin: "1rem auto",
    width: SIZE,
    height: SIZE,
    ":hover": {
        transform: 'scale(1.2)'
    }
})


const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I']

export default function ErrorPage() {
    const randomImage = () => {
        return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length)]}/giphy.gif`
    }

    return (
        <>
            <Helmet>
                <title>Error 404 | Giffy</title>
            </Helmet>
            <header className="o-header">
                <SearchForm/>
            </header>
            <div className="App-wrapper">
                <div css={pageErrorStyles}>
                    <span css={code_error}>404</span>
                    <span css={msg_error}>Te perdiste, inutil</span>
                    <img css={gif_error} src={randomImage()} alt="alt-page-404"/>
                    <Button to="/" >Go back home</Button>
                </div>
            </div>
        </>
    )
}