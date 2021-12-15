import { Schema, model } from 'mongoose'

type Comment = {
  name: string
  content: string
}

const CommentSchema = new Schema({
  name: String,
  content: String
})

export default model<Comment>("Comment", CommentSchema)
