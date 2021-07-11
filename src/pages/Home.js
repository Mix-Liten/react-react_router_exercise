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
          <Link to="/post/Vivy">Post ID: Vivy</Link>
        </li>
        <li>
          <Link to="/post/Matsumoto">Post ID: Matsumoto</Link>
        </li>
        <li>
          <Link to="/post/Estella">Post ID: Estella</Link>
        </li>
        <li>
          <Link to="/post/Grace">Post ID: Grace</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
