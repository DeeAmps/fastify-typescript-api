import { fastify } from "fastify";
import fastifyHelmet from "@fastify/helmet";
import fastifySensible from "@fastify/sensible";
import notesRouter from './routes/notes.route'
import healthCheckRouter from "./routes/healthCheck.router";

const app = fastify({ logger: { prettyPrint: true } })
const port = process.env.PORT || 4001

app.register(fastifyHelmet)
app.register(fastifySensible)
app.register(healthCheckRouter)
app.register(notesRouter)

const startServer = async () => {
    try {
        await app.listen(port, '0.0.0.0')
    } catch(err) {
        app.log.error(err)
        process.exit(1)
    }
}

startServer()