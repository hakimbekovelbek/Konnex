import React from 'react'
import styled from 'styled-components'
import img from './bg.jpg'
import logo from './logo.jpg';



const HomeBg = styled.div`
  position: absolute;
  height: 100vh;
  width: 68%;
  background-size: cover;
  opacity: .8;
  background: url(${img}) 100% 100% no-repeat;
  
`
const HomeLogo = styled.img`
    position: relative;
      width: 35%;
      left: 30%;
      top: 100px;
      padding: 23px;
      background-color: white
      z-index:100;
      transition: 2s ease;
      &:hover{
        transform: scale(1.08);
        box-shadow: 0 0 0 15px hsla(0,0%,0%,.5);
       
      }
`
const BgDark = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
  position: absolute;
`

export const Home = () => (
  <React.Fragment>
    <HomeBg>
        <BgDark/>
        <HomeLogo src={logo}/>
     </HomeBg>
     
  </React.Fragment>
)