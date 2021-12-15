import "reflect-metadata";

import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import { CommentResolver } from './modules/comments/CommentResolver'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CommentResolver]
  })

  const server = new ApolloServer({ schema })

  server.listen({ port: 4100 }, 
    console.log(`🚀 Server is running on PORT 4100`)
  )
}

bootstrap()