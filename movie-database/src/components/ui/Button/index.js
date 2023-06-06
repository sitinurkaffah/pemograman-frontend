/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;

    background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

    //PROPS FULL
    ${(props) =>
    props.full &&
    css`
        display: block;
        width: 100%;
    `}

    //PROPS SIZE
    ${function(props) {
        if (props.size === "sm") {
            return props.theme.size.sm;
        } else if (props.size === "lg") {
            return props.theme.size.lg;
        } else if (props.size === "md") {
            return props.theme.size.md;
        }
    }}
`;
        
export default Button;