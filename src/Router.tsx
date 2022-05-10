import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Components/Header'
import Lobby from './lobby'

import Home from './Route/home'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Lobby></Lobby>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
