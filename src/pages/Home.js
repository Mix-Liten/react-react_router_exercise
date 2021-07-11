import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  return (
    <>
      <h1>
        Home Page
      </h1>
      <ul className="post-link">
        <li>
          <Link to="/post/Matsumoto">Post ID: Matsumoto</Link>
        </li>
        <li>
          {/* to prop 連結位置，字串寫法 */}
          <Link to={`/post/Vivy?Song=${encodeURI("Fluorite Eye's Song")}`}>Post ID: Vivy</Link>
        </li>
        <li>
          {/* to prop 連結位置，物件寫法 */}
          <Link to={{
            pathname: "/post/Estella",
            search: `?Song=${encodeURI("Ensemble for Polaris")}`,
          }}>Post ID: Estella</Link>
        </li>
        <li>
          <Link to={{
            pathname: "/post/Grace",
            search: `?Song=${encodeURI("Sing My Pleasure (Grace Version)")}`,
          }}>Post ID: Grace</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
