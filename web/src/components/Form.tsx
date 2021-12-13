import { useState } from "react";

export function Form() {
  const [name, setName] = useState<string>('')
  const [content, setContent] = useState<string>('')

  return (
    <form>
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
      <button type="submit">Send</button>
    </form>
  );
}