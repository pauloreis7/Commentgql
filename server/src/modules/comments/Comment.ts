import { ObjectType, Field } from "type-graphql"

@ObjectType()
class Comment {
  @Field()
  name: String

  @Field()
  content: String
}

export { Comment }