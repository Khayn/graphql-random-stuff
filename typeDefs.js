const {
	gql
} = require("apollo-server");

/**
 * schema definition
 */
const typeDefs = gql `
	type Query {
		"a simple greeting",
		greeting: String!,
		interestingUrls: [String]!,
		randomDiceThrow: Int!,
		randomCoinTossesUntilTrue: [Boolean],
		luckyNumbers: [Int!],
		pi: Float!,
		isTodayFriday: Boolean!,
		today: DayOfWeek!,
		workDays: [DayOfWeek!]!,
		"either it greets you.. or not"
		schroedingerCatGreeting: String,
		randomQuote: Quote!
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

"""
# this object respresents a quote
## contains a text and author's name
"""
type Quote {
	text: String,
	author: String
}
`;

module.exports = typeDefs;