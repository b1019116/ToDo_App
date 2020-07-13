import React from 'react';
import styled from 'styled-components';
import {FontSize, FontFamily } from '../../styles/Font';
import Color from '../../styles/Color'

type Props = {
    color ?: Color;
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = (props) => {
    const { color = Color.DodGerBlue , label, onClick} = props;
    return (
        <StyledButton color = {color} onClick = {onClick}>
            {label}
        </StyledButton>
    )
}

export default Button;

type StyledButtonProps = {
    color: Color
}

const StyledButton = styled.button<StyledButtonProps>(props => `
    font-size: ${FontSize.Medium}px;
    font-family: ${FontFamily.Roboto};
    background-color: ${props.color};
    border-radius: 5px;
    border-width: 0px;
    color: #FFFFFF;
    margin: 5px;
    padding: 5px;
`);