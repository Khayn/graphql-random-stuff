const {
	ApolloServer,
	gql
} = require("apollo-server");

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
	rootValue: data
});

server.listen({
	port: PORT
}).then(result => console.log(result.url));