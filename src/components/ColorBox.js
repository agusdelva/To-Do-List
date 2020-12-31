import React from 'react'
import styled from 'styled-components'

const LaberColor = styled.label`
    display:inline-block;
    width: 30px;
    height: 30px;
    margin-top: .5rem;
    background-color: ${({color}) => color};
    border-radius: 5px;
`

const InputRadio = styled.input`
    display:none;
    &:checked + label{
        border: 1px solid #fff;
    }
`

const ColorBox = ({color, handleChangeColor, isChecked}) => (
    <>
        <InputRadio
        defaultChecked={isChecked}  //color por defecto cuando se monta el componente
         id={color}
         type="radio" 
         name="color"
         onChange={() =>handleChangeColor(color)}/>     {/* selecciona el color*/}
        <LaberColor htmlFor={color} color={color}></LaberColor>
    </>
)
 
export default ColorBox