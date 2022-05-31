import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { CunstomInput, PwdInput } from '../Layout/Input'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from '../Layout/Button'
import { SignupApi } from '../api'
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
  div {
    margin-top: 20px;
  }
`
const ErrorMessage = styled.span`
  margin-top: 10px;
  color: red;
`
export function SignUpContainer() {
  const {
    register,
    watch,
    setError,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' })
  // console.log(watch())

  const Pwd = useRef({})
  Pwd.current = watch('password', '')

  const onValid = async (data: any) => {
    const result = await SignupApi(data)
    console.log('결과', result)
    if (result.result === 'success') {
      window.location.replace('/signin')
    } else {
      alert('popup')
    }
  }
  return (
    <>
      <LoginWrapper>
        <form onSubmit={handleSubmit(onValid)}>
          <LoginContainer>
            <CunstomInput
              register={register('id', {
                required: 'write here',
              })}
              placeholder="아이디 입력"
            ></CunstomInput>
            <CunstomInput
              register={register('name', {
                required: 'write here',
              })}
              placeholder="이름"
            ></CunstomInput>
            <PwdInput
              register={register('password', {
                required: 'write here',
              })}
              placeholder="비밀번호 입력"
            />
            <ErrorMessage>
              <span>{errors?.Pwd?.message}</span>
            </ErrorMessage>

            <PwdInput
              register={register('ConfirmPwd', {
                required: 'write here',
                validate: value =>
                  value === Pwd.current || 'The passwords do not match',
              })}
              // onFocus={e => setpwdError(false)}
              // onBlur={checkPwd}
              // value={confirmPwd}
              // onChange={handleConfirmPwd}
              placeholder="비밀번호 확인"
            />
            <ErrorMessage>
              <span>{errors?.ConfirmPwd?.message}</span>
            </ErrorMessage>
            <Button color="black">회원가입</Button>
          </LoginContainer>
        </form>
      </LoginWrapper>
    </>
  )
}
