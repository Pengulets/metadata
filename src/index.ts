import fastify from 'fastify';
import fastifyCors from 'fastify-cors';

const app = fastify();
void app.register(fastifyCors, {
	maxAge: 600,
	origin: true,
	credentials: true
});

app.listen(8080, '0.0.0.0', console.error);
