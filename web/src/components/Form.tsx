import { useState, FormEvent } from "react"
import { gql, useMutation } from '@apollo/client'

type FormProps = {
  refetchComments: () => void
}

interface CommentData {
  id: string
  name: string
  content: string
}

const SAVE_COMMENT = gql`
  mutation save($input: CommentInput) {
    saveComment(input: $input) {
      id
    }
  }
`

export function Form({ refetchComments }: FormProps) {
  const [name, setName] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const [addComment, { error }] = useMutation<CommentData>(SAVE_COMMENT, {
    variables: {
      input: {
        name,
        content,
      },
    },
  })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    await addComment()

    setName('')
    setContent('')

    refetchComments()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Type your name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        placeholder="Type your comment"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />

      {error && (
        <span>Error: {error.message}</span>
      )}

      <button type="submit">Send</button>
    </form>
  )
}