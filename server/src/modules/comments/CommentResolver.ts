import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

import { Comment } from "./Comment";
import CommentSchema from "./CommentSchema";

@InputType()
class CommentInput {
  @Field()
  name: String

  @Field()
  content: String
}

@Resolver()
class CommentResolver {
  @Query(() => [Comment])
  async getComments() {
    const comments = await CommentSchema.find()

    return comments
  }

  @Mutation(() => Comment)
  async addComment(@Arg('commentInput') commentInput: CommentInput) {
    const comment = await CommentSchema.create(commentInput)

    return comment
  }
  
  @Mutation(() => Boolean)
  async deleteComment(@Arg('commentId') commentId: string) {
    await CommentSchema.deleteOne({
      _id: commentId
    })

    return true
  }
}

export { CommentResolver }