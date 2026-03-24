import { LinkedStyle } from "./styles";

export default function Button({ children, href }) {
    return <LinkedStyle to={href} >{children}</LinkedStyle>
}