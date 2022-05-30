import { SigninContainer } from '../Components/SigninContainer'
import { SignUpContainer } from '../Components/SignupContainer'

const onSubmita = (event: React.FormEvent<HTMLFormElement>) => {
  console.log('비밀번호가짧아')
  event.preventDefault()
}

// export function signin() {
//   console.log('submit')
//   return <SigninContainer onSubmit={onSubmita}></SigninContainer>
// }
export function Signin() {
  return <SignUpContainer></SignUpContainer>
}
