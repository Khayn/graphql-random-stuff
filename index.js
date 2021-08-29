const {
	ApolloServer,
	gql
} = require("apollo-server");

const {
	ApolloServerPluginLandingPageGraphQLPlayground
} = require("apollo-server-core");

const PORT = process.env.PORT || 4000;

/**
 * schema definition
 */
const typeDefs = gql `
	type Query {
		greeting: String,
		interestingUrls: [String],
		randomDiceThrow: Int,
		luckyNumbers: [Int],
		pi: Float,
		isTodayFriday: Boolean,
		randomCoinTossesUntilTrue: [Boolean],
		today: DayOfWeek,
		workDays: [DayOfWeek]
	}

	enum DayOfWeek {
	MON,
	TUE,
	WED,
	THU,
	FRI,
	SAT,
	SUN
}
`;



/**
 * prepares result map, with keys corresponding to typeDefs 
 * @returns server answer
 */
function rootValue() {
	const today = new Date();
	const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SUN"];

	const getRandomDiceThrow = (sides) => Math.ceil(Math.random() * sides);

	const randomCoinToss = () => Math.random() > 0.5;
	const getRandomCoinTossesUntilTrue = () => {
		const result = [];

		do {
			result.push(randomCoinToss());
		} while (!result[result.length - 1]);

		return result;
	};

	return {
		greeting: "Hello!",
		interestingUrls: ["www.wsieci.pl", "www.dorzeczy.pl"],
		randomDiceThrow: getRandomDiceThrow(6),
		luckyNumbers: [5, 7],
		pi: Math.PI,
		isTodayFriday: today.getDay() === 5,
		randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
		workDays: DAYS_OF_WEEK.slice(1,6),
		today: DAYS_OF_WEEK[today.getDay()]
	};
}

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