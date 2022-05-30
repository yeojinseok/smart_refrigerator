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

  function handlePwd(e: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = e
    setPwd(value)
  }

  return (
    <>
      <LoginWrapper>
        <LoginContainer>
          <CunstomInput register placeholder="아이디"></CunstomInput>
          <PwdInput
            register
            value={pwd}
            onChange={handlePwd}
            placeholder="비밀번호 입력"
          />
          <Button color="black"> 버튼</Button>
        </LoginContainer>
      </LoginWrapper>
    </>
  )
}
