import { gql, useQuery, useMutation } from '@apollo/client'

import { Form } from './components/Form'
import { Comment } from './components/Comment'

import './styles.css'

interface CommentData {
  getComments : {
    _id: string
    name: string
    content: string
  }[]
}

const GET_COMMENTS = gql`
  query {
    getComments {
      _id
      name,
      content
    }
  }
`

const DELETE_COMMENTS = gql`
  mutation ($id: String!) {
    deleteComment(commentId: $id)
  }
`

export function App() {
  const { loading, error, data, refetch } = useQuery<CommentData>(GET_COMMENTS)

  const [deleteComment] = useMutation(DELETE_COMMENTS)

  function handleAddComment() {
    refetch()
  }

  async function handleDeleteComment(id: string) {
    await deleteComment({ variables: { id } })

    refetch()
  }

  if(error) {
    return (
      <div id="app">
        Error :/
      </div>
    )
  }

  return (
    <div id="app">
      <main>
        <h1>Commentgql</h1>
        
        <Form refetchComments={handleAddComment} />

        {loading 
          ? 'Loading...' : (
            <section className="comments">
              {data?.getComments.map(comment => (
                <Comment
                  key={comment._id}
                  id={comment._id}
                  name={comment.name}
                  description={comment.content}
                  handleDelete={handleDeleteComment}
                />
              ))}
            </section>
          )
        }
      </main>
    </div>
  )
}
