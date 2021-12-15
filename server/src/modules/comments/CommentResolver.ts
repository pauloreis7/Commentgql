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
  @Mutation(() => Comment)
  async addComment(@Arg('commentInput') commentInput: CommentInput) {
    return CommentSchema.create(commentInput)
  }

  @Query(() => [Comment])
  async getComments() {
    return CommentSchema.find()
  }
}

export { CommentResolver }