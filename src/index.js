import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "url";

const publicPath = fileURLToPath(new URL("../public/", import.meta.url));

const fastify = Fastify();

fastify.register(fastifyStatic, {
	root: publicPath,
	decorateReply: true,
});

fastify.setNotFoundHandler((req, reply) => {
	return reply.code(404).type('text/html').sendFile('404.html');
});

let port = parseInt(process.env.PORT) || 3000;
fastify.listen({ port, host: "0.0.0.0" }, () => {
	console.log(`Server running at http://localhost:${port}`);
});
