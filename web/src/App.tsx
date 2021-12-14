import { gql, useQuery } from '@apollo/client'

import { Form } from './components/Form'
import { Comment } from './components/Comment'

import './styles.css'

interface CommentData {
  id: string
  name: string
  content: string
}

const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
      content
    }
  }
`

export function App() {
  const { loading, error, data } = useQuery<CommentData[]>(GET_COMMENTS)

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
        
        <Form />

        {loading 
          ? 'Loading...' : (
            <section className="comments">
              {data?.map(comment => (
                <Comment
                  id={comment.id}
                  name={comment.name}
                  description={comment.content}
                  handleDelete={(id) => (console.log(`${id} deleted`))}
                />
              ))}
            </section>
          )
        }
      </main>
    </div>
  )
}
