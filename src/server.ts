import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import { transactionsRoute } from "./routes/transactions";

const app = fastify()

app.register(transactionsRoute)

app.listen({
    port: env.PORT,
}).then(() => {
    console.log('HTTP Runing!')
})