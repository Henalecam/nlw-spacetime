import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify();
const Prisma = new PrismaClient();

app.get('/users', async (request, reply) => {
    const users = await Prisma.user.findMany();
    return users;
});  
app
.listen({
    port: 3333,
})
.then(() => {
    console.log("🚀 Server is running on port 3333");
});