const {
	ApolloServer,
} = require("apollo-server");

const {
	ApolloServerPluginLandingPageGraphQLPlayground
} = require("apollo-server-core");

const rootValue = require("./rootValue");

const typeDefs = require("./typeDefs");

const PORT = process.env.PORT || 4000;

/**
 * server instance
 */
const server = new ApolloServer({
	typeDefs,
	rootValue,
	introspection: true,

	plugins: [
		ApolloServerPluginLandingPageGraphQLPlayground(),
	],
});

server.listen({
	port: PORT
}).then(result => console.log(result.url));


module.exports = typeDefs;