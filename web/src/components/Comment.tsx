type CommentProps = {
  id: string, 
  name: string, 
  description: string, 
  handleDelete: (id: string) => void
}

export function Comment({ 
  id,
  name,
  description,
  handleDelete
}: CommentProps) {
  return (
    <div className="comment">
      <div className="comment-content">
        <p className="comment-name">Name: {name}</p>
        <p>{description}</p>
      </div>
      <div className="comment-action">
        <button onClick={() => handleDelete(id)}>X</button>
      </div>
    </div>
  )
}