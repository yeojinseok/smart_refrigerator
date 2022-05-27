import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { CunstomInput, PwdInput } from '../Layout/Input'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../Layout/Button'
const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`

// const { register, handleSubmit } = useForm<IForm>()

// const onValid = (data: IForm) => {
//   history.push(`/search?keyword=${data.keyword}`)
// }

export function SigninContainer() {
  const [pwd, setPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const checkPwd = () => {
    console.log('check', pwd, confirmPwd)
    if (pwd == confirmPwd) {
      setError(false)
    } else {
      setError(true)
    }
  }

  const inputRef = useRef<HTMLDivElement>(null)

  const handleClickOutSide = (e: any) => {
    if (inputRef) {
      if (!inputRef.current.contains(e.target)) checkPwd()
      else {
        setError(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide)
  })

  function handlePwd(e: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = e
    setPwd(value)
  }
  function handleConfirmPwd(e: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = e
    setConfirmPwd(value)
  }

  useEffect(() => {
    if (error) {
      setMessage('비밀번호가 같지 않습니다.')
    } else {
      setMessage('')
    }
  }, [error])
  return (
    <>
      <LoginWrapper>
        <LoginContainer>
          <CunstomInput placeholder="아이디"></CunstomInput>
          <PwdInput
            value={pwd}
            onChange={handlePwd}
            placeholder="비밀번호 입력"
          />
          <Button color="black"> 버튼</Button>
          {/* <PwdInput
            onFocus={e => setError(false)}
            onBlur={checkPwd}
            refs={inputRef}
            value={confirmPwd}
            onChange={handleConfirmPwd}
            placeholder="비밀번호 확인"
          /> */}
          {/* {message} */}
        </LoginContainer>
      </LoginWrapper>
    </>
  )
}
