import { motion } from 'framer-motion'
import styled from 'styled-components'
import React from 'react'
import { useMatch, Link } from 'react-router-dom'
import { Button } from '../Layout/Button'

// import Logo from "../assets/svg/logo.svg";
const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 1280px;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  margin: 0 auto;
  z-index: 10;
`

const Column = styled(motion.div)<{ isActive: boolean }>`
  width: 235px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  padding-left: 20px;
  margin: 10px 0px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`

const hoverVariants = {
  hover: {
    scale: 1.02,
    color: 'rgb(153,153,153)',
    backgroundColor: 'rgb(51,51,51)',
  },
}

function Header() {
  const mypageMatch = useMatch('/')
  const signinMatch = useMatch('/signin')
  const informationMatch = useMatch('/information')
  const homeMatch = useMatch('/home')

  console.log(homeMatch, mypageMatch)
  return (
    <Nav>
      <Column
        variants={hoverVariants}
        whileHover={{ backgroundColor: 'rgb(51,51,51)' }}
        isActive={homeMatch !== null}
      >
        <Link to="/">홈</Link>
      </Column>
      <Column
        variants={hoverVariants}
        whileHover="hover"
        isActive={signinMatch !== null}
      >
        <Link to="/signin">회원가입/로그인</Link>
      </Column>
      <Column
        variants={hoverVariants}
        whileHover="hover"
        isActive={mypageMatch !== null}
      >
        <Link to="/mypage/account">마이페이지</Link>
      </Column>
      <Column isActive={informationMatch !== null}>
        <Link to="/information/manual">이용 안내</Link>
      </Column>
    </Nav>
  )
}

export default Header
