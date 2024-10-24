import { FastifyInstance } from "fastify"
import { knex } from "../database"

export async function transactionsRoute(app: FastifyInstance) {
    app.get('/hello', async () => {
        const transactions = await knex('transactions').select("*")

        return transactions

    })
}
