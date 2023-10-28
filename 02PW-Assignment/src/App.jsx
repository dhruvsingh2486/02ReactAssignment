import { useState } from 'react'
import Counter from './Counter/Counter'
import Login from './InstagramLoginPage/Instagramlogin'
import Signup from './InstagramSignupPage/Instagramsignup'



function App() {
  const [count, setCount] = useState(0)
 
const [isLogin, setIsLogin] = useState(false)
    


  return (
    <>
    <Counter />

    <hr style={{marginTop:"50px"}}></hr>

    {isLogin ? <Login setIsLogin={setIsLogin}/> : <Signup setIsLogin={setIsLogin} /> }
 
 

  
    </>
  )

  }


export default App
