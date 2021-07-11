import { useParams, useLocation } from 'react-router-dom'
import '../../App.css'

// // get params by prop
// const _id = ({ match }) => {
//   return (
//     <h2>
//       Id = {match.params.id}
//     </h2>
//   )
// }

// get params by hook
const _id = () => {
  const { id } = useParams()
  // get query by hook
  const query = new URLSearchParams(useLocation().search)
  return (
    <>
      <h2>
        Id = {id}
      </h2>
      {!!query.toString().length && (<h2 className="query-content">
        Query = {Array.from(query.keys()).map(key => (<p key={`${key}-${query.get(key)}`}>{key}: {query.get(key)}</p>))}
      </h2>)}
    </>
  )
}

export default _id
