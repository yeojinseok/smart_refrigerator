import { useEffect, useRef, useState } from 'react'
import React from 'react'

import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { Render } from './Render'
// import { HelperContainer } from './HelperContainer'

const Wrap = styled.div`
  margin-top: 100px;
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 992px;
  min-height: 100%;
  background-color: black;
  overflow: hidden;
`

const ViewPort = styled.div`
  width: 100%;
  height: 100vh;
`

const Lobby = () => {
  const inputAnimation = useAnimation()

  const toggleShow = () => {
    if (show) {
      inputAnimation.start({
        scaleX: 0,
      })
    } else {
      inputAnimation.start({ scaleX: 1 })
    }
    setShow(prev => !prev)
  }

  const canvasRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    Render(canvasRef, setLoading)
  }, [])

  return (
    <Wrap>
      <ViewPort ref={canvasRef} />;{loading && <></>}
    </Wrap>
  )
}

export default Lobby
