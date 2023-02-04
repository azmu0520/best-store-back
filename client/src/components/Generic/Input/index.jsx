import React, { forwardRef } from 'react'
import { Container, Icon, Wrapper } from './style'

export const Input = forwardRef(
  ({
    children, 
    onChange,
    placeholder,
    height,
    width,
    type,
    mr,
    ml,
    mb,
    mt,
    pr,
    pl,
    pt,
    pb,
    name,
    defaultValue,
    value,
  }, ref)=>{
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
        <Icon>{children}</Icon>
        <Container 

            ref={ref}
            onChange={onChange}
            placeholder={placeholder}
            type={type} 
            width={width}
            height={height}
            pl={pl}
            name={name}
            value={value}
        />    
    </Wrapper>
  )
}
)

export default Input
