import React from 'react'
// import styled from 'styled-components'
import {Wrapper, Form, Header} from './login'
import { Input } from 'antd'
import "./styles.css"



// const Paragraph = styled.p`
// font-size: 12px;
// font-weight: 300;
// line-height: 1;
// color: #788195;
// font-family: 'Roboto', sans-serif;
// text-align: center;
// margin: 30px 0;
// `


export const RegisterUserUI = ({ 
  onClick, onChangeName,
  //  value, onChange, onSearch, onFocus, style, children, onFocusSub, childrensub, onChangeSub, valuesub, onSearchSub, onFocusCompany, onSearchCompany, onChangeCompany, childrenCompany, valuecompany 
  }) => (
  <Wrapper>
    <Form>
      <Header>Konnex</Header>
      
  <Input.Group>
      {/*First Name*/}
      <Input 
      // onChange={onChangeName} 
      size="large"
      placeholder="First name"
      className='fontsmaller halfinput'
      />
       {/*Last Name*/}
      <Input 
      // onChange={onChangeName} 
      size="large"
      placeholder="Last name"
      className='fontsmaller halfinput'
      />
      </Input.Group>
      
        <Input 
      // onChange={onChangeName} 
      size="large"
      placeholder="Mobile"
      className='fontsmaller'
      />
      <Input 
      // onChange={onChangeName} 
      size="large"
      placeholder="Email"
      className='fontsmaller'
      />
      <Input 
      // onChange={onChangeName} 
      type="password"
      size="large"
      placeholder="Password"
      className='fontsmaller'
      />
      <Input 
      // onChange={onChangeName} 
      type="password"
      size="large"
      placeholder="Confirm Password"
      className='fontsmaller'
      />
    
      <button 
      type="submit" 
      className='btn btn-big'
      onClick={onClick}>
       Sign Up
       </button>
      </Form>
  </Wrapper>
)



