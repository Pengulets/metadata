import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import RoutesBSCPengus from 'routes/bsc/pengus';

const app = fastify();
void app.register(fastifyCors, {
	maxAge: 600,
	origin: true,
	credentials: true
});

void app.register(RoutesBSCPengus, { prefix: '/v1/pengus/' });

app.listen(8080, '0.0.0.0', console.error);
