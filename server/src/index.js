import { ApolloServer } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'
import path from 'path'

import Query from './resolvers/Query'
import LinkConnection from './resolvers/LinkConnection'
import LinkEdge from './resolvers/LinkEdge'
import Viewer from './resolvers/Viewer'

const app = express()
const resolvers = {
    Query,
    Viewer,
    LinkConnection,
    LinkEdge,
    Node: {
        __resolveType(node, context, info){
            if(node.title){
                return 'Link'
            }
            return null
        }
    },
}
const prisma = new PrismaClient()
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
      ),
    resolvers,
    context: ({ req }) => {
        return {
            ...req,
            prisma
        }
    },
})

server.applyMiddleware({app})

app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}${server.graphqlPath}`)
})
