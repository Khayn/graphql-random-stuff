const {
	ApolloServer,
	gql
} = require("apollo-server");

const {
	ApolloServerPluginLandingPageGraphQLPlayground
} = require("apollo-server-core");

const PORT = process.env.PORT || 4000;

const typeDefs = gql `
	type Query {
	  greeting: String,
	  interestingUrls: [String]
	}
`;

const data = {
	greeting: "Hello!",
	interestingUrls: ["www.wsieci.pl", "www.dorzeczy.pl"]

}
const server = new ApolloServer({
	typeDefs,
	rootValue: data,
	playground: true,
	introspection: true,

	plugins: [
		ApolloServerPluginLandingPageGraphQLPlayground(),
	],
});

server.listen({
	port: PORT
}).then(result => console.log(result.url));