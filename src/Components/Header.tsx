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
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
  background-color: ${props => props.theme.accentBgColor};
`

const Title = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: left;
  color: ${props => props.theme.textColor};
`
const Svg = styled(motion.svg)``
const LogoText = styled.span`
  font-size: 24px;
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
  },
}

function Header() {
  const mypageMatch = useMatch('/')
  const signinMatch = useMatch('/metanium/signin')
  const informationMatch = useMatch('/metanium/information')
  const homeMatch = useMatch('/metanium/home')

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
        <Link to="/metanium/signin">회원가입/로그인</Link>
      </Column>
      <Column
        variants={hoverVariants}
        whileHover="hover"
        isActive={mypageMatch !== null}
      >
        <Link to="/metanium/mypage/account">마이페이지</Link>
      </Column>
      <Column isActive={informationMatch !== null}>
        <Link to="/metanium/information/manual">이용 안내</Link>
      </Column>
      {/* <Button> dfdf</Button> */}
    </Nav>
  )
}

export default Header
