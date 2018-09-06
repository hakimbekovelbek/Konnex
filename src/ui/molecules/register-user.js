import React from 'react'
// import styled from 'styled-components'
import {Wrapper, Header} from './login'
import "./styles.css"
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Button, AutoComplete } from 'antd'


export const RegisterUserUI = ({ 
  onClick, onChangeName,
  onChangeSurname,
  onChangeMobile,
  onChangeEmail,
  onChangePassowrd,
  onChangePassowrdConf,
  onHandleSubmit,

  
  }) => (
  <Wrapper>
    <Form>
      <Header>Konnex</Header>
      
  <Input.Group>
    
      <Input 
      onChange={onChangeName} 
      size="large"
      placeholder="First name"
      className='fontsmaller halfinput'
      />

      <Input 
      onChange={onChangeSurname} 
      size="large"
      placeholder="Last name"
      className='fontsmaller halfinput'
      />
      </Input.Group>
      
        <Input 
      onChange={onChangeMobile} 
      size="large"
      placeholder="Mobile"
      className='fontsmaller'
      />
      <Input 
      onChange={onChangeEmail} 
      type="email"
      size="large"
      placeholder="Email"
      className='fontsmaller'
      />
      <Input 
      onChange={onChangePassowrd} 
      type="password"
      size="large"
      placeholder="Password"
      className='fontsmaller'
      />
          
      <Input 
      onChange={onChangePassowrdConf} 
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

  


  

