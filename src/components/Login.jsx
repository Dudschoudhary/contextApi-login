import React,{useState,useContext} from 'react';
import UseContext from '../Context/UserContext';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UseContext)

    const handilSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <>
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='UserName' className='outline-none border p-1 border-dark mx-2 rounded'/>
            <input type="Password"  placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='outline-none border p-1 border-dark mx-2 rounded'/>
            <button onClick={handilSubmit}>Submit</button>
        </div>
    </>
  )
}

export default Login