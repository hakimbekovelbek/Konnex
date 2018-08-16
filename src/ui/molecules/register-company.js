import React from 'react'
import styled from 'styled-components'
import { Input } from '../atoms'
import "./styles.css";

const Wrapper = styled.div`
  width: 24%;
  margin: 0 auto;
  padding: 5px;
  position: absolute;
  right: 50px;
  top: 100px;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  
`
const Header = styled.h2`
font-size: 24px;
font-weight: 300;
line-height: 1;
text-transform: uppercase;
color: #788195;
font-family: 'Roboto', sans-serif;
text-align: center;
margin-bottom: 50px;
`
const Paragraph = styled.p`
font-size: 12px;
font-weight: 300;
line-height: 1;
color: #788195;
font-family: 'Roboto', sans-serif;
text-align: center;
margin-bottom: 50px;
`


export const RegisterUI = ({ onClick, onChangeName, onChangeIndustry, onChangeSubindustry}) => (
  <Wrapper>
    <Form>
      <Header>Konnex</Header>
      <Paragraph>or create new company</Paragraph>
      <Input onChange={onChangeName} name/>
      <Input onChange={onChangeIndustry} industry/>
      <Input onChange={onChangeSubindustry}/>
      <button type="submit" className='btn btn-big' onClick={onClick}>Create new company</button>
      </Form>
  </Wrapper>
)



