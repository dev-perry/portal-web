import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../contexts/Auth';

type AuthProps = {
  mode: 'login' | 'signup';
}

function AuthForm({mode} : AuthProps) : JSX.Element {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const {login, signup, user } = useContext(AuthContext)

  useEffect(()=>{
    if (user) router.replace('/portals')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])
  
  const handleToggle = () => {
    router.replace(mode === 'login' ? '/auth/signup' : '/auth')
  }

  const handleAuthEvent = () => {
    if(mode == 'login'){
      login(email, password)
    } else if(mode == 'signup'){
      if(confirmPassword != password){
        alert("Passwords do not match")
      }else if(confirmPassword == password) {
        signup(email, password)
      }
    }``
  }

  return( 
    <div className="flex flex-col items-center justify-center w-[480px] h-[550px] rounded border-2 border-[#E6E6E6] bg-[#FFFFFF]">
      <p className="text-3xl font-bold">{mode == 'login' ? 'Account Login' : 'Account Creation'}</p>
      <p className="font-regular text-base">
       {mode == 'login' ?  'Enter your credentials to access your account' : 'Set your credentials to create a new account'}
      </p>
      <div className="flex flex-col items-center mt-6 space-y-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg h-12 w-96 text-base font-regular border-[#D4D4D4] border-2"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg h-12 w-96 text-base font-regular border-[#D4D4D4] border-2"
          placeholder="Password"
        />
        {mode == 'signup' && 
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="rounded-lg h-12 w-96 text-base font-regular border-[#D4D4D4] border-2"
          placeholder="Confirm Password"
        />}
        <button onClick={handleAuthEvent} className="h-12 w-96 bg-[#427A5B] rounded-lg font-semibold text-[#FFFFFF] text-xl">
          {mode == "login" ? "Login" : "Sign Up"}
        </button>
      </div>
      <button className="mt-3 underline" onClick={handleToggle}>{mode == "login" ? "Don't have an account?" : "Already have an account?"}</button>
    </div>
  );
}

export default AuthForm;
