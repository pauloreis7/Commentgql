import { Form } from './components/Form'
import { Comment } from './components/Comment'

import './styles.css'

export function App() {
  return (
    <div id="app">
      <main>
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
      </main>
    </div>
  )
}
