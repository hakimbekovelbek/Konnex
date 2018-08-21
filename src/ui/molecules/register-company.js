import React from 'react'
import styled from 'styled-components'
import {Wrapper, Form, Header} from './login'
import { Select, Input } from 'antd'
import "./styles.css"



const Paragraph = styled.p`
font-size: 12px;
font-weight: 300;
line-height: 1;
color: #788195;
font-family: 'Roboto', sans-serif;
text-align: center;
margin: 30px 0;
`


export const RegisterUI = ({ onClick, onChangeName, value, onChange, onSearch, onFocus, style, children, onFocusSub, childrensub, onChangeSub, valuesub, onSearchSub, onFocusCompany, onSearchCompany, onChangeCompany, childrenCompany, valuecompany }) => (
  <Wrapper>
    <Form>
      <Header>Konnex</Header>
      
      <Select
        onFocus={onFocusCompany}
        showSearch={true}
        showArrow={false}
        labelInValue={false}
        valuecompany={valuecompany}
        placeholder="Find your company"
        filterOption={true}
        onSearch={onSearchCompany}
        onChange={onChangeCompany}
        style={style}
      >
        {childrenCompany}
      </Select>
      
      <button 
      type="submit" 
      className='btn btn-big'
      onClick={onClick}>
       Continue registration
       </button>
      
      <Paragraph>or create new company</Paragraph>
      
      {/*Company Name*/}
      <Input 
      onChange={onChangeName} 
      size="large"
      placeholder="Company name"
      className='fontsmaller'
      />
    
    
    <Select
        onFocus={onFocus}
        showSearch={true}
        showArrow={false}
        labelInValue={false}
        value={value}
        placeholder="Industry"
        filterOption={true}
        onSearch={onSearch}
        onChange={onChange}
        style={style}
      >
        {children}
      </Select>
    
      <Select
        onFocus={onFocusSub}
        showSearch={true}
        showArrow={false}
        labelInValue={false}
        value={valuesub}
        placeholder="Subindustry"
        filterOption={true}
        onSearch={onSearchSub}
        onChange={onChangeSub}
        style={style}
      >
        {childrensub}
      </Select>
   
    
       
      <button 
      type="submit" 
      className='btn btn-big'
      onClick={onClick}>
       Create new company
       </button>
      </Form>
  </Wrapper>
)



