import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h2 className='bg-gray-500 text-white'>Hello Duds !</h2>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
