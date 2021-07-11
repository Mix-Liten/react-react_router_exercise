import { useParams } from 'react-router-dom'

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
  return (
    <h2>
      Id = {id}
    </h2>
  )
}

export default _id
