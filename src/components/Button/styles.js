import styled from "@emotion/styled";
import { Link as LinkWouter } from "wouter";

const SIZES = {
  small: '1rem',
  medium: '2rem',
  large: '3rem'
}

export const LinkedStyle = styled(LinkWouter)`
    border: 1px solid transparent;
    padding: .5rem 1rem;
    background-color: var(--brand-color_3);
    color: var(--theme-body-txt);
    cursor: pointer;
    font-size: ${props => SIZES[props.size]};

    &:hover {
        background-color: var(--brand-color_6);
    }
`

export const Button = LinkedStyle.withComponent('button')