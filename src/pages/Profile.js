import { useEffect } from 'react'
import { Switch, Route, Link, useHistory, useRouteMatch } from 'react-router-dom'

const Profile = ({ isLogin }) => {
  const history = useHistory()
  const { path, url } = useRouteMatch()
  useEffect(() => {
    if (!isLogin) history.push('/')
  }, [isLogin, history])
  return (
    <>
      <h1>
        Profile Page
      </h1>

      <ul className="profile-link">
        <li>
          <Link to={`${url}/view`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/edit`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/view`}>
          <h2>View Profile Page</h2>
        </Route>
        <Route path={`${path}/edit`}>
          <h2>Edit Profile Page</h2>
        </Route>
      </Switch>
    </>
  )
}

export default Profile
