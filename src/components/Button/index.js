import { LinkedStyle, Button } from "./styles";

export default function ButtonComp({ children, href, size = 'small' }) {
    return href
        ? <LinkedStyle size={size} to={href} >{children}</LinkedStyle>
        : <Button size={size}>{children}</Button>
}