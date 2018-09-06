import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components'
import { LoaderButton } from '../atoms'
import "./styles.css";

export const Wrapper = styled.div`
  width: 24%;
  margin: 0 auto;
  padding: 5px;
  position: absolute;
  right: 50px;
  top: 100px;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  
`
export const Header = styled.h2`
font-size: 24px;
font-weight: 300;
line-height: 1;
text-transform: uppercase;
color: #788195;
font-family: 'Roboto', sans-serif;
text-align: center;
margin-bottom: 50px;
`
export const HeaderWelcome = styled.h1`
font-size: 70px;
font-weight: 300;
line-height: 1;
text-transform: uppercase;
color: #788195;
font-family: 'Roboto', sans-serif;
text-align: center;
margin-top: 250px;
opacity: 0.7;
transition: 4s;
&:hover{
  color: #4fb336;
}
`

export const NOTFOUND = styled.h1`
font-size: 70px;
font-weight: 300;
line-height: 1;
text-transform: uppercase;
color: red;
font-family: 'Roboto', sans-serif;
text-align: center;
margin-top: 200px;
opacity: 0.7;
transition: 4s;
&:hover{
  color: black;
}
`

export const Back = styled.h1`
font-size: 70px;
font-weight: 300;
line-height: 1;
text-transform: uppercase;
color: red;
font-family: 'Roboto', sans-serif;
text-align: center;
margin-top: 50px;
opacity: 0.7;
transition: 4s;
&:hover{
  color: black;
}
`

const Anchor = styled.a`
  color: #1890ff;
  font-family: 'Roboto';
  text-decoration: none;
  font-size: 12px;
  &:hover{
    cursor: pointer;
  }
`

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors
}


const renderField = ({
  input,
  label,
  type,
  meta: {touched, error}
}) => (
  <div>
    <div>
    {touched &&
        ((error && <span>{error}</span>
        )) } 
      <input {...input} placeholder={label} type={type} className='input-attrs'/>
    </div>
  </div>
)

const LoginUI = ({ onClick, onChangeEmail, onChangePass, loading , onClickAnchor}) => (
  <Wrapper>
    <Form>
      <Header>Konnex</Header>
      <Field className='input-attrs' name="email" type="email" label="Email" component={renderField} onChange={onChangeEmail} email />
      <Field className='input-attrs' name="password" type="password" label="Password" component={renderField} onChange={onChangePass} password/>
      { loading 
      ? <LoaderButton/> 
      : <button type="submit" className='btn' onClick={onClick}>Sign in</button>
      }
      </Form>
      <Anchor onClick={onClickAnchor}>Create a Konnex Account</Anchor>
  </Wrapper>
)

export default reduxForm({
  form: 'syncValidation',
  validate
})(LoginUI)


