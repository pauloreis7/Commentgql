import { ObjectType, Field, ID } from "type-graphql"

@ObjectType()
class Comment {
  @Field(() => ID)
  _id: String

  @Field()
  name: String

  @Field()
  content: String
}

export { Comment }