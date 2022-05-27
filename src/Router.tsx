import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Components/Header'
import Lobby from './Route/lobby'

import Home from './Route/home'
import { Signin } from './Route/signin'

const Wrap = styled.div`
  padding-top: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Wrap>
          <Header />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/signin" element={<Signin></Signin>} />
            <Route path="/signup" element={<Signin></Signin>} />
            <Route path="/mypage" element={<Signin></Signin>} />
            <Route path="/information" element={<Signin></Signin>} />
          </Routes>
        </Wrap>
      </BrowserRouter>
    </>
  )
}
