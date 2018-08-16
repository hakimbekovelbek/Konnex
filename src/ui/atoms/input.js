import React from 'react'
import styled from 'styled-components'


const InputRaw = styled.input.attrs({
  type: 'text',
  placeholder: props => props.name ? 'Company name' : props.industry ? 'Industry' : 'SubIndustry'
})`
  width: 100%;
  font-size: 13px;
  padding: 6px 10px;
  color: #595959;
  ::-webkit-input-placeholder {color: rgba(0, 0, 0, 0.45)};
  height: 42px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  &:last-child{
    margin-bottom: 0;
  }
  &:hover{
    border: 1px solid #60bef5;
  }
`

export const Input = ({ name, industry, onChange}) => (
  <InputRaw onChange={onChange} name={name} industry={industry}/>
)
