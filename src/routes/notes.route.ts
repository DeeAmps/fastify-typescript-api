import { FastifyInstance } from "fastify";
import { getNotesHandler } from '../controllers/notes.controller';

const notesRouter = async (fastify: FastifyInstance) => {
    fastify.get('/notes', getNotesHandler)
}

export default notesRouter