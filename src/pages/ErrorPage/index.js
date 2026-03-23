/** @jsx */
import { Helmet } from "react-helmet"
import SearchForm from "../../components/SearchForm"
import { Link } from "wouter"
import {css, jsx} from '@emotion/react'

const pageErrorStyles = css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
`
/**
 *

.page-error .code-error {
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
}

.page-error .msg-error {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.page-error .gif-error {
  margin: 1rem auto;
  width: 250px;
  height: 250px;
}
 */

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzp', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I']

export default function ErrorPage() {
    const randomImage = () => {
        return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
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
                    <span className="code-error">404</span>
                    <span className="msg-error">Te perdiste, inutil</span>
                    <img className="gif-error" src={randomImage()} alt="alt-page-404"/>
                    <Link to="/" className='btn'>Go to home</Link>
                </div>
            </div>
        </>
    )
}