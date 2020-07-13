import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../styles/Font';

type Props = {
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onSubmit ?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Form: React.FC<Props> = (props) => {
    const {value, onChange, onSubmit =()=>{}} = props
    return (
        <StyledForm type = 'text' onChange={onChange} value = {value} />
    )
}

export default Form;

const StyledForm = styled.input`
    font-size: ${FontSize.Medium}px;
    font-family: ${FontFamily.Roboto};
    border-width: 1px;
    background-color: #F0F8FF;
    padding: 10px;
`