const _id = ({ match }) => {
  return (
    <h2>
      Id = {match.params.id}
    </h2>
  )
}

export default _id
