import styled from "@emotion/styled";
import { Link as LinkWouter } from "wouter";

export const LinkedStyle = styled(LinkWouter)`
    border: 1px solid transparent;
    padding: .5rem 1rem;
    background-color: var(--brand-color_3);
    color: var(--theme-body-txt);
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: var(--brand-color_6);
    }
`