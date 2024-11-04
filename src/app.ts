import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import cookie from '@fastify/cookie'
import { transactionsRoute } from "./routes/transactions";

export const app = fastify()

app.register(cookie)

app.register(transactionsRoute, {
    prefix: 'transactions'
})