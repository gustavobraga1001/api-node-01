import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import cookie from '@fastify/cookie'
import { transactionsRoute } from "./routes/transactions";

const app = fastify()

app.register(cookie)

app.register(transactionsRoute, {
    prefix: 'transactions'
})

app.listen({
    port: env.PORT,
}).then(() => {
    console.log('HTTP Runing!')
})