import React from 'react'
import styled, { keyframes } from 'styled-components'

const Box = styled.div`
  margin-top: 100px;
`

const LoaderWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`

const color = keyframes`
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
`

const SVG = styled.svg.attrs({
  viewBox: '25 25 50 50'
})`
  animation: ${rotate} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

const CIRCLE = styled.circle.attrs({
  cx: '50',
  cy: '50',
  r: '20',
  fill: 'none',
  strokeWidth: '2',
  strokeMiterlimit: '10'
})`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite, ${color} 6s ease-in-out infinite;
  stroke-linecap: round;
`
export const LoaderUI = () => (
  <Box>
    <LoaderWrapper>
      <SVG>
        <CIRCLE/>
      </SVG>
    </LoaderWrapper>
  </Box>
)