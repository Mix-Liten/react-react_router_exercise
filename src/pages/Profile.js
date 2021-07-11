import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Profile = ({ isLogin }) => {
  const history = useHistory()
  useEffect(() => {
    if (!isLogin) history.push('/')
  }, [isLogin, history])
  return (
    <h1>
      Profile Page
    </h1>
  )
}

export default Profile
