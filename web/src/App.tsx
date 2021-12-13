import { Form } from './components/Form'
import { Comment } from './components/Comment'

export function App() {
  return (
    <>
      <h1>Commentgql</h1>
      
      <Form />

      <section className="comments">
        <Comment
          id='1'
          name='Paulo Reis'
          description='Description ex'
          handleDelete={(id) => (console.log(`${id} deleted`))}
        />
        <Comment
          id='1'
          name='Paulo Reis'
          description='Description ex'
          handleDelete={(id) => (console.log(`${id} deleted`))}
        />
      </section>
    </>
  )
}
