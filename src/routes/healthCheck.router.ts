import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const healthCheckRouter = async (fastify: FastifyInstance) => {
    fastify.route({
        method: 'GET',
        url: '/healthcheck',
        handler: async (_request: FastifyRequest, _reply: FastifyReply) => {
            return { success: true }
        }
    })
}

export default healthCheckRouter