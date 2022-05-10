import { useEffect, useRef, useState } from 'react'
import React from 'react'

import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { Render } from './Render'
// import { HelperContainer } from './HelperContainer'

const Wrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 992px;
  background-color: black;
  overflow: hidden;
`

const ViewPort = styled.div`
  width: 100%;
  height: 100%;
`

const Button = styled(motion.span)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 5;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const Helper = styled(motion.div)`
  overflow-y: scroll;
  transform-origin: right center;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 500px;
  background-color: white;
  z-index: 9;
  display: flex;
  flex-direction: column;
  padding: 30px;
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
    // Support legacy sign in urls.

    Render(canvasRef, setLoading)
  }, [])

  const helperVariants = {
    hover: {
      scale: 1.1,
    },
  }

  return (
    <Wrap>
      <ViewPort ref={canvasRef} />;{loading && <></>}
    </Wrap>
  )
}

export default Lobby
