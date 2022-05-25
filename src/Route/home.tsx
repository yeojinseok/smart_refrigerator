import React from 'react'
import { SigninContainer } from '../Components/SigninContainer'
import { Wrapper } from '../Layout/DefaultLayout'
import Lobby from './lobby'
export default function Home() {
  return (
    <>
      <Wrapper>
        <Lobby></Lobby>
      </Wrapper>
    </>
  )
}
