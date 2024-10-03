import React,{useContext} from 'react'
import UseContext from '../Context/UserContext'
const Profile = () => {
    const {user} = useContext(UseContext)
  if(!user) return <div>please login</div>

  return <div>Welcome {user.username}</div>
 
 
   
}

export default Profile