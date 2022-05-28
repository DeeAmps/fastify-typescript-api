import { FastifyReply, FastifyRequest } from "fastify";

export const getNotesHandler = async (_request: FastifyRequest, _reply: FastifyReply) => {
    return { notes: [], success: true }
}
